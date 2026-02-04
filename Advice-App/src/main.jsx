import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AdviceApp from './formSamples/AdviceApp'
// import './index.css'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <AdviceApp />
  </StrictMode>,
)
