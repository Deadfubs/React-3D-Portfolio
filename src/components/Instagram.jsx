/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.8 instagram.gltf --transform
Author: AlbertVictory (https://sketchfab.com/albert_victory)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/instagram-3d-icon-62779c555da04e58ae7a4ab7e45a532f
Title: Instagram 3D-icon
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/instagram-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 1.6]}>
        <mesh geometry={nodes.Object_4.geometry} material={materials.material} position={[0, 0.102, 0.053]} rotation={[-2.884, 0, -Math.PI / 2]} scale={[0.5, 0.046, 0.5]} />
        <mesh geometry={nodes.Object_6.geometry} material={materials['Material.002']} position={[0.06, 0.104, 0.052]} rotation={[0, 0, -Math.PI / 2]} scale={[0.148, 0.0185, 0.148]} />
      </group>
    </group>
  )
}

useGLTF.preload('/instagram-transformed.glb')
