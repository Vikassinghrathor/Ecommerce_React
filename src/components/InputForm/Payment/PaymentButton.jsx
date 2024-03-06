import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import "bootstrap/dist/css/bootstrap.min.css";
import { BsLock } from "react-icons/bs";

const PaymentButton = ({ title, buttonStyle }) => {
  // Create a deep copy of the default style and apply custom styles
  const mergedStyle = {
    width: "fit-content",
    height: "fit-content",
    padding: "16px 20px",
    borderRadius: "16px",
    gap: "12px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#000000",
    color: "#ffffff",
    marginTop: '32px',
    ...buttonStyle,
  };

  return (
    <>
      <Button
        style={mergedStyle}
        variant="dark"
      >
        {title === 'Confirm & Pay' && <BsLock style={{ color: "#ffffff" }} />}
        {" "}
        {title}
      </Button>
    </>
  );
};

PaymentButton.propTypes = {
  title: PropTypes.string.isRequired,
  buttonStyle: PropTypes.object,
};

PaymentButton.defaultProps = {
  title: 'Confirm & Pay',
  buttonStyle: {},
};

export default PaymentButton;
