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
    contentList: [
      'Graduated with Honors, First Class',
      "Dean's List 2019-2020",
    ],
  },
];

type Project = {
  title: string;
  descriptions: string[];
  tech: string[];
  type?: string;
  link: string;
  extraLink?: string;
};

export const projects: Project[] = [
  {
    title: 'Quanthome Platform',
    descriptions: [
      `As one of the developers behind the Quanthome Platform, 
      I helped build a SaaS product that brings clarity to real estate data,
      especially in a market where information is traditionally fragmented and hard to work with. 
      Quanthome unifies financial, ESG, structural, and market data for 
      millions of Swiss buildings and investment vehicles into a single, standardized platform 
      that analysts, investors, and asset managers can trust. 
      At its core, the platform lets users search, filter, compare, and analyze real estate assets 
      and portfolios with speed and accuracy, removing the need to chase down scattered sources.`,
    ],
    tech: ['React', 'Node.js', 'TypeScript', 'REST API', 'Ory'],
    type: 'Professional project',
    link: 'https://quanthome.com/products/platform',
  },
  {
    title: 'Disney Movie Visualization',
    descriptions: [
      `For the COM-480 Data Visualization course project, my teammates and I built “Disney Movie Viz”, 
      an interactive web visualization that explores patterns and relationships in data from Disney movies. 
      The site invites users to interactively explore multiple aspects of the Disney corpus, 
      such as character popularity, movie financials, and creative collaborations, using engaging 
      visual elements directly in the browser. We crafted this project to make multivariate data fun and accessible, 
      combining interactive charts, sliders, and visual encodings so that users can draw their own insights 
      without needing any background in statistics or data science.`,
    ],
    tech: ['Javascript', 'HTML', 'CSS', 'Data science', 'Data visualization'],
    type: 'Course project',
    link: 'https://com-480-data-visualization.github.io/data-visualization-project-2021-vizzz/',
  },
  {
    title: '2000Lake',
    descriptions: [
      `2000Lakes is part of a broader research and citizen science project focused on understanding 
      how climate change affects high-mountain lakes above 2000 m in the Alps, 
      with a particular focus on ecological and microbial dynamics. 
      The platform allows users to explore real scientific measurements through interactive visualizations. 
      To provide better context, the dataset is enriched with information sourced from Wikipedia, 
      helping users connect scientific data with geographic, and cultural knowledge about each lake.`,

      `This work contributed to a peer-reviewed ACM publication, documenting both the scientific insights and 
      the design of the interactive system used to communicate them.
      My goal with this project was to bridge scientific research and public engagement through thoughtful 
      data visualization and interaction design.`,
    ],
    tech: ['JavaScript', 'HTML', 'CSS', 'Data visualization', 'NLP', 'Python'],
    type: 'Research project',
    link: 'https://linyhazel.github.io/2000Lakes_web/',
    extraLink: 'https://dl.acm.org/doi/full/10.1145/3617128',
  },
  {
    title: 'WatchIt',
    type: 'Interest oriented project',
    descriptions: [
      `WatchIT is a parametric 3D watch part generator designed for enthusiasts, designers, 
      and makers who want a flexible way to create custom components for watches. 
      At its heart, WatchIT lets you define and tweak key parameters in real time, 
      immediately visualizing how your design changes and then exporting the results for 3D printing 
      or further refinement.`,
    ],
    tech: ['3D modelling', 'REST API', 'React', 'Typescript', 'Three.js'],
    link: 'https://www.watch-it.app/',
  },
];
