import { educations, experiences } from './const';

export default function ProfilePage() {
  return (
    <div className="w-full h-full overflow-y-auto pb-24 pt-8 px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-white">
          Hello! My name is <span className="">Yuanhui</span>
        </h1>

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
            {experiences.map((experience) => (
              <div className="bg-neutral-900/50 rounded-lg p-6 border border-neutral-800">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-medium text-white">
                    {experience.title}
                  </h3>
                  <span className="text-sm text-neutral-400">
                    {experience.period}
                  </span>
                </div>
                <p className="text-lime-400 mb-3">{experience.company}</p>
                <ul className="list-disc list-inside text-neutral-300 space-y-2">
                  {experience.contentList.map((content) => (
                    <li>{content}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-white border-b border-neutral-700 pb-2">
            Education
          </h2>

          <div className="space-y-6">
            {educations.map((education) => (
              <div className="bg-neutral-900/50 rounded-lg p-6 border border-neutral-800">
                <h3 className="text-xl font-medium text-white">
                  {education.degree}
                </h3>
                <p className="text-lime-400">{education.school}</p>
                <p className="text-neutral-400">{education.period}</p>
                {education.contentList.map((content) => (
                  <p className="text-neutral-300 mt-2">{content}</p>
                ))}
              </div>
            ))}
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
  );
}
