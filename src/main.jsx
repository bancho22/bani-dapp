import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserProvider } from 'ethers'
import App from './App.jsx'
import './index.css'

const provider = new BrowserProvider(window.ethereum)

if (provider) {
  // render dapp
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App provider={provider} />
    </React.StrictMode>,
  )
} else {
  console.log('Please install MetaMask or check whether you have the correct wallet selected.')
}
