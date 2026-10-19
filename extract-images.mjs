/**
 * PDF page extraction — renders each portfolio page as a JPEG.
 */
import { readFile, writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { createCanvas } from 'canvas';

const PDF_PATH = './Yismalem Awgichew Portfolio.pdf';
const OUT_BASE = './public/images';
const PDFJS_PATH = new URL('./node_modules/pdfjs-dist/legacy/build/pdf.mjs', import.meta.url).href;
const WORKER_PATH = new URL('./node_modules/pdfjs-dist/legacy/build/pdf.worker.mjs', import.meta.url).href;

const pdfjsLib = await import(PDFJS_PATH);
pdfjsLib.GlobalWorkerOptions.workerSrc = WORKER_PATH;

// page → [{ dir, name }]  (first entry always saved, rest are copies)
const PAGE_MAP = {
  4:  [['reclaiming-the-void',   'cover']],
  5:  [['reclaiming-the-void',   'process-diagrams']],
  6:  [['reclaiming-the-void',   'site-plan']],
  7:  [['reclaiming-the-void',   'section']],
  8:  [['reclaiming-the-void',   'east-elevation'],
       ['reclaiming-the-void',   'south-elevation']],
  9:  [['reclaiming-the-void',   'amphitheater'],
       ['reclaiming-the-void',   'entrance-pavilion']],
  10: [['twelfth-direction',     'cover'],
       ['twelfth-direction',     'design-process']],
  11: [['twelfth-direction',     'ground-floor-plan'],
       ['twelfth-direction',     'upper-floor-plan']],
  12: [['twelfth-direction',     'section']],
  13: [['twelfth-direction',     'structural-system'],
       ['twelfth-direction',     'kinetic-facade']],
  14: [['mch-hospital',          'cover'],
       ['mch-hospital',          '3d-model']],
  15: [['mch-hospital',          'front-elevation'],
       ['mch-hospital',          'right-elevation'],
       ['mch-hospital',          'lobby-interior']],
  16: [['ministry-of-health',    'cover'],
       ['ministry-of-health',    'floor-plan']],
  17: [['ministry-of-health',    'boardroom'],
       ['ministry-of-health',    'breakout-area'],
       ['ministry-of-health',    'workstation'],
       ['ministry-of-health',    'reception']],
  18: [['apartment-mixed-use',   'cover'],
       ['apartment-mixed-use',   'apartment-ground-plan'],
       ['apartment-mixed-use',   'apartment-floor-plan'],
       ['apartment-mixed-use',   'apartment-elevation'],
       ['apartment-mixed-use',   'mixed-use-ground-plan'],
       ['apartment-mixed-use',   'mixed-use-floor-plan'],
       ['apartment-mixed-use',   'mixed-use-elevation']],
  19: [['computational-form',    'cover'],
       ['computational-form',    'overview']],
  20: [['computational-form',    'section'],
       ['computational-form',    'seating-tiers'],
       ['computational-form',    'space-frame-detail'],
       ['computational-form',    'gusset-plate'],
       ['computational-form',    'etfe-facade']],
  21: [['converging-traditions', 'cover'],
       ['converging-traditions', 'exterior']],
  22: [['converging-traditions', 'interior'],
       ['converging-traditions', 'elevation'],
       ['converging-traditions', 'plan']],
};

// Create all dirs
const allDirs = [...new Set(Object.values(PAGE_MAP).flat().map(([d]) => d))];
for (const d of allDirs) {
  const p = `${OUT_BASE}/${d}`;
  if (!existsSync(p)) await mkdir(p, { recursive: true });
}

const data = await readFile(PDF_PATH);
const pdf  = await pdfjsLib.getDocument({ data: new Uint8Array(data.buffer) }).promise;
console.log(`PDF loaded — ${pdf.numPages} pages\n`);

const SCALE = 1.8; // ~130dpi equivalent

for (const [pageNumStr, targets] of Object.entries(PAGE_MAP)) {
  const pageNum = parseInt(pageNumStr);
  const page = await pdf.getPage(pageNum);
  const viewport = page.getViewport({ scale: SCALE });
  const canvas = createCanvas(Math.round(viewport.width), Math.round(viewport.height));
  const ctx = canvas.getContext('2d');

  await page.render({ canvasContext: ctx, viewport }).promise;

  const buf = canvas.toBuffer('image/jpeg', { quality: 0.88 });

  // Save the rendered page to ALL named targets (same page content)
  for (const [dir, name] of targets) {
    const out = `${OUT_BASE}/${dir}/${name}.jpg`;
    await writeFile(out, buf);
    console.log(`✓ Page ${pageNum} → ${dir}/${name}.jpg  (${Math.round(buf.length/1024)} KB)`);
  }
}

console.log('\n✅ All images extracted.');
