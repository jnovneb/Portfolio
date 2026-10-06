'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    id: 'bygiuvalerio',
    title: 'By Giu Valerio',
    description: `A professional, high-end e-commerce and portfolio web application built for a fashion designer. Features elegant visual layouts, responsive design, and optimized performance for brand presence.`,
    repoUrl: 'https://bygiuvalerio.com/',
    isExternal: true,
    tags: ['Next.js', 'Tailwind CSS', 'UI/UX', 'Production']
  },
  {
    id: 'aimeetingsummarizer',
    title: 'AIMeetingSummarizer',
    description: `Web application that transcribes meeting audio using Whisper/VOSK and generates concise summaries and task lists via LLMs. Features real-time tracking, MinIO storage, and PDF export.`,
    repoUrl: 'https://github.com/jnovneb/AIMeetingSummarizer',
    isExternal: false,
    tags: ['Next.js', 'Python', 'LLMs', 'MinIO']
  },
  {
    id: 'aitattoogenerator',
    title: 'AITattooGenerator',
    description: `Full-stack application allowing users to generate custom tattoo designs from text prompts, overlay them on images, and manage artwork using local Stable Diffusion and Flask.`,
    repoUrl: 'https://github.com/jnovneb/AITattooGenerator',
    isExternal: false,
    tags: ['Next.js', 'Flask', 'Stable Diffusion', 'SQLite']
  },
  {
    id: 'orchestvpn',
    title: 'OrchestVPN',
    description: `A custom-built VPN management tool developed to automate and simplify deployment, configuration, and monitoring of VPN services using container orchestration.`,
    repoUrl: 'https://github.com/jnovneb/OrchestVPN',
    isExternal: false,
    tags: ['Docker', 'Containers', 'DevOps']
  }
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-5xl mx-auto px-4">
      <div className="text-center mb-12 space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
        <p className="text-muted-foreground text-sm">Real-world applications, client work, and technical tools I&apos;ve built.</p>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((proj, i) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
          >
            <Card className="h-full flex flex-col justify-between border border-border/60 hover:border-primary/50 transition-colors shadow-md">
              <CardContent className="space-y-4 pt-6 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold">{proj.title}</h3>
                    <Link 
                      href={proj.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={proj.isExternal ? "Visit live website" : "GitHub Repository"} 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {proj.isExternal ? <ExternalLink className="w-5 h-5 text-primary" /> : <Github className="w-5 h-5" />}
                    </Link>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{proj.description}</p>
                </div>
                
                <div className="space-y-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-0.5 rounded-md bg-muted text-muted-foreground font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={proj.repoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    {proj.isExternal ? 'Visit live site' : 'View source code'} <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}