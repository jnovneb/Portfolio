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
  {
    id: 'aimeetingsummarizer',
    title: 'AIMeetingSummarizer',
    description: `AI Meeting Summarizer is a web application that transcribes meeting audio using VOSK or Whisper and
    generates concise summaries and task lists with a language model (LLM). The app includes real-time progress tracking
    with React, file storage using MinIO, PDF export, and email sending.`,
    repoUrl: 'https://github.com/jnovneb/AIMeetingSummarizer'
  },
  {
    id: 'aitattoogenerator',
    title: 'AITattooGenerator',
    description: `A full-stack application that allows users to generate tattoo designs based on text prompts, overlay
    tattoos on images, and manage their generated artwork. The frontend is built with Next.js and the backend with Flask,
    using a local SQLite database. Images can be generated via a Stable Diffusion model running locally.`,
    repoUrl: 'https://github.com/jnovneb/AITattooGenerator'
  }
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

        {/* Extra card for “coming soon” */}
        <motion.div
          key="coming-soon"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ delay: projects.length * 0.1, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gray-800 text-white border-dashed border-2 border-gray-500">
            <CardContent className="text-center py-12">
              <h3 className="text-2xl font-bold mb-2">Much More</h3>
              <p className="text-gray-300 text-sm">Coming Soon 🚀</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
