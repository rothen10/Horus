'use client'

import Image from 'next/image'

interface FloatingDroneBgProps {
  opacity?: number
  top?: string
  left?: string
  duration?: number
}

export default function FloatingDroneBg({ 
  opacity = 0.08, 
  top = '50%', 
  left = '50%',
  duration = 12
}: FloatingDroneBgProps) {
  return (
    <div
      className="fixed pointer-events-none"
      style={{
        top,
        left,
        transform: 'translate(-50%, -50%)',
        zIndex: 5,
        opacity,
      }}
    >
      <div
        style={{
          animation: `float ${duration}s ease-in-out infinite`,
          filter: 'blur(0.5px)',
        }}
      >
        <Image
          src="/drones/drone-background.png"
          alt="Background drone"
          width={600}
          height={600}
          className="object-contain"
          loading="lazy"
          unoptimized
        />
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-50px) translateX(-30px);
          }
          50% {
            transform: translateY(-80px) translateX(20px);
          }
          75% {
            transform: translateY(-40px) translateX(-50px);
          }
        }
      `}</style>
    </div>
  )
}
