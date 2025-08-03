'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiRubyonrails,
  SiNodedotjs,
  SiPython,
  SiFlask,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiRuby,
  SiGnubash,
  SiDocker,
  SiGithubactions,
  SiNginx,
  SiKubernetes,
  SiJenkins,
  SiSonarqube,
} from 'react-icons/si'
import { FiCode } from 'react-icons/fi'
import { DiJava } from 'react-icons/di'
import { HiChevronDown } from 'react-icons/hi'

const tech = {
  frontend: [
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3', icon: SiCss3 },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'React', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Framer Motion', icon: SiFramer },
    { name: 'Ruby on Rails', icon: SiRubyonrails },
  ],
  backend: [
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Python', icon: SiPython },
    { name: 'Flask', icon: SiFlask },
    { name: 'FastAPI', icon: SiFastapi },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Java', icon: DiJava },
    { name: 'Ruby', icon: SiRuby },
    { name: 'C#', icon: FiCode },
    { name: 'Bash', icon: SiGnubash },
  ],
  devops: [
    { name: 'Docker', icon: SiDocker },
    { name: 'GitHub Actions', icon: SiGithubactions },
    { name: 'Nginx', icon: SiNginx },
    { name: 'Kubernetes', icon: SiKubernetes },
    { name: 'Jenkins', icon: SiJenkins },
    { name: 'SonarQube', icon: SiSonarqube },
  ],
}

const sectionTitles: Record<string, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  devops: 'CI/CD & DevOps',
}

export default function TechStack() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    frontend: true,
    backend: true,
    devops: true,
  })

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  return (
    <section className="py-16 max-w-6xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-white dark:text-white">
        Tech Stack
      </h2>
      <div className="grid gap-8 md:grid-cols-3 items-start">
        {Object.entries(tech).map(([section, tools], i) => {
          const isOpen = openSections[section]

          return (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              layout
              className="rounded-xl bg-card text-cardForeground p-6 shadow-md border border-border hover:bg-cardHover transition-all duration-500 overflow-hidden"
            >
              <button
                onClick={() => toggleSection(section)}
                className="flex justify-center items-center w-full mb-6 gap-2 text-xl font-semibold text-primary select-none"
                aria-expanded={isOpen}
                aria-controls={`${section}-content`}
              >
                <span>{sectionTitles[section]}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <HiChevronDown className="w-5 h-5" aria-hidden="true" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.ul
                    key={`${section}-content`}
                    id={`${section}-content`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden space-y-3"
                    layout
                  >
                    {tools.map(({ name, icon: Icon }, j) => (
                      <motion.li
                        key={name}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: j * 0.05, duration: 0.3 }}
                        className="flex items-center gap-3 px-4 py-2 bg-background/20 dark:bg-white/5 border border-border rounded-lg text-sm text-foreground hover:bg-background/40 dark:hover:bg-white/10 transition-colors duration-200"
                      >
                        <Icon className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-center w-full">{name}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}