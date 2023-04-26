const getAccount = async ({provider}) => {
  return await provider.request({ method: 'eth_requestAccounts' })
}

const getBalance = async ({provider, account}) => {
  return await provider.request({ method: 'eth_getBalance', params: [account] })
}

export { getAccount, getBalance }
