import PropTypes from "prop-types";
import { AccountCard, NetworkCard, TokensCard } from "./components";
import { useNetwork, useAccount, useEthBalance, useTokenData } from "./hooks";
import { eth } from "./data";
import "./App.css";

function App({ provider }) {
  const { chainId, networkName } = useNetwork({ provider });

  const { account, isLoadingAccount, loadAccount } = useAccount({ provider });

  const { balance: ethBalance } = useEthBalance({ provider, account });

  const { tokens: otherTokens } = useTokenData({ provider, account });

  const tokens = [
    ethBalance
      ? {
          balance: ethBalance,
          ...eth,
        }
      : {},
    ...otherTokens,
  ].filter((token) => Object.keys(token).length > 0);

  return provider ? (
    <div className="app">
      <div className="appHeader">Bani dapp</div>
      <div className="appBody">
        <div className="networkAndAccountCardsWrapper">
          <NetworkCard
            chainId={chainId}
            networkName={networkName}
            isMainnet={chainId === "1"}
          />
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
  ) : (
    <h1 className="noApp">
      Please install MetaMask or check whether you have the correct wallet
      selected.
    </h1>
  );
}

App.propTypes = {
  provider: PropTypes.object,
};

export default App;
