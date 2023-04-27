import { Contract } from "ethers";
import nexo_abi from "./nexo_abi.json";

const NEXO_TOKEN = "0xB62132e35a6c13ee1EE0f84dC5d40bad8d815206";

const getNetwork = async ({ provider }) => {
  return await provider.getNetwork();
};

const getAccount = async ({ provider }) => {
  return await provider.send("eth_requestAccounts", []);
};

const getEthBalance = async ({ provider, account }) => {
  return await provider.getBalance(account);
};

const getNexoBalance = async ({ provider, account }) => {
  const contract = new Contract(NEXO_TOKEN, nexo_abi, provider);

  /*
  // Get the ERC-20 contract token name
  const contractName = await contract.name();
  console.log("The token's contract name is " + contractName);

  // Get the ERC-20 token symbol
  const tokenSymbol = await contract.symbol();
  console.log("The token's symbol is " + tokenSymbol);

  // Get the ERC-20 token symbol
  const decimals = await contract.decimals();
  console.log("The token's decimals are " + decimals);

  // Get the ERC-20 token symbol
  const totalSupply = await contract.totalSupply();
  console.log("The token's totalSupply is " + formatEther(totalSupply));
  */

  return await contract.balanceOf(account);
};

export { getNetwork, getAccount, getEthBalance, getNexoBalance };
