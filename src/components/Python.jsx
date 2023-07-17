import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Python_badge from './Python_badge'


const Python = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate  />
      <Stage environment="city" intensity={0.6} position={[2, 0, 0]} shadows={false}>
        <Python_badge/>
      </Stage>
    </Canvas>
  )
}

export default Python
