'use client'

import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { ThemeProviderWrapper } from './ThemeProviderWrapper'
import ThemeToggle from './components/ThemeToggle'


export default function Home() {
  return (
    <main className="min-h-screen">
      <ThemeProviderWrapper>
        <Hero />
        <TechStack />
        <Projects />
        <Contact />
        <ThemeToggle />
      </ThemeProviderWrapper> 
    </main>
  )
}
