import PropTypes from "prop-types";
import NetworkCard from './components/NetworkCard';
import AccountCard from './components/AccountCard';
import BalanceCard from './components/BalanceCard';
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
            nexoBalance={nexoBalance}
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
