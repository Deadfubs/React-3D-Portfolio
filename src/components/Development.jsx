import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Pythonlogo from './Pythonlogo'



const Development = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate  />
      <Stage environment="city" intensity={0.6} position={[2, 0, 0]} shadows={false}>
        <Pythonlogo/>
      </Stage>
    </Canvas>
  )
}

export default Development
