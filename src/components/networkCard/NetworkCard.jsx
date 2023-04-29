import PropTypes from "prop-types";
import Card from "../card/Card";
import "./NetworkCard.css";

function NetworkCard({ chainId, networkName, isMainnet }) {
  return (
    <Card
      className="networkCard"
      header="Network Info"
      warning={chainId && !isMainnet ? "Not on mainnet. Consider switching network!" : ""}
    >
      <div className="labels">
        <span>Chain ID</span>
        <span>Name</span>
      </div>
      <div className="values">
        <span>{chainId}</span>
        <span>{networkName}</span>
      </div>
    </Card>
  );
}

NetworkCard.propTypes = {
  chainId: PropTypes.string,
  networkName: PropTypes.string,
  isMainnet: PropTypes.bool,
};

export default NetworkCard;
