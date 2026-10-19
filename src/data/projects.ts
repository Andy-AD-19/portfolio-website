// src/data/projects.ts
// Single source of truth for all portfolio project data

export type ProjectCategory = 'educational' | 'professional' | 'personal';

export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
  span?: 'full' | 'half' | 'two-thirds' | 'one-third';
}

export interface ProjectSection {
  heading?: string;
  body?: string;
  images?: ProjectImage[];
}

export interface Project {
  id: string;
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  year: string;
  location: string;
  role: string;
  coverImage: string;
  coverAlt: string;
  /** Optional image used only on the home grid; falls back to coverImage. */
  thumbImage?: string;
  coverAspect: '4/3' | '3/4' | '16/9' | '3/2';
  description: string;
  conceptText?: string;
  sections?: ProjectSection[];
}

export const projects: Project[] = [
  // ─── EDUCATIONAL ─────────────────────────────────────────────────────────
  {
    id: 'reclaiming-the-void',
    slug: 'reclaiming-the-void',
    number: 1,
    title: 'Reclaiming the Void',
    subtitle: 'Quarry Transformation into Hybrid Spaces in Addis Ababa',
    category: 'educational',
    categoryLabel: 'Thesis Project',
    year: '2025',
    location: 'Bulbula, Addis Ababa, Ethiopia',
    role: 'Designer',
    coverImage: '/images/reclaiming-the-void/cover.jpg',
    coverAlt: 'Reclaiming the Void — geological gallery exterior integrating into the quarry landscape',
    coverAspect: '3/4',
    description: `The project focuses on the transformation of an abandoned quarry in Bulbula, Addis Ababa, into a multifunctional geological gallery. It proposes the integration of recreational and social facilities within the existing landscape, creating opportunities for public use and community engagement. The project aims to improve the site's accessibility and usability while giving new purpose to an underutilized urban area.`,
    conceptText: `The initial form emerges directly from the site's natural topography, acting as a continuation of the existing terrain rather than an imposed object. The continuous topographic form is fragmented into three distinct masses — each vertically shifted along the terrain to follow the existing landform and minimize disruption. The edges of the three masses are shifted toward one another to reduce both the portion embedded into the terrain and the volume exposed above ground.`,
    sections: [
      {
        heading: 'Design Development',
        body: 'Three functional zones are created from the fragmented masses: an upper public interface and arrival zone, a middle geological immersion zone, and a lower learning, reflection, and support zone.',
        images: [
          { src: '/images/reclaiming-the-void/concept.jpg', alt: 'Concept sheet showing the gallery set into the quarry terrain', span: 'full', caption: 'Concept — building as a continuation of terrain' },
          { src: '/images/reclaiming-the-void/form-generation.jpg', alt: 'Form generation diagrams: topographic form fragmented into three shifted masses', span: 'full', caption: 'Form generation' },
        ],
      },
      {
        heading: 'Site Plan',
        images: [
          { src: '/images/reclaiming-the-void/site-plan.jpg', alt: 'Site plan with gallery, amphitheater, promenade and quarry lake', span: 'two-thirds', caption: 'Site plan' },
          { src: '/images/reclaiming-the-void/aerial.jpg', alt: 'Aerial render of the quarry lake and circular pavilion', span: 'full', caption: 'Aerial view' },
        ],
      },
      {
        heading: 'Programme',
        body: 'The upper level serves as the primary entrance, accommodating a restaurant and café. Stone surfaces and glazing connect the interior with the quarry landscape. The middle level houses the main geological exhibition hall — its monolithic form and stone-textured surfaces reflect the geological character of the site. The lower level accommodates administrative functions and reflection spaces, maintaining a quieter connection with the landscape.',
        images: [
          { src: '/images/reclaiming-the-void/section.jpg', alt: 'Longitudinal section through the three gallery levels', span: 'full', caption: 'Longitudinal section' },
          { src: '/images/reclaiming-the-void/axonometric.jpg', alt: 'Axonometric view of the quarry and gallery', span: 'half', caption: 'Site axonometric' },
          { src: '/images/reclaiming-the-void/landscape.jpg', alt: 'Axonometric of the upper entrance and landscape', span: 'half', caption: 'Upper entrance' },
        ],
      },
      {
        heading: 'Elevations',
        images: [
          { src: '/images/reclaiming-the-void/elevations.jpg', alt: 'East and south elevations with renders', span: 'full', caption: 'Elevations' },
        ],
      },
      {
        heading: 'Outdoor Spaces',
        body: 'The amphitheater follows the site\'s natural topography, with curved terraced seating for viewing and social interaction. A centrally positioned native shade tree improves thermal comfort and creates a focal point. The upper entrance serves as the main arrival and orientation point, providing ticketing, information, and views across the quarry.',
        images: [
          { src: '/images/reclaiming-the-void/amphitheater.jpg', alt: 'Amphitheater with terraced seating and central shade tree', span: 'full', caption: 'Amphitheater' },
        ],
      },
    ],
  },
  {
    id: 'twelfth-direction',
    slug: 'twelfth-direction',
    number: 2,
    title: 'The Twelfth Direction',
    subtitle: 'Ethio Engineering Group Headquarters',
    category: 'educational',
    categoryLabel: 'Academic Project',
    year: '2025',
    location: 'Addis Ababa, Ethiopia',
    role: 'Designer',
    coverImage: '/images/twelfth-direction/cover.jpg',
    thumbImage: '/images/twelfth-direction/home-thumb.webp',
    coverAlt: 'The Twelfth Direction — high-rise headquarters tower with diagrid structure',
    coverAspect: '3/4',
    description: `The project explores the design of a high-rise headquarters for Ethio Engineering Group, a technology-oriented organization. The proposal integrates office spaces, administrative functions, and shared facilities within a vertically organized structure, creating a workplace that reflects the organization's identity and its connection to a constantly evolving technological environment.`,
    conceptText: `The base plan emerges from the union of two interlocking hexagons, which is extruded upward to form the tower. The form is then twisted to increase aerodynamic performance and optimize views. The podium shape evolves directly from the tower's geometry, created by splitting the tower's plan in half.`,
    sections: [
      {
        heading: 'Form Development',
        images: [
          { src: '/images/twelfth-direction/skyline.jpg', alt: 'Tower rendered within the Addis Ababa skyline', span: 'one-third', caption: 'Skyline view' },
          { src: '/images/twelfth-direction/elevation-north.jpg', alt: 'Tower elevation', span: 'one-third', caption: 'Elevation' },
          { src: '/images/twelfth-direction/elevation-south.jpg', alt: 'Tower elevation, opposite side', span: 'one-third', caption: 'Elevation' },
        ],
      },
      {
        heading: 'Spatial Organization',
        body: 'The spaces are organized according to a gradual transition from public to private. Ground and site levels incorporate greenery and accessible outdoor spaces that encourage public use and interaction. As the building rises, access becomes increasingly restricted, with upper floors dedicated to workspaces and facilities for employees.',
        images: [
          { src: '/images/twelfth-direction/site-plan.jpg', alt: 'Site plan and podium plans', span: 'full', caption: 'Site plan' },
          { src: '/images/twelfth-direction/plan-ground.jpg', alt: 'Ground floor plan', span: 'half', caption: 'Ground floor' },
          { src: '/images/twelfth-direction/plan-upper.jpg', alt: 'Upper floor plan', span: 'half', caption: 'Upper floor' },
          { src: '/images/twelfth-direction/plan-typical.jpg', alt: 'Typical office floor plan', span: 'two-thirds', caption: 'Typical floor' },
        ],
      },
      {
        heading: 'Structural System & Kinetic Façade',
        body: 'The high-rise uses a central reinforced concrete core combined with an external diagrid structure to provide vertical support and lateral stability. The diagrid distributes structural loads while allowing flexible, column-free floor layouts. A pile-supported raft foundation transfers building loads to the ground. The kinetic façade is positioned on the west side to address intense afternoon solar exposure — its movable elements respond to changing sunlight conditions, reducing solar radiation while maintaining controlled daylight penetration.',
        images: [
          { src: '/images/twelfth-direction/structure.jpg', alt: 'Structural system and kinetic façade diagrams', span: 'full', caption: 'Structure and façade' },
          { src: '/images/twelfth-direction/diagrid.jpg', alt: 'Diagrid structure model', span: 'half', caption: 'Diagrid' },
          { src: '/images/twelfth-direction/section.jpg', alt: 'Building section', span: 'half', caption: 'Section' },
        ],
      },
    ],
  },

  // ─── PROFESSIONAL ────────────────────────────────────────────────────────
  {
    id: 'mch-hospital',
    slug: 'mch-hospital',
    number: 3,
    title: "Mother's and Children's Specialized Hospital",
    subtitle: 'Exterior Design, 3D Modeling & Lobby Interior',
    category: 'professional',
    categoryLabel: 'Internship — Ministry of Health Ethiopia',
    year: '2025',
    location: 'Addis Ababa, Ethiopia',
    role: '3D Modeling · Exterior Design · Access Areas · Elevations · Lobby Interior',
    coverImage: '/images/mch-hospital/cover.jpg',
    coverAlt: "Mother's and Children's Specialized Hospital — 3D model exterior view",
    coverAspect: '4/3',
    description: `The project involved developing a detailed 3D model of the MCH Hospital, representing its architectural form and spatial layout. The work included exterior design and the planning of pedestrian and vehicular access areas to improve circulation and connectivity around the building.`,
    sections: [
      {
        images: [
          { src: '/images/mch-hospital/exterior.jpg', alt: 'Hospital exterior with parking and access areas', span: 'full', caption: 'Exterior and access' },
        ],
      },
      {
        heading: 'Elevations',
        body: 'The exterior elevations illustrate the façade design of the MCH Hospital, highlighting the arrangement of windows, glazed sections, and solid wall surfaces. The composition defines the building\'s architectural character while maintaining consistency across its different sides.',
        images: [
          { src: '/images/mch-hospital/elevation-front.jpg', alt: 'Front elevation', span: 'full', caption: 'Front elevation' },
          { src: '/images/mch-hospital/elevation-side.jpg', alt: 'Side elevation', span: 'full', caption: 'Side elevation' },
        ],
      },
      {
        heading: 'Lobby Interior',
        body: 'The lobby interior focuses on creating a functional and organized reception space for patients and visitors. Neutral finishes, natural light, and well-arranged waiting areas support circulation and provide comfortable spaces.',
        images: [
          { src: '/images/mch-hospital/lobby.jpg', alt: 'Lobby waiting area', span: 'half', caption: 'Lobby' },
          { src: '/images/mch-hospital/lobby-reception.jpg', alt: 'Lobby reception', span: 'half', caption: 'Reception' },
        ],
      },
    ],
  },
  {
    id: 'ministry-of-health',
    slug: 'ministry-of-health',
    number: 4,
    title: 'Health Infrastructure Lead Executive Office',
    subtitle: 'Interior Design — Ministry of Health Ethiopia',
    category: 'professional',
    categoryLabel: 'Internship — Ministry of Health Ethiopia',
    year: '2024–2025',
    location: 'Addis Ababa, Ethiopia',
    role: 'Interior Design · Presentation Material',
    coverImage: '/images/ministry-of-health/cover.jpg',
    coverAlt: 'Ministry of Health executive office — open workstation layout with architectural model display',
    coverAspect: '4/3',
    description: `The interior design of the Health Infrastructure Lead Executive Office organizes the workplace around two main zones: the Design Zone, dedicated to architectural and technical design work, and the Construction Zone, for tender preparation, construction documentation, and related administrative tasks. The layout distinguishes these functions while maintaining a cohesive working environment.`,
    sections: [
      {
        heading: 'Floor Plan',
        images: [
          { src: '/images/ministry-of-health/floor-plan.jpg', alt: 'Rendered floor plan of the executive office', span: 'two-thirds', caption: 'Floor plan' },
        ],
      },
      {
        heading: 'Boardroom & Breakout',
        body: 'The boardroom is designed for executive meetings, presentations, and strategic discussions. It features a large conference table with integrated greenery, executive seating, and a wall-mounted display. Timber wall panels, a coffered ceiling, and recessed lighting define the interior. The breakout area provides an informal space for staff with a high counter, bar stools, a kitchenette, and a display for presentations.',
        images: [
          { src: '/images/ministry-of-health/boardroom.jpg', alt: 'Boardroom with integrated greenery and timber panels', span: 'half', caption: 'Boardroom' },
          { src: '/images/ministry-of-health/breakout.jpg', alt: 'Breakout area with kitchenette and high counter', span: 'half', caption: 'Breakout' },
        ],
      },
      {
        heading: 'Workstation & Reception',
        body: 'The office is organized around an open workstation layout, with a central display for architectural models of the Ministry\'s health infrastructure projects. The design integrates work areas, storage, and executive office functions within a unified interior. The reception area serves as the main arrival point for visitors.',
        images: [
          { src: '/images/ministry-of-health/workstations.jpg', alt: 'Open workstation area', span: 'full', caption: 'Workstations' },
        ],
      },
    ],
  },
  {
    id: 'apartment-mixed-use',
    slug: 'apartment-mixed-use',
    number: 5,
    title: 'Apartment and Mixed-Use Buildings',
    subtitle: 'Selected Architectural Design from Internship',
    category: 'professional',
    categoryLabel: 'Internship — Cornerstone Consulting',
    year: '2024',
    location: 'Addis Ababa, Ethiopia',
    role: 'Architectural Design',
    coverImage: '/images/apartment-mixed-use/cover.jpg',
    coverAlt: 'Apartment building front elevation',
    coverAspect: '4/3',
    description: `Selected architectural design work from internship experience, including a residential apartment building and a mixed-use development integrating commercial and residential uses.`,
    sections: [
      {
        heading: 'Apartment Building',
        body: 'An apartment building designed to accommodate one household per floor. Each level contains a single residential unit, with spaces organized to support the daily needs and activities of its occupants.',
        images: [
          { src: '/images/apartment-mixed-use/plan-ground.jpg', alt: 'Apartment ground floor plan', span: 'one-third', caption: 'Ground floor' },
          { src: '/images/apartment-mixed-use/plan-typical.jpg', alt: 'Apartment typical floor plan', span: 'one-third', caption: 'Typical floor' },
          { src: '/images/apartment-mixed-use/section-apartment.jpg', alt: 'Apartment section', span: 'one-third', caption: 'Section' },
        ],
      },
      {
        heading: 'Mixed-Use Building',
        body: 'A nine-story mixed-use building designed to accommodate commercial functions on the ground and first floors, with residential units occupying the second floor through to the terrace level. The design integrates commercial and residential uses within a single development, creating a functional balance between business activities and urban living.',
        images: [
          { src: '/images/apartment-mixed-use/sheet.jpg', alt: 'Mixed-use building drawing sheet', span: 'full', caption: 'Drawing sheet' },
          { src: '/images/apartment-mixed-use/section-mixed-use.jpg', alt: 'Mixed-use building section', span: 'two-thirds', caption: 'Section' },
        ],
      },
    ],
  },

  // ─── PERSONAL ────────────────────────────────────────────────────────────
  {
    id: 'computational-form',
    slug: 'computational-form',
    number: 6,
    title: 'Computational Form',
    subtitle: 'National Arena — Parametric Stadium Design',
    category: 'personal',
    categoryLabel: 'Personal Project',
    year: '2026',
    location: 'Addis Ababa, Ethiopia',
    role: 'Designer',
    coverImage: '/images/computational-form/cover.jpg',
    coverAlt: 'National Arena — parametric stadium exterior with ETFE cushion facade in Ethiopian national colors',
    coverAspect: '4/3',
    description: `This stadium project explores the use of parametric design to develop a continuous structural form around a central soccer pitch and tiered seating bowl. The design combines a steel space frame with a colored ETFE facade and roof, creating a lightweight enclosure inspired by Ethiopia's national colors.`,
    conceptText: `A continuous curtain of diamond-shaped, inflated ETFE cushions clads the space frame in a vibrant pattern of green, yellow, and red, creating a translucent, weather-protective outer skin across the facade and roof.`,
    sections: [
      {
        images: [
          { src: '/images/computational-form/envelope.jpg', alt: 'Stadium envelope with colored ETFE cushions', span: 'half', caption: 'ETFE envelope' },
          { src: '/images/computational-form/panelisation.jpg', alt: 'Panelised envelope geometry', span: 'half', caption: 'Panelisation' },
        ],
      },
      {
        heading: 'Structure',
        body: 'A lightweight, three-dimensional steel space frame envelops the concrete seating bowl, curving inward at the top to form a long-span cantilevered canopy over the stands while leaving the pitch open to the sky. Three seating tiers use varying rake angles to improve sightlines, allowing spectators to maintain clear views from every level.',
        images: [
          { src: '/images/computational-form/interior-frame.jpg', alt: 'Interior view of the space frame canopy over the pitch', span: 'full', caption: 'Space frame canopy' },
          { src: '/images/computational-form/frame.jpg', alt: 'Steel space frame model', span: 'two-thirds', caption: 'Space frame' },
        ],
      },
      {
        heading: 'Connection Detail & Envelope',
        body: 'A custom steel gusset plate connects the tubular space frame to the perimeter columns. Bolted to the column head through an L-shaped connection plate, it brings together the converging truss members and transfers loads from the cantilevered roof and ETFE envelope to the primary structural system.',
        images: [
          { src: '/images/computational-form/details.jpg', alt: 'Seating tiers and connection details sheet', span: 'full', caption: 'Seating and details' },
          { src: '/images/computational-form/gusset-detail.jpg', alt: 'Gusset plate connection detail', span: 'one-third', caption: 'Gusset plate' },
        ],
      },
    ],
  },
  {
    id: 'converging-traditions',
    slug: 'converging-traditions',
    number: 7,
    title: 'Converging Traditions',
    subtitle: 'A Study in Ethiopian Orthodox Tewahedo Church Architecture',
    category: 'personal',
    categoryLabel: 'Personal Project',
    year: '2026',
    location: 'Addis Ababa, Ethiopia',
    role: 'Designer',
    coverImage: '/images/converging-traditions/cover.jpg',
    coverAlt: 'Converging Traditions — church combining circular Ethiopian form with a classical ribbed dome',
    coverAspect: '4/3',
    description: `The design explores a new interpretation of the Ethiopian Orthodox Tewahedo Church, combining its traditional circular form with the verticality of classical domed cathedrals. It retains a perimeter colonnade and four main entrances, while introducing a large ribbed dome that gives the building a stronger vertical profile.`,
    conceptText: `Four arched entry walkways are placed on a flat circular base to mark the main entrances from each cardinal direction. Rows of smaller pillars connected by arches line the outer edge between the main entrances, forming an open walkway around the building. A lower ring-shaped roof covers the outer walkway, and a wider angled roof sits atop the main round wall with a circular opening at the centre.`,
    sections: [
      {
        images: [
          { src: '/images/converging-traditions/axonometric.jpg', alt: 'Axonometric view of the church and site', span: 'full', caption: 'Axonometric' },
        ],
      },
      {
        heading: 'Interior',
        body: 'The interior is organized around a large central dome that rises above the surrounding circular walkways and tiered roof forms. The contrast between the low outer spaces and the soaring central volume defines the interior geometry, while arched openings around the dome\'s base bring natural light into the hall.',
        images: [
          { src: '/images/converging-traditions/cutaway.jpg', alt: 'Cutaway showing the dome interior', span: 'two-thirds', caption: 'Cutaway' },
        ],
      },
      {
        heading: 'Elevation & Plan',
        body: 'The elevation combines the compact circular form of a traditional Ethiopian church with a large central dome that introduces a stronger vertical presence. This approach maintains the familiar proportions of the circular church while reinterpreting its defining architectural features.',
        images: [
          { src: '/images/converging-traditions/form-process.jpg', alt: 'Form development steps', span: 'full', caption: 'Form development' },
          { src: '/images/converging-traditions/elevation.jpg', alt: 'Elevation', span: 'half', caption: 'Elevation' },
          { src: '/images/converging-traditions/plan.jpg', alt: 'Plan', span: 'half', caption: 'Plan' },
        ],
      },
    ],
  },
];

/* Helpers */
export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);

export const getNextProject = (currentSlug: string): Project => {
  const idx = projects.findIndex((p) => p.slug === currentSlug);
  return projects[(idx + 1) % projects.length];
};

export const getPrevProject = (currentSlug: string): Project => {
  const idx = projects.findIndex((p) => p.slug === currentSlug);
  return projects[(idx - 1 + projects.length) % projects.length];
};

export const getProjectsByCategory = (cat: ProjectCategory): Project[] =>
  projects.filter((p) => p.category === cat);
