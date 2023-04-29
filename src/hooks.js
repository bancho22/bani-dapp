import { useState, useEffect } from "react";
import { getNetwork, getAccount, getEthBalance, getTokenData } from "./api";
import { tokens as tokenAddresses } from "./data";

const useNetwork = ({ provider }) => {
  const [chainId, setChainId] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    getNetwork({ provider })
      .then(({ chainId, name }) => {
        setChainId(chainId.toString());
        setName(name);
      })
      .catch(console.error);
  }, [provider]);

  return { chainId, networkName: name };
};

const useAccount = ({ provider }) => {
  const [isLoadingAccount, setAccountLoading] = useState(false);
  const [account, setAccount] = useState("");

  useEffect(() => {
    if (isLoadingAccount) {
      getAccount({ provider })
        .then((accounts) => setAccount(accounts[0]))
        .catch((err) => {
          if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error
            // If this happens, the user rejected the connection request.
            console.log("Please connect to MetaMask.");
          } else {
            console.error(err);
          }
        })
        .finally(() => setAccountLoading(false));
    }
  }, [isLoadingAccount, provider]);

  return {
    account,
    isLoadingAccount,
    loadAccount: () => setAccountLoading(true),
  };
};

const useEthBalance = ({ provider, account }) => {
  const [balance, setBalance] = useState("");

  useEffect(() => {
    if (account) {
      getEthBalance({ provider, account })
        .then((balance) => setBalance(balance))
        .catch(console.error);
    }
  }, [account, provider]);

  return { balance };
};

const useTokenData = ({ provider, account }) => {
  const [tokens, setTokens] = useState([]);

  useEffect(() => {
    if (account) {
      Promise.all(
        tokenAddresses.map((token) =>
          getTokenData({ provider, account, token })
        )
      )
        .then((tokens) => setTokens(tokens))
        .catch(console.error);
    }
  }, [account, provider]);

  return { tokens };
};

export { useNetwork, useAccount, useEthBalance, useTokenData };
