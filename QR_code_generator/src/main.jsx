import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UserDetails from './formSamples/UserDetails'
import RegFrn from './formSamples/RegFrn'
// import Cart from './formSamples/cart'
// import './index.css'
// import App from './App.jsx'
// import './QrCode.css'
// import QrCode from './QrCode.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <QrCode/> */}
    {/* <Cart /> */}
    {/* <UserDetails /> */}
    <RegFrn />

  </StrictMode>,
)
