'use client'
import { Mail, Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section className="max-w-4xl mx-auto mt-20 text-center space-y-4">
      <motion.h2
        className="text-2xl font-semibold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>
      <p className="text-gray-400">
        Feel free to reach out via email or connect on LinkedIn or GitHub.
      </p>
      <div className="flex justify-center gap-6 mt-4">
        <a href="mailto:javier.novella.nebot@gmail.com" aria-label="Email">
          <Mail className="w-6 h-6 text-white hover:text-blue-400" />
        </a>
        <a href="https://github.com/jnovneb" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github className="w-6 h-6 text-white hover:text-gray-400" />
        </a>
        <a href="https://www.linkedin.com/in/javier-novella-nebot-6a26741a3/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="w-6 h-6 text-white hover:text-blue-600" />
        </a>
      </div>
    </section>
  )
}
