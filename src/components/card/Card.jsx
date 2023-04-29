import PropTypes from "prop-types";
import "./Card.css";

function Card({ className, header, children, warning }) {
  return (
    <div className={`card ${className}`}>
      <div className="cardHeader">
        <span>{header}</span>
        {warning && <div className="warning">!</div>}
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
