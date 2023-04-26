import PropTypes from 'prop-types'
import { useNetwork, useAccount, useBalance } from './hooks'
import './App.css'

function App({ provider }) {
  const { chainId, networkName } = useNetwork({provider})

  const {
    account,
    isLoadingAccount,
    loadAccount
  } = useAccount({provider})

  const { balance } = useBalance({provider, account})

  return (
    <>
      <h1>Bani dapp</h1>
      <div className="card">
        <button onClick={() => !isLoadingAccount && loadAccount()}>
          Connect account
        </button>
        <p>Chain ID: {chainId || 'none'}</p>
        <p>Network name: {networkName}</p>
        {account && (
          <>
            <p>Account connected: {account}</p>
            <p>Balance: {balance}</p>
          </>
        )}
      </div>
    </>
  )
}

App.propTypes = {
  provider: PropTypes.object
}

export default App
