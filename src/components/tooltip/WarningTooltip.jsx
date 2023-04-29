import { useState } from "react";
import PropTypes from "prop-types";
import "./WarningTooltip.css";

const WARNING_SIGN = "!";

function WarningTooltip({ content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="tooltipRoot">
      <div
        className="tooltipToggle"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {WARNING_SIGN}
      </div>
      <div className={`tooltipContent ${isOpen ? "opened" : ""}`}>
        {content}
      </div>
    </div>
  );
}

WarningTooltip.propTypes = {
  content: PropTypes.string,
};

export default WarningTooltip;
