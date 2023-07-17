import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Gamepad from './Gamepad'


const GameDev = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate  />
      <Stage environment="city" intensity={0.6} position={[2, 0, 0]} shadows={false}>
        <Gamepad/>
      </Stage>
    </Canvas>
  )
}

export default GameDev
