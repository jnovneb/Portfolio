'use client'
import { useCallback } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

export default function MyParticlesBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 }, // behind everything
        background: { color: { value: 'transparent' } }, // transparent background
        particles: {
          color: { value: '#ffffff' },
          links: { enable: true, color: '#ffffff', distance: 150 },
          move: { enable: true, speed: 2 },
          number: { value: 50 },
          size: { value: 3 }
        }
      }}
    />
  )
}
