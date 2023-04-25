import React from 'react'
import ReactDOM from 'react-dom/client'
import detectEthereumProvider from '@metamask/detect-provider'
import App from './App.jsx'
import './index.css'

const provider = await detectEthereumProvider()

if (provider && provider === window.ethereum) {
  // listen for changes to the chain, reload if any
  provider.on('chainChanged', () => {
    window.location.reload()
  })

  // render dapp
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App provider={provider} />
    </React.StrictMode>,
  )
} else {
  console.log('Please install MetaMask or check whether you have the correct wallet selected.')
}
