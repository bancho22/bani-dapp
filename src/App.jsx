import PropTypes from 'prop-types'
import { useAccount } from './hooks';
import './App.css'

function App({ provider }) {
  const {
    account,
    isLoadingAccount,
    loadAccount
  } = useAccount({provider})

  return (
    <>
      <h1>Bani dapp</h1>
      <div className="card">
        <button onClick={() => !isLoadingAccount && loadAccount()}>
          Connect account
        </button>
        <p>Chain ID: {provider.chainId || 'none'}</p>
        {account && (
          <p>Account connected: {account}</p>
        )}
      </div>
    </>
  )
}

App.propTypes = {
  provider: PropTypes.object
}

export default App
