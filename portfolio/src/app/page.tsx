'use client'

import Hero from './components/Hero'
import About from './components/About'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { ThemeProviderWrapper } from './ThemeProviderWrapper'
import ThemeToggle from './components/ThemeToggle'

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <div className="mesh-bg" />
      <ThemeProviderWrapper>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
        <ThemeToggle />
      </ThemeProviderWrapper> 
    </main>
  )
}