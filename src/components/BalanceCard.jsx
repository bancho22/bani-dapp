import PropTypes from "prop-types";
import Card from "./Card";

function BalanceCard({ ethBalance, nexoBalance }) {
  return (
    <Card className="balanceCard" header="Balance">
      <div className="labels">
        <span>ETH</span>
        <span>NEXO</span>
      </div>
      <div className="values">
        <span>{ethBalance}</span>
        <span>{nexoBalance}</span>
      </div>
    </Card>
  );
}

BalanceCard.propTypes = {
  ethBalance: PropTypes.string,
  nexoBalance: PropTypes.string,
};

export default BalanceCard;
