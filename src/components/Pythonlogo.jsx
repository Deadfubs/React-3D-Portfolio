/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.8 pythonlogo.gltf --transform
Author: Acvantad (https://sketchfab.com/Acvantad)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/python-programming-language-44d992bf56e244448e9ee5b4da083287
Title: Python Programming language
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/pythonlogo-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.material} position={[-0.002, 0, 0]} rotation={[Math.PI / 2, 0, 0]} scale={1.5} />
      <mesh geometry={nodes.Object_6.geometry} material={materials['.001']} position={[-0.002, 0, 0]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={1.5} />
    </group>
  )
}

useGLTF.preload('/pythonlogo-transformed.glb')