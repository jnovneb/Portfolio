'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="py-20 text-center space-y-6">
      <motion.h1
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hi, I'm Javier — Full-Stack Software Engineer
      </motion.h1>
      <p className="text-muted-foreground text-lg max-w-xl mx-auto">
        I build interactive, scalable, and accessible web applications from frontend to backend.
      </p>
      <div className="flex justify-center gap-4">
        <Button>See Projects</Button>
        <Button variant="outline">Download CV</Button>
      </div>
    </section>
  )
}
