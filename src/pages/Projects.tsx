export default function ProjectsPage() {
  const projects = [
    {
      title: 'Swiss Alpine Lakes Platform',
      description:
        'An interactive platform presenting analytical insights on Swiss mountain lakes, built with native JavaScript. Part of research work published as "Characterizing Swiss Alpine Lakes: from Wikipedia to Citizen Science".',
      tech: ['JavaScript', 'Data Visualization', 'NLP', 'Python'],
      type: 'Research',
    },
    {
      title: 'Data-Driven Web Applications',
      description:
        'Frontend and backend components for enterprise-level data-driven web applications at Quanthome, featuring RESTful APIs with Ory Kratos authentication and Ory Keto role-based access control.',
      tech: ['React', 'Node.js', 'TypeScript', 'REST API', 'Ory Kratos'],
      type: 'Professional',
    },
    {
      title: 'Smartcard File System Application',
      description:
        'A C# application to construct the internal file system for smartcards, deployed in a parking management system.',
      tech: ['C#', 'ASP.NET', 'MySQL'],
      type: 'Professional',
    },
    {
      title: 'Trademark Recognition GUI',
      description:
        'Python-based graphical user interface for trademark recognition system.',
      tech: ['Python', 'GUI Development', 'Image Recognition'],
      type: 'Internship',
    },
    {
      title: 'Delivery Robot Control App',
      description:
        'Android application to control and monitor delivery robots, including test case creation and performance metrics analysis.',
      tech: ['Android Studio', 'Java', 'Robotics'],
      type: 'Internship',
    },
  ]

  return (
    <div className="w-full h-full overflow-y-auto pb-24 pt-8 px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800 hover:border-lime-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-lime-500/10"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <span className="text-xs px-2 py-1 bg-lime-500/20 text-lime-300 rounded-full">
                  {project.type}
                </span>
              </div>

              <p className="text-neutral-400 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 bg-neutral-800 text-neutral-300 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-white border-b border-neutral-700 pb-2">
            Interests & Hobbies
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { name: 'Photography', icon: '📷' },
              { name: '3D Modeling', icon: '🎨' },
              { name: 'Drawing', icon: '✏️' },
              { name: 'Hiking', icon: '🥾' },
              { name: 'Swimming', icon: '🏊' },
            ].map((interest) => (
              <div
                key={interest.name}
                className="bg-neutral-900/50 rounded-lg p-4 border border-neutral-800 text-center hover:border-lime-500/50 transition-colors"
              >
                <span className="text-3xl mb-2 block">{interest.icon}</span>
                <span className="text-neutral-300 text-sm">
                  {interest.name}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
