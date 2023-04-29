import PropTypes from "prop-types";
import Card from "./Card";

function TokensCard({ tokens }) {
  return (
    <Card className="tokensCard" header="My Tokens">
      {tokens.length > 1 ? (
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Balance</td>
              <td>Symbol</td>
              <td>Decimals</td>
              <td className="totalSupplyCol">Total Supply</td>
            </tr>
          </thead>
          <tbody>
            {tokens.map(({ balance, decimals, name, symbol, totalSupply }) => (
              <tr key={symbol}>
                <td>{name}</td>
                <td>{balance}</td>
                <td>{symbol}</td>
                <td>{decimals}</td>
                <td className="totalSupplyCol">{totalSupply}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <span className="tokenTablePlaceholder">
          Your tokens will show up here once you connect your account.
        </span>
      )}
    </Card>
  );
}

TokensCard.propTypes = {
  tokens: PropTypes.arrayOf(
    PropTypes.shape({
      balance: PropTypes.string,
      decimals: PropTypes.string,
      name: PropTypes.string,
      symbol: PropTypes.string,
      totalSupply: PropTypes.string,
    })
  ),
};

export default TokensCard;
