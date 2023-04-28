import PropTypes from "prop-types";
import "./Card.css";

function Card({ className, header, children }) {
  return (
    <div className={`card ${className}`}>
      <span className="cardHeader">{header}</span>
      <div className="cardBody">
        {children}
      </div>
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string,
  children: PropTypes.node,
};

export default Card;
