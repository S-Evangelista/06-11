import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Entrega from './Entrega.jsx'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='fundo'>
    <App/>
    <Entrega/>
  </div>
)
