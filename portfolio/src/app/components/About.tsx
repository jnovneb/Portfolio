'use client'
import { motion } from 'framer-motion'
import { Code2, Cpu, Server, Terminal } from 'lucide-react'

export default function About() {
  return (
    <section className="py-20 max-w-5xl mx-auto px-6 border-t border-border/40">
      <div className="grid md:grid-cols-12 gap-12 items-start">
        {/* Columna de Texto Principal (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7 space-y-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Building robust architectures and intelligent web products.
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            I am a Full-Stack Software Engineer with a strong background in designing scalable backends, clean frontend experiences, and production-ready cloud environments. 
          </p>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            My core expertise centers around <strong className="text-foreground font-semibold">Python</strong> for backend APIs, data pipelines, and AI integrations (such as LLMs and local stable diffusion workflows), alongside deep proficiency in <strong className="text-foreground font-semibold">Ruby</strong> and <strong className="text-foreground font-semibold">Ruby on Rails</strong> for rapidly shipping elegant, convention-over-configuration web applications.
          </p>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            From modern TypeScript/Next.js interfaces to container orchestration with Docker and Kubernetes, I bridge the gap between heavy backend logic and seamless user interactions.
          </p>
        </motion.div>

        {/* Columna de Tarjetas de Competencias (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-5 grid grid-cols-1 gap-4"
        >
          <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/60">
            <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Python, Ruby & Rails</h3>
              <p className="text-xs text-muted-foreground mt-1">Extensive experience building maintainable business logic, REST APIs, and monolithic/modular web apps.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/60">
            <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">AI & LLM Integration</h3>
              <p className="text-xs text-muted-foreground mt-1">Connecting models (Whisper, VOSK, local SD) into full-stack applications with real-time tracking.</p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/60">
            <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">DevOps & Cloud</h3>
              <p className="text-xs text-muted-foreground mt-1">Automating deployments with Docker, Kubernetes, Nginx, and GitHub Actions CI/CD pipelines.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}