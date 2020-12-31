import React from 'react'
import { render } from 'react-dom'
import { useThree } from 'react-three-fiber'
import { VRCanvas, DefaultXRControllers } from '@react-three/xr'
import { Stars, Text, OrbitControls, Sphere } from '@react-three/drei'

const App = () => (
  <VRCanvas>
    <OrbitControls />
    <DefaultXRControllers />
    <Stars radius={100} depth={50} count={5000} factor={2} saturation fade />
    <Text
      fontSize={5}
      color="white"
      anchorX="center"
      anchorY="middle"
      outlineWidth={0.1}
      outlineColor='red'
      position={[0, 4, -5]}
    >
      hello world!
    </Text>
    {[...Array(100)].map((v, i) => (
      <Sphere position={[(2 * i) - 100, 0, 0]}>
        <meshPhongMaterial attach="material" color="blue" />
      </Sphere>
    ))}
    <gridHelper args={[100, 100, `white`, `green`]} />
  </VRCanvas>
)

render(<App />, document.getElementById('root'))