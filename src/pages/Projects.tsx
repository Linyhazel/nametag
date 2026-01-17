import AnimatedSection from '@/components/AnimatedSection';
import { projects } from './const';

export default function ProjectsPage() {
  return (
    <div className="w-full h-full overflow-y-auto pb-24 pt-8 px-8">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection delay={0}>
          <h1 className="text-4xl font-bold mb-8 text-white">Projects</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <AnimatedSection delay={400}>
                <div
                  key={index}
                  className="bg-neutral-900/50 rounded-xl p-6 border border-neutral-800 hover:border-lime-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-lime-500/10 flex flex-col"
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

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-neutral-800 text-neutral-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-lime-500/20 text-lime-300 rounded-lg text-sm font-medium hover:bg-lime-500/30 transition-colors"
                    >
                      View Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </a>
                    {project.extraLink && (
                      <a
                        href={project.extraLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 text-neutral-300 rounded-lg text-sm font-medium hover:bg-neutral-700 transition-colors"
                      >
                        Paper
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
