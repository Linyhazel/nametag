import AnimatedSection from '@/components/AnimatedSection';
import ShinyText from '@/components/ShinyText';
import { ArrowDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { educations, experiences } from './const';

export default function ProfilePage() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (container.scrollTop > 50) {
        setHasScrolled(true);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={containerRef} className="w-full h-full overflow-y-auto">
      <div className="min-h-full flex flex-col items-center justify-center px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white animate-fade-in">
            Hi there! My name is{' '}
            <ShinyText
              text="Yuanhui"
              speed={2}
              delay={0}
              color="#9ae600"
              shineColor="#ffffff"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
            />
          </h1>

          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto animate-fade-in-delay">
            I'm a software developer who loves exploring new ideas and creating
            things that make life a little more fun and meaningful. When I'm not
            a software developer, you can usually find me taking photos,
            creating 3d models, hiking, swimming or simply hangout with friends.
          </p>
          <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto animate-fade-in-delay">
            I'm passionate about building creative visual products and always
            open to connecting with people who love to share ideas and
            collaborate. Let's make something awesome together!
          </p>
        </div>

        <button
          onClick={scrollToContent}
          className={`absolute bottom-25 flex flex-col items-center gap-2 text-neutral-400 hover:text-white transition-all duration-500 cursor-pointer ${
            hasScrolled
              ? 'opacity-0 pointer-events-none'
              : 'opacity-100 animate-bounce-slow'
          }`}
        >
          <span className="text-sm tracking-wider uppercase">
            Scroll to explore
          </span>
          <ArrowDown />
        </button>
      </div>

      <div ref={contentRef} className="max-w-4xl mx-auto px-8 pb-24 pt-16">
        <AnimatedSection delay={0}>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-white border-b border-neutral-700 pb-2">
              Experience
            </h2>

            <div className="space-y-8">
              {experiences.map((experience, index) => (
                <AnimatedSection key={experience.title} delay={index * 100}>
                  <div className="bg-neutral-900/50 rounded-lg p-6 border border-neutral-800 hover:border-lime-500/30 transition-colors duration-300">
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
                      {experience.contentList.map((content, i) => (
                        <li key={i}>{content}</li>
                      ))}
                    </ul>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-white border-b border-neutral-700 pb-2">
              Education
            </h2>

            <div className="space-y-6">
              {educations.map((education, index) => (
                <AnimatedSection key={education.degree} delay={index * 100}>
                  <div className="bg-neutral-900/50 rounded-lg p-6 border border-neutral-800 hover:border-lime-500/30 transition-colors duration-300">
                    <h3 className="text-xl font-medium text-white">
                      {education.degree}
                    </h3>
                    <p className="text-lime-400">{education.school}</p>
                    <p className="text-neutral-400">{education.period}</p>
                    {education.contentList.map((content, i) => (
                      <p key={i} className="text-neutral-300 mt-2">
                        {content}
                      </p>
                    ))}
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={300}>
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
              ].map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-lime-500/20 text-lime-300 rounded-full text-sm border border-lime-500/30 hover:bg-lime-500/30 transition-colors duration-300"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
}
