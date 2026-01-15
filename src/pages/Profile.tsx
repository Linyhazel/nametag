export default function ProfilePage() {
  return (
    <div className="w-full h-full overflow-y-auto pb-24 pt-8 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">About Me</h1>

        <section className="mb-12">
          <p className="text-lg text-neutral-300 leading-relaxed">
            Software developer with experience working in multicultural teams,
            known as a collaborative team player and fast learner. Possesses a
            strong solution-oriented mindset with hands-on project experience
            and a genuine passion for visual computing and software development.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-white border-b border-neutral-700 pb-2">
            Experience
          </h2>

          <div className="space-y-8">
            <div className="bg-neutral-900/50 rounded-lg p-6 border border-neutral-800">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium text-white">
                  Software Developer
                </h3>
                <span className="text-sm text-neutral-400">
                  05/2023 - Present
                </span>
              </div>
              <p className="text-lime-400 mb-3">
                Quanthome | Lausanne, Switzerland
              </p>
              <ul className="list-disc list-inside text-neutral-300 space-y-2">
                <li>
                  Developed, maintained, and optimized frontend and backend
                  components for data-driven web applications using React,
                  Node.js, and TypeScript.
                </li>
                <li>
                  Worked closely with the UI/UX design team to build innovative,
                  user-focused features, translating designs into interactive,
                  scalable, and maintainable components.
                </li>
                <li>
                  Designed and implemented RESTful APIs with user authentication
                  (Ory Kratos) and role-based access control (Ory Keto).
                </li>
              </ul>
            </div>

            <div className="bg-neutral-900/50 rounded-lg p-6 border border-neutral-800">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium text-white">
                  Research Assistant
                </h3>
                <span className="text-sm text-neutral-400">
                  02/2022 - 02/2023
                </span>
              </div>
              <p className="text-lime-400 mb-3">
                Idiap Research Institute | Lausanne, Switzerland
              </p>
              <ul className="list-disc list-inside text-neutral-300 space-y-2">
                <li>
                  Performed data collection from Wikipedia and applied NLP
                  techniques including named entity recognition and text
                  summarization.
                </li>
                <li>
                  Developed an interactive platform presenting analytical
                  insights on Swiss mountain lakes using native JavaScript.
                </li>
                <li>
                  Published paper "Characterizing Swiss Alpine Lakes: from
                  Wikipedia to Citizen Science".
                </li>
              </ul>
            </div>

            <div className="bg-neutral-900/50 rounded-lg p-6 border border-neutral-800">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium text-white">
                  Programmer Trainee
                </h3>
                <span className="text-sm text-neutral-400">
                  09/2018 - 08/2019
                </span>
              </div>
              <p className="text-lime-400 mb-3">
                ITE Smartcard Solutions / RF Tech Limited | Hong Kong
              </p>
              <ul className="list-disc list-inside text-neutral-300 space-y-2">
                <li>
                  Implemented software systems using ASP.NET, contributed to
                  full-stack development.
                </li>
                <li>
                  Developed a C# application to construct the internal file
                  system for a smartcard parking management system.
                </li>
                <li>
                  Assisted in setting up MySQL databases and took responsibility
                  for database management.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-white border-b border-neutral-700 pb-2">
            Education
          </h2>

          <div className="space-y-6">
            <div className="bg-neutral-900/50 rounded-lg p-6 border border-neutral-800">
              <h3 className="text-xl font-medium text-white">
                Master of Science in Digital Humanities
              </h3>
              <p className="text-lime-400">
                EPFL - Ecole polytechnique federale de Lausanne
              </p>
              <p className="text-neutral-400">2020 - 2022 | Switzerland</p>
            </div>

            <div className="bg-neutral-900/50 rounded-lg p-6 border border-neutral-800">
              <h3 className="text-xl font-medium text-white">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-lime-400">
                The Chinese University of Hong Kong
              </p>
              <p className="text-neutral-400">2015 - 2020 | Hong Kong</p>
              <p className="text-neutral-300 mt-2">
                Graduated with Honors, First Class | Dean's List 2019-2020
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6 text-white border-b border-neutral-700 pb-2">
            Skills
          </h2>

          <div className="flex flex-wrap gap-3">
            {[
              'TypeScript',
              'React',
              'Next.js',
              'Three.js',
              'Node.js',
              'REST API',
              'SQL',
              'Python',
              'MATLAB',
              'C#',
              'Java',
              'Unity 3D',
              'Software Testing',
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-lime-500/20 text-lime-300 rounded-full text-sm border border-lime-500/30"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
