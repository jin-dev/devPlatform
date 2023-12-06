import React, { Fragment, useRef, useState } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Canvas, useFrame } from '@react-three/fiber'
import Bird from 'models/Bird'

interface BoxProps {
  position: [number, number, number]
}

function Box(props: BoxProps) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null)

  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.x += delta))
  // Return the view, these are regular Threejs elements expressed in JSX

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta
    }
  })

  const { position } = props

  return (
    <mesh
      position={position}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}
const NotFound404: React.FC = () => {
  return (
    <>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <Bird />
      </Canvas>
      <div>NOT found Page (404)</div>
    </>
  )
}

export default NotFound404
