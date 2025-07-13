import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <TechStack />
      <Projects />
      <Contact />
    </main>
  )
}
