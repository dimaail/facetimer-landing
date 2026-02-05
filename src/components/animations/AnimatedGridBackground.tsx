'use client'

import { useEffect, useRef } from 'react'

export default function AnimatedGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Grid settings
    const gridSize = 60
    const dotRadius = 2.5
    const glowRadius = 3

    // Create grid intersection points
    interface GridPoint {
      x: number
      y: number
      brightness: number
      pulseSpeed: number
      pulsePhase: number
      flickerSpeed: number
      flickerPhase: number
    }

    const gridPoints: GridPoint[] = []
    
    const createGridPoints = () => {
      gridPoints.length = 0
      const cols = Math.ceil(canvas.width / gridSize) + 1
      const rows = Math.ceil(canvas.height / gridSize) + 1

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          gridPoints.push({
            x: i * gridSize,
            y: j * gridSize,
            brightness: Math.random(),
            pulseSpeed: 0.001 + Math.random() * 0.003,
            pulsePhase: Math.random() * Math.PI * 2,
            flickerSpeed: 0.0005 + Math.random() * 0.001,
            flickerPhase: Math.random() * Math.PI * 2,
          })
        }
      }
    }
    createGridPoints()
    window.addEventListener('resize', createGridPoints)

    // Mouse tracking
    let mouseX = canvas.width / 2
    let mouseY = canvas.height / 2
    let targetMouseX = mouseX
    let targetMouseY = mouseY

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX
      targetMouseY = e.clientY
    }
    canvas.addEventListener('mousemove', handleMouseMove)

    // Smooth mouse following
    const updateMouse = () => {
      mouseX += (targetMouseX - mouseX) * 0.1
      mouseY += (targetMouseY - mouseY) * 0.1
    }

    // Animation
    let time = 0
    let animationFrameId: number

    const animate = () => {
      time += 0.005
      updateMouse()

      // Clear canvas
      ctx.fillStyle = 'rgba(255, 255, 255, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid lines - subtle lavender
      ctx.strokeStyle = 'rgba(157, 123, 255, 0.052)'
      ctx.lineWidth = 1

      // Vertical lines
      for (let x = 0; x <= canvas.width; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Horizontal lines
      for (let y = 0; y <= canvas.height; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw glowing dots at intersections
      gridPoints.forEach((point) => {
        // Calculate distance from mouse
        const dx = point.x - mouseX
        const dy = point.y - mouseY
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 300

        // Mouse proximity effect
        const mouseInfluence = Math.max(0, 1 - distance / maxDistance)

        // Pulsating brightness
        point.pulsePhase += point.pulseSpeed
        const pulse = (Math.sin(point.pulsePhase + time * 2) + 1) / 2

        // Slow flickering effect
        point.flickerPhase += point.flickerSpeed
        const flicker = (Math.sin(point.flickerPhase) + 1) / 2
        const flickerEffect = 0.7 + flicker * 0.3

        // Combined brightness
        const brightness = (pulse * 0.4 + mouseInfluence * 0.3) * flickerEffect
        const alpha = (0.1 + brightness * 0.25) * 0.65

        // Glow effect
        if (brightness > 0.3 || mouseInfluence > 0.1) {
          const gradient = ctx.createRadialGradient(
            point.x,
            point.y,
            0,
            point.x,
            point.y,
            glowRadius * (0.5 + brightness * 0.5)
          )

          // Color based on mouse proximity - lavender to blue
          const hue = mouseInfluence > 0.3 ? 280 : 260
          gradient.addColorStop(0, `hsla(${hue}, 70%, 65%, ${alpha * 0.5})`)
          gradient.addColorStop(0.5, `hsla(${hue}, 70%, 65%, ${alpha * 0.15})`)
          gradient.addColorStop(1, 'hsla(260, 70%, 65%, 0)')

          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(point.x, point.y, glowRadius, 0, Math.PI * 2)
          ctx.fill()
        }

        // Draw dot
        ctx.fillStyle = `rgba(157, 123, 255, ${alpha})`
        ctx.beginPath()
        ctx.arc(
          point.x,
          point.y,
          dotRadius * (1 + brightness * 0.5),
          0,
          Math.PI * 2
        )
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Wave effect on click
    const handleClick = (e: MouseEvent) => {
      const clickX = e.clientX
      const clickY = e.clientY

      gridPoints.forEach((point) => {
        const dx = point.x - clickX
        const dy = point.y - clickY
        const distance = Math.sqrt(dx * dx + dy * dy)
        const delay = distance / 500

        setTimeout(() => {
          point.pulsePhase = 0
        }, delay * 1000)
      })
    }
    canvas.addEventListener('click', handleClick)

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('resize', createGridPoints)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('click', handleClick)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <>
      <canvas 
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
      />
      {/* Gradient overlay */}
      <div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: `radial-gradient(circle at 30% 50%, rgba(157, 123, 255, 0.12) 0%, transparent 50%),
                       radial-gradient(circle at 70% 50%, rgba(0, 208, 132, 0.08) 0%, transparent 50%)`
        }}
      />
    </>
  )
}
