"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import type * as THREE from "three"

function FloatingElements() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {/* Simple floating geometric shapes */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2
        const radius = 4 + Math.sin(i) * 2
        const x = Math.cos(angle) * radius
        const z = Math.sin(angle) * radius
        const y = Math.sin(i * 2) * 2

        return (
          <mesh key={i} position={[x, y, z]}>
            <boxGeometry args={[0.2, 0.2, 0.2]} />
            <meshBasicMaterial color={i % 2 === 0 ? 0x3b82f6 : 0x8b5cf6} transparent opacity={0.6} />
          </mesh>
        )
      })}
    </group>
  )
}

export default function HeroAnimation() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 2]}>
        <color attach="background" args={["#050b2c"]} />
        <ambientLight intensity={0.3} />
        <Stars radius={100} depth={50} count={3000} factor={2} saturation={0} fade speed={0.5} />
        <FloatingElements />
      </Canvas>
    </div>
  )
}
