import { useState } from 'react'
import PropTypes from 'prop-types'
import './App.css'

function App({ provider }) {
  // TODO: read up on https://metamask.github.io/api-playground/api-documentation/
  const [isLoadingAccount, setIsLoadingAccount] = useState(false);
  const [account, setAccount] = useState('');

  const getAccount = async () => {
    setIsLoadingAccount(true)
    const accounts = await provider.request({ method: 'eth_requestAccounts' })
      .catch((err) => {
        if (err.code === 4001) {
          // EIP-1193 userRejectedRequest error
          // If this happens, the user rejected the connection request.
          console.log('Please connect to MetaMask.')
        } else {
          console.error(err)
        }
      })
      .finally(() => {
        setIsLoadingAccount(false)
      })

    setAccount(accounts[0])
  }

  if (account) {
    console.log({account})
  }

  return (
    <>
      <h1>Bani dapp</h1>
      <div className="card">
        <button onClick={() => !isLoadingAccount && getAccount()}>
          Connect account
        </button>
        <p>Chain ID: {provider.chainId}</p>
        {account && (
          <p>Account connected!</p>
        )}
      </div>
    </>
  )
}

App.propTypes = {
  provider: PropTypes.object
}

export default App
