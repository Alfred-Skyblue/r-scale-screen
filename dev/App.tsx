import './App.css'
import image from './assets/img.png'

import RScaleScreen from '../src'

function App() {
  return (
    <>
      <RScaleScreen height={1080} width={1920}>
        <img src={image} alt="" />
      </RScaleScreen>
    </>
  )
}

export default App
