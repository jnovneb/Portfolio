'use client'
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'

const projects = [
  {
    id: 'orchestvpn',
    title: 'OrchestVPN',
    description: `OrchestVPN is a custom-built VPN management tool that I developed to automate and simplify deployment,
    configuration, and monitoring of VPN services using container orchestration. It features secure connectivity,
    easy user onboarding, and seamless integration with existing infrastructure.`,
    repoUrl: 'https://github.com/jnovneb/OrchestVPN'
  },
  // puedes añadir otros proyectos aquí
]

export default function Projects() {
  return (
    <section id="projects" className="py-16 max-w-5xl mx-auto px-4">
      <h2 className="text-3xl font-semibold text-center mb-8">Featured Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="space-y-3">
                <h3 className="text-xl font-bold">{proj.title}</h3>
                <p className="text-gray-400 text-sm">{proj.description}</p>
                <Link href={proj.repoUrl} target="_blank" className="text-blue-400 hover:underline">
                  View on GitHub →
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
