export const profile = {
  name: 'Jammugari Dharani',
  initials: 'JD',
  location: 'Coimbatore, India',
  email: 'jammugaridharani@gmail.com',
  phone: '+919515077699',
  phoneDisplay: '+91 95150 77699',
  github: 'https://github.com/dharanij01',
  linkedin: 'https://www.linkedin.com/in/jammugari-dharani-36724a3b5',
};

export const skillGroups = [
  { title: 'Languages', chips: ['Python', 'JavaScript'] },
  { title: 'Web & Frameworks', chips: ['React.js', 'Node.js', 'Express.js', 'FastAPI', 'HTML', 'CSS'] },
  { title: 'Databases & Tools', chips: ['MongoDB', 'Git & GitHub', 'VS Code'] },
  { title: 'Productivity', chips: ['PowerPoint', 'Word', 'Excel'] },
];

export const experience = [
  {
    role: 'Junior Developer',
    meta: 'AROGANAM TECHNOLOGIES, COIMBATORE · SEP 2025 – PRESENT',
    items: [
      'Developing Python-based backend applications and APIs for internal software solutions',
      'Contributing to web application development and debugging using modern development tools',
      'Supporting data processing and automation tasks to improve system efficiency',
      'Collaborating with senior developers to implement scalable, maintainable software',
    ],
  },
  {
    role: 'Junior AR Developer',
    meta: 'PRAYA LABS',
    items: [
      'Built Augmented Reality applications and interactive experiences using industry-standard AR frameworks',
      'Implemented and tested AR features, debugging issues to improve stability and performance',
      'Collaborated cross-functionally to enhance application functionality and user experience',
    ],
  },
  {
    role: 'Web Development Intern',
    certified: true,
    meta: 'APEXPLANET SOFTWARE PVT LTD · 01 JUL 2026 – 15 AUG 2026 · VIRTUAL/ONLINE',
    items: [
      'Completed a 6-week, 3-day internship program in Web Development with HTML, CSS, and JavaScript',
      'Actively participated in assigned tasks, project development activities, and practical learning exercises',
      'Certificate ID: APSPL2645650 — issued by the Founder & CEO, ApexPlanet Software Pvt. Ltd., verifiable via QR code',
    ],
  },
];

export const projects = [
  {
    index: 'PROJECT 01',
    title: 'Akshaya Thulir',
    meta: 'Aroganam Technologies · Nov 2025 – May 2026',
    desc: 'Contributed to scalable software solutions under a college incubation initiative, supporting startup and innovation projects. Built and maintained applications using Python and web technologies with cross-functional teams.',
    tags: ['Python', 'Web', 'Agile'],
  },
  {
    index: 'PROJECT 02',
    title: 'Handwritten Text Recognition',
    meta: 'Personal Project · ML / OCR',
    desc: 'Developed an HTR system using publicly available datasets, applying image preprocessing and OCR techniques. Trained and iterated ML models for character and word recognition to boost accuracy.',
    tags: ['Python', 'OCR', 'Machine Learning'],
  },
  {
    index: 'PROJECT 03',
    title: 'Library Management System',
    meta: 'Full-Stack MERN Application',
    desc: 'Built a full-stack MERN application for managing books, members, and issue/return workflows with JWT-based authentication and REST APIs backed by MongoDB.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'JWT'],
  },
];

export const education = [
  {
    year: '2023 – 2027',
    school: 'Akshaya College of Engineering and Technology',
    degree: 'B.E. Computer Science and Engineering',
    score: 'CGPA 7.1',
  },
  {
    year: '2021 – 2023',
    school: 'SR Junior College',
    degree: 'Higher Secondary Certificate (HSC)',
    score: '66.5%',
  },
  {
    year: '2020 – 2021',
    school: 'A.P Model School',
    degree: 'Secondary School Certificate (SSC)',
    score: '96.83%',
  },
];

export const certifications = [
  { title: 'ARVR Internship Certificate', desc: 'PRAYA Labs' },
  { title: 'Learnathon 2024', desc: 'Completed courses organised by ICT Academy' },
  { title: 'Workshops & Hackathons', desc: 'Active participant in technical skill-development programs' },
];

export const facts = [
  { label: 'Location', value: profile.location },
  { label: 'Degree', value: 'B.E. CSE, 2023–2027' },
  { label: 'Current role', value: 'Junior Developer' },
  { label: 'Focus areas', value: 'Backend · Full-Stack · ML' },
  { label: 'Email', value: profile.email },
];
