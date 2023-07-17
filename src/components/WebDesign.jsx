import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Reactlogo from './Reactlogo'



const WebDesign = () => {
  return (
      <Canvas camera={{ position: [0, 0, 10] }}>
        <OrbitControls enableZoom={false} autoRotate />
        <Stage environment="city" intensity={0.6} position={[2, 0, 0]} shadows={false}>
          <Reactlogo /> 
        </Stage>
      </Canvas>
  );
};

export default WebDesign;