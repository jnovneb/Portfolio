'use client'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'DevLink – Social Platform',
    description: 'Built with Next.js, Tailwind, PostgreSQL. Real-time chat and animations with Framer Motion.',
  },
  {
    title: 'AI Chatbot',
    description: 'Flask, LangChain, Vosk. Supports voice input and PDF/image data analysis offline.',
  },
  {
    title: 'Portfolio Generator',
    description: 'CLI tool built with Node.js that generates customizable developer portfolios with live preview.',
  },
]

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto mt-16">
      <h2 className="text-2xl font-semibold text-center mb-6">Featured Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="space-y-2">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
