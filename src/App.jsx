import PropTypes from "prop-types";
import { useNetwork, useAccount, useEthBalance, useNexoBalance } from "./hooks";
import "./App.css";

function App({ provider }) {
  const { chainId, networkName } = useNetwork({ provider });

  const { account, isLoadingAccount, loadAccount } = useAccount({ provider });

  const { balance: ethBalance } = useEthBalance({ provider, account });

  const { balance: nexoBalance } = useNexoBalance({ provider, account });

  return (
    <div className="app">
      <div className="appHeader">Bani dapp</div>
      <div className="appBody">
        <div className="networkAndAccountCardsWrapper">
          <div className="card networkCard">
            <span className="cardHeader">Network Info</span>
            <div className="cardBody">
              <div className="labels">
                <span>Chain ID</span>
                <span>Name</span>
              </div>
              <div className="values">
                <span>{chainId}</span>
                <span>{networkName}</span>
              </div>
            </div>
          </div>
          <div className="card accountCard">
            <span className="cardHeader">Account Info</span>
              <div className="cardBody">
                <div className="labels">
                  <span>Address</span>
                </div>
                <div className="values">
                  {account ? (
                    <span>{account}</span>
                  ) : (
                    <button onClick={() => !isLoadingAccount && loadAccount()}>
                      Connect account
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        <div className="balanceInfo">
          <div className="card balanceCard">
            <span className="cardHeader">Balance</span>
            <div className="cardBody">
            <div className="labels">
                  <span>ETH</span>
                  <span>NEXO</span>
                </div>
                <div className="values">
                <span>{ethBalance}</span>
                <span>{nexoBalance}</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

App.propTypes = {
  provider: PropTypes.object,
};

export default App;
