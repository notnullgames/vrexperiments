import React from 'react'
import { render } from 'react-dom'
import { VRCanvas, DefaultXRControllers } from '@react-three/xr'
import { Stars, Text } from '@react-three/drei'

const App = () => (
  <VRCanvas>
    <DefaultXRControllers />
    <Stars
      radius={100}
      depth={50}
      count={5000}
      factor={2}
      saturation
      fade
    />
    
    <Text
      fontSize={5}
      color="white"
      anchorX="center"
      anchorY="middle"
      outlineWidth={0.1}
      outlineColor='red'
    >
      hello world!
    </Text>
    <gridHelper args={[10, 10, `white`, `green`]} />
  </VRCanvas>
)

render(<App />, document.getElementById('root'))