import { Contract, formatEther } from "ethers";
import { abi } from "./data";

const getNetwork = async ({ provider }) => {
  return await provider.getNetwork();
};

const getAccount = async ({ provider }) => {
  return await provider.send("eth_requestAccounts", []);
};

const getEthBalance = async ({ provider, account }) => {
  const balance = await provider.getBalance(account);
  return formatEther(balance);
};

const getTokenData = async ({ provider, account, token }) => {
  const contract = new Contract(token, abi, provider);

  try {
    const name = await contract.name();
    const symbol = await contract.symbol();
    const decimals = await contract.decimals();
    const totalSupply = await contract.totalSupply();
    const balance = await contract.balanceOf(account);

    return {
      name,
      symbol,
      decimals: decimals.toString(),
      totalSupply: totalSupply.toLocaleString(),
      balance: formatEther(balance),
    };
  } catch (error) {
    console.error(error);
    return {};
  }
};

export { getNetwork, getAccount, getEthBalance, getTokenData };
