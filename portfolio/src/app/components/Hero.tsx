'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Link as ScrollLink } from 'react-scroll'
import { ArrowDown, FileText, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="py-28 md:py-36 max-w-5xl mx-auto px-6 space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 border border-primary/20 text-primary"
      >
        <Sparkles className="w-3.5 h-3.5" />
        Full-Stack Engineer & AI Integrator
      </motion.div>

      <motion.h1
        className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.1]"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Javier</span>. <br />
        I build smart things for the web.
      </motion.h1>

      <motion.p 
        className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed font-normal"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Specialized in developing robust full-stack applications, integrating state-of-the-art LLMs, and setting up automated cloud infrastructure.
      </motion.p>

      <motion.div 
        className="flex flex-wrap items-center gap-4 pt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <Button className="h-11 px-6 text-sm font-medium gap-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white">
            Explore Projects <ArrowDown className="w-4 h-4" />
          </Button>
        </ScrollLink>
        
        <a href='JavierNovellaNebotCV2025.pdf' download className='inline-block'>
          <Button variant="outline" className="h-11 px-6 text-sm font-medium gap-2 rounded-lg border-border hover:bg-muted text-foreground">
            <FileText className="w-4 h-4" /> Download CV
          </Button>
        </a>
      </motion.div>
    </section>
  )
}