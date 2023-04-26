import { useState, useEffect } from 'react'
import { getAccount, getBalance } from './api'

const useAccount = ({provider}) => {
  const [isLoadingAccount, setAccountLoading] = useState(false)
  const [account, setAccount] = useState('')

  useEffect(() => {
    if (isLoadingAccount) {
      getAccount({provider})
        .then(accounts => setAccount(accounts[0]))
        .catch((err) => {
          if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error
            // If this happens, the user rejected the connection request.
            console.log('Please connect to MetaMask.')
          } else {
            console.error(err)
          }
        })
        .finally(() => setAccountLoading(false))
    }
  }, [isLoadingAccount, provider])

  return {
    account,
    isLoadingAccount,
    loadAccount: () => setAccountLoading(true)
  }
}

const useBalance = ({provider, account}) => {
  const [balance, setBalance] = useState('')

  useEffect(() => {
    if (account) {
      getBalance({provider, account})
        .then(balanceHex => setBalance(parseInt(balanceHex, 16)))
        .catch(console.error)
    }
  }, [account, provider])

  return { balance }
}

export { useAccount, useBalance }
