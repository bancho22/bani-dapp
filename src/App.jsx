import PropTypes from "prop-types";
import { AccountCard, NetworkCard, TokensCard } from "./components/card";
import { useNetwork, useAccount, useEthBalance, useTokenData } from "./hooks";
import { eth } from "./data";
import "./App.css";

function App({ provider }) {
  const { chainId, networkName } = useNetwork({ provider });

  const { account, isLoadingAccount, loadAccount } = useAccount({ provider });

  const { balance: ethBalance } = useEthBalance({ provider, account });

  const { tokens: otherTokens } = useTokenData({ provider, account });

  const tokens = [
    {
      balance: ethBalance,
      ...eth,
    },
    ...otherTokens,
  ];

  return (
    <div className="app">
      <div className="appHeader">Bani dapp</div>
      <div className="appBody">
        <div className="networkAndAccountCardsWrapper">
          <NetworkCard chainId={chainId} networkName={networkName} />
          <AccountCard
            account={account}
            isLoadingAccount={isLoadingAccount}
            loadAccount={loadAccount}
          />
        </div>
        <div className="tokensCardWrapper">
          <TokensCard tokens={tokens} />
        </div>
      </div>
    </div>
  );
}

App.propTypes = {
  provider: PropTypes.object,
};

export default App;
