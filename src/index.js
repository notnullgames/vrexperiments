import React, { Suspense } from 'react'
import { render } from 'react-dom'
import { useThree } from 'react-three-fiber'
import { VRCanvas, DefaultXRControllers } from '@react-three/xr'
import { Stars, Text, OrbitControls, Sphere, useMatcapTexture, Html } from '@react-three/drei'

const SphereMatcap = ({ matcap, matcapSize, children, ...props }) => {
  const [ texture ] = useMatcapTexture(matcap, matcapSize)
  return (
    <Sphere {...props}>
      <meshMatcapMaterial matcap={texture} />
      {children}
    </Sphere>
  )
}

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
    <gridHelper args={[100, 100, `white`, `green`]} />
    <Suspense fallback={null}>
    {[...Array(50)].map((v, i) => (
      <SphereMatcap key={i} matcap={Math.floor(Math.random() * 640)} matcapSize={64} position={[(2 * i) - 50, 0, 0]} castShadow />
    ))}
    </Suspense>
  </VRCanvas>
)


render(<App />, document.getElementById('root'))