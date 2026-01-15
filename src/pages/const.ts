type Experience = {
  title: string;
  period: string;
  company: string;
  contentList: string[];
};

export const experiences: Experience[] = [
  {
    title: 'Software Developer',
    period: '05/2023 - Present',
    company: 'Quanthome | Lausanne, Switzerland',
    contentList: [
      'Developed, maintained, and optimized frontend and backend components for data-driven web applications using React, Node.js, and TypeScript.',
      'Worked closely with the UI/UX design team to build innovative, user-focused features, translating designs into interactive, scalable, and maintainable components.',
      'Designed and implemented RESTful APIs with user authentication (Ory Kratos) and role-based access control (Ory Keto).',
    ],
  },
  {
    title: 'Research Assistant',
    period: '02/2022 - 02/2023',
    company: 'Idiap Research Institute | Lausanne, Switzerland',
    contentList: [
      'Performed data collection from Wikipedia and applied NLP techniques including named entity recognition and text summarization.',
      'Developed an interactive platform presenting analytical insights on Swiss mountain lakes using native JavaScript.',
      'Published paper "Characterizing Swiss Alpine Lakes: from Wikipedia to Citizen Science".',
    ],
  },
  {
    title: 'Software Testing Engineer Intern',
    period: '08/2021 - 01/2022',
    company: 'OPPO/Yang Technology AG | Zurich, Switzerland',
    contentList: [
      'Performed cellphone feature validation, interoperability testing and field evaluation according to local and general requirements to make sure OPPO products can launch Swiss market correctly.',
      'Communicated closely with local customers and overseas development team, composed test reports and helped with debugging.',
    ],
  },
  {
    title: 'Programmer Trainee',
    period: '09/2018 - 08/2019',
    company: 'ITE Smartcard Solutions / RF Tech Limited | Hong Kong',
    contentList: [
      'Implemented software systems using ASP.NET, contributed to full-stack development.',
      'Developed a C# application to construct the internal file system for a smartcard parking management system.',
      'Assisted in setting up MySQL databases and took responsibility for database management.',
    ],
  },
  {
    title: 'Summer Intern',
    period: '06/2018 - 08/2018',
    company: 'Logistics and Supply Chain MultiTech R&D Centre',
    contentList: [
      'Designed and implemented a Python-based GUI for trademark recognition.',
      'Developed an Android application using Android Studio to control and monitor delivery robots.',
      'Created and executed test cases for robots, analyzed performance metrics, and evaluated system reliability based on test results.',
    ],
  },
];

type Education = {
  degree: string;
  period: string;
  school: string;
  contentList: string[];
};

export const educations: Education[] = [
  {
    degree: 'Master of Science in Digital Humanities',
    period: '2020 - 2022',
    school: 'Ecole polytechnique federale de Lausanne',
    contentList: [],
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    period: '2015 - 2020',
    school: 'The Chinese University of Hong Kong',
    contentList: ["Graduated with Honors, First Class | Dean's List 2019-2020"],
  },
];

type Project = {
  title: string;
  description: string;
  tech: string[];
  type?: string;
  link: string;
  extraLink?: string;
};

export const projects: Project[] = [
  {
    title: 'Quanthome',
    description:
      'Frontend and backend components for enterprise-level data-driven web applications at Quanthome, featuring RESTful APIs with Ory Kratos authentication and Ory Keto role-based access control.',
    tech: ['React', 'Node.js', 'TypeScript', 'REST API', 'Ory kratos'],
    type: 'Professional project',
    link: 'https://quanthome.com/products/platform',
  },
  {
    title: 'WatchIt',
    type: 'For fun',
    description:
      'An interactive platform presenting analytical insights on Swiss mountain lakes, built with native JavaScript. Part of research work published as "Characterizing Swiss Alpine Lakes: from Wikipedia to Citizen Science".',
    tech: ['3D modelling', 'Restful API', 'React', 'Three.js'],
    link: 'https://www.watch-it.app/',
  },
  {
    title: '2000Lake',
    description:
      'An interactive platform presenting analytical insights on Swiss mountain lakes, built with native JavaScript. Part of research work published as "Characterizing Swiss Alpine Lakes: from Wikipedia to Citizen Science".',
    tech: ['JavaScript', 'Data visualization', 'NLP', 'Python'],
    type: 'Research project',
    link: 'https://linyhazel.github.io/2000Lakes_web/',
    extraLink: 'https://dl.acm.org/doi/full/10.1145/3617128',
  },
  {
    title: 'Disney Movie Visualization',
    description:
      'A C# application to construct the internal file system for smartcards, deployed in a parking management system.',
    tech: ['Javascript', 'Data science', 'Data visualization'],
    type: 'Course project',
    link: 'https://com-480-data-visualization.github.io/data-visualization-project-2021-vizzz/',
  },
];
