const getAccount = async ({provider}) => {
  return await provider.send('eth_requestAccounts', [])
}

const getBalance = async ({provider, account}) => {
  return await provider.getBalance(account);
}

export { getAccount, getBalance }
