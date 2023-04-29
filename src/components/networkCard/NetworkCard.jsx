import PropTypes from "prop-types";
import Card from "../card/Card";
import './NetworkCard.css';

function NetworkCard({ chainId, networkName }) {
  return (
    <Card className="networkCard" header="Network Info">
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
};

export default NetworkCard;
