'use client'
import { motion } from 'framer-motion'

const tech = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'ShadCN UI', 'Framer Motion'],
  backend: ['Node.js', 'Express', 'Python', 'Flask', 'FastAPI', 'PostgreSQL', 'MongoDB'],
  devops: ['Docker', 'GitHub Actions', 'Nginx', 'PM2', 'Vercel', 'DigitalOcean']
}

export default function TechStack() {
  return (
    <section className="py-16 max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-semibold text-center mb-10">Tech Stack</h2>
      <div className="grid gap-10 md:grid-cols-3">
        {Object.entries(tech).map(([section, tools], i) => (
          <motion.div
            key={section}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-muted/30 rounded-2xl p-6 shadow-md"
          >
            <h3 className="text-xl font-bold mb-4 capitalize">
              {section === 'devops' ? 'CI/CD & DevOps' : section}
            </h3>
            <ul className="space-y-2">
              {tools.map((techName) => (
                <li
                  key={techName}
                  className="px-4 py-2 bg-background/50 border border-border rounded-lg text-sm shadow-sm"
                >
                  {techName}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
