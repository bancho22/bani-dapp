import PropTypes from "prop-types";
import WarningTooltip from "../tooltip/WarningTooltip";
import "./Card.css";

function Card({ className, header, children, warning }) {
  return (
    <div className={`card ${className}`}>
      <div className="cardHeader">
        <span>{header}</span>
        {warning && <WarningTooltip content={warning} />}
      </div>
      <div className="cardBody">{children}</div>
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string,
  children: PropTypes.node,
  warning: PropTypes.string,
};

export default Card;
