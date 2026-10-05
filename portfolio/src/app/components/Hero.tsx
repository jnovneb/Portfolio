'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Link as ScrollLink } from 'react-scroll'
import { ArrowDown, FileText } from 'lucide-react'

export default function Hero() {
  return (
    <section className="py-24 md:py-32 text-center space-y-6 max-w-4xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-muted/80 border border-border text-muted-foreground mb-2"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        Available for new opportunities
      </motion.div>

      <motion.h1
        className="text-4xl md:text-6xl font-bold tracking-tight"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        Hi, I&apos;m <span className="text-primary underline decoration-primary/30 underline-offset-8">Javier</span> — Full-Stack Engineer
      </motion.h1>

      <motion.p 
        className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        I love building smart, useful, and creative things on the web. Experienced in integrating LLMs into full web applications, designing scalable backend architectures, and crafting intuitive frontend experiences.
      </motion.p>

      <motion.div 
        className="flex flex-wrap justify-center gap-4 pt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <ScrollLink
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          <Button className="gap-2">
            See Projects <ArrowDown className="w-4 h-4" />
          </Button>
        </ScrollLink>
        
        <a href='JavierNovellaNebotCV2025.pdf' download className='inline-block'>
          <Button variant="outline" className="gap-2">
            <FileText className="w-4 h-4" /> Download CV
          </Button>
        </a>
      </motion.div>
    </section>
  )
}