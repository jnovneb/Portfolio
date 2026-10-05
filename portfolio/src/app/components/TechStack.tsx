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
  SiCss,
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
  SiSonar,
} from 'react-icons/si'
import { FiCode } from 'react-icons/fi'
import { DiJava } from 'react-icons/di'
import { HiChevronDown } from 'react-icons/hi'

const tech = {
  frontend: [
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3', icon: SiCss },
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
    { name: 'SonarQube', icon: SiSonar },
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
    <section className="py-20 max-w-6xl mx-auto px-6">
      <div className="text-center mb-12 space-y-2">
        <h2 className="text-3xl font-bold tracking-tight text-foreground">
          Tech Stack
        </h2>
        <p className="text-muted-foreground text-sm">
          Technologies and tools I use to bring ideas to life.
        </p>
      </div>

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
              className="rounded-xl bg-card text-card-foreground p-6 shadow-sm border border-border/60 hover:border-primary/40 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleSection(section)}
                className="flex justify-between items-center w-full mb-6 text-lg font-semibold text-foreground select-none cursor-pointer group"
                aria-expanded={isOpen}
                aria-controls={`${section}-content`}
              >
                <span className="group-hover:text-primary transition-colors">
                  {sectionTitles[section]}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-muted-foreground group-hover:text-foreground"
                >
                  <HiChevronDown className="w-5 h-5" aria-hidden="true" />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key={`${section}-content`}
                    id={`${section}-content`}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                    layout
                  >
                    <div className="grid grid-cols-2 gap-3 pt-1">
                      {tools.map(({ name, icon: Icon }, j) => (
                        <motion.div
                          key={name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: j * 0.03, duration: 0.2 }}
                          className="flex items-center gap-2.5 p-2.5 bg-muted/40 hover:bg-muted border border-border/40 rounded-lg text-xs font-medium text-foreground transition-all duration-200 group"
                        >
                          <Icon className="w-4 h-4 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="truncate">{name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}