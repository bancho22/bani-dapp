import PropTypes from "prop-types";
import { useNetwork, useAccount, useEthBalance, useNexoBalance } from "./hooks";
import "./App.css";

function App({ provider }) {
  const { chainId, networkName } = useNetwork({ provider });

  const { account, isLoadingAccount, loadAccount } = useAccount({ provider });

  const { balance: ethBalance } = useEthBalance({ provider, account });

  const { balance: nexoBalance } = useNexoBalance({ provider, account });

  return (
    <>
      <h1>Bani dapp</h1>
      <div className="card">
        {!account ? (
          <button onClick={() => !isLoadingAccount && loadAccount()}>
            Connect account
          </button>
        ) : (
          <h3>Account connected!</h3>
        )}
        <p>Chain ID: {chainId || "none"}</p>
        <p>Network name: {networkName}</p>
        {account && (
          <>
            <p>Account: {account}</p>
            <p>ETH Balance: {ethBalance}</p>
            <p>NEXO Balance: {nexoBalance}</p>
          </>
        )}
      </div>
    </>
  );
}

App.propTypes = {
  provider: PropTypes.object,
};

export default App;
