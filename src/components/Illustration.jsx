import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Brush from './Brush'


const Illustration = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate  />
      <Stage environment="city" intensity={0.6} position={[2, 0, 0]} shadows={false}>
        <Brush/>
      </Stage>
    </Canvas>
  )
}

export default Illustration
