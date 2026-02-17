'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const droneList = [
  { id: 1, src: '/drones/drone-1-sleek.png', alt: 'Drone 1' },
  { id: 2, src: '/drones/drone-2-compact.png', alt: 'Drone 2' },
  { id: 3, src: '/drones/drone-3-advanced.png', alt: 'Drone 3' },
  { id: 4, src: '/drones/drone-4-heavy-lift.png', alt: 'Drone 4' },
  { id: 5, src: '/drones/drone-5-tactical.png', alt: 'Drone 5' },
]

export default function DroneCarousel() {
  const [currentDrone, setCurrentDrone] = useState(0)
  const [animationKey, setAnimationKey] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDrone((prev) => (prev + 1) % droneList.length)
      setAnimationKey((prev) => prev + 1)
    }, 6000) // Change drone every 6 seconds (4s display + 2s transition)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-80 h-80 md:w-96 md:h-96 flex items-center justify-center">
      {/* Drone container */}
      <div className="relative w-full h-full">
        {droneList.map((drone, index) => (
          <div
            key={`${drone.id}-${animationKey}`}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
              index === currentDrone
                ? 'opacity-100 scale-100'
                : 'opacity-0 scale-95'
            }`}
            style={{
              pointerEvents: index === currentDrone ? 'auto' : 'none',
            }}
          >
            <div
              className="relative w-full h-full"
              style={{
                animation:
                  index === currentDrone
                    ? 'droneFloat 6s ease-in-out forwards'
                    : 'none',
              }}
            >
              <Image
                src={drone.src}
                alt={drone.alt}
                fill
                className="object-contain drop-shadow-2xl"
                priority={index === 0}
                unoptimized
                style={{
                  filter: 'drop-shadow(0 20px 40px rgba(255, 165, 0, 0.3))',
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-4 flex gap-2">
        {droneList.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentDrone ? 'bg-accent w-6' : 'bg-accent/40'
            }`}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes droneFloat {
          0% {
            opacity: 0;
            transform: scale(0.7) translateY(30px) rotateZ(15deg);
          }
          8% {
            opacity: 1;
            transform: scale(1) translateY(0) rotateZ(0deg);
          }
          92% {
            opacity: 1;
            transform: scale(1) translateY(-30px) rotateZ(0deg);
          }
          100% {
            opacity: 0;
            transform: scale(0.7) translateY(-60px) rotateZ(-15deg);
          }
        }
      `}</style>
    </div>
  )
}
