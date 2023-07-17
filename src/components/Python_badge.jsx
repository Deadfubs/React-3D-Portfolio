/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.8 python_badge.gltf --transform
Author: AnshiNoWara (https://sketchfab.com/AnshiNoWara)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/python-8be4a2579dd84586b915068e475073ee
Title: Python
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/python_badge-transformed.glb')
  return (
    <group {...props} dispose={null}>
        <mesh geometry={nodes.Python_Python_0.geometry} material={materials.Python} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/python_badge-transformed.glb')
