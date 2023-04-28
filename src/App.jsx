import PropTypes from "prop-types";
import { AccountCard, BalanceCard, NetworkCard } from './components/card';
import { useNetwork, useAccount, useEthBalance, useTokenData } from "./hooks";
import "./App.css";

function App({ provider }) {
  const { chainId, networkName } = useNetwork({ provider });

  const { account, isLoadingAccount, loadAccount } = useAccount({ provider });

  const { balance: ethBalance } = useEthBalance({ provider, account });

  const { tokens } = useTokenData({ provider, account });
  console.log({tokens});

  return (
    <div className="app">
      <div className="appHeader">Bani dapp</div>
      <div className="appBody">
        <div className="networkAndAccountCardsWrapper">
          <NetworkCard
            chainId={chainId}
            networkName={networkName}
          />
          <AccountCard
            account={account}
            isLoadingAccount={isLoadingAccount}
            loadAccount={loadAccount}
          />
          </div>
        <div className="balanceInfo">
          <BalanceCard
            ethBalance={ethBalance}
            nexoBalance="0"
          />
        </div>
      </div>
    </div>
  );
}

App.propTypes = {
  provider: PropTypes.object,
};

export default App;
