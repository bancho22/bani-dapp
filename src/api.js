const getAccount = async ({provider}) => {
  return await provider.request({ method: 'eth_requestAccounts' })
}

export { getAccount }
