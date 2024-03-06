import React, { useEffect, useRef } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import classes from "./DetailsInput.module.css";
import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";

const DetailsInput = () => {
  const countryCodeInputRef = useRef();

  useEffect(() => {
    // Initialize the country code input field
    const iti = intlTelInput(countryCodeInputRef.current, {
      initialCountry: "in", // ISO country code for India
      separateDialCode: true,
      utilsScript: "intl-tel-input/build/js/utils.js", // You may need to adjust the path
      nationalMode: false, // Keep nationalMode set to false
      formatOnDisplay: false, // Avoid formatting on initial display
      onCountryChange: (e, countryData) => {
        const newCountryCode = `+${countryData.dialCode}`;
        countryCodeInputRef.current.value = newCountryCode;
      },
    });

    // Set the default country code
    const selectedCountry = iti.getSelectedCountryData();
    const defaultCountryCode = `+${selectedCountry.dialCode}`;
    countryCodeInputRef.current.value = defaultCountryCode;
  }, []);


  return (
    <>
      <div className={classes.Main}>
        <div className={classes.textbox}>
          <p className={classes.heading}>Enter your details</p>
          <p className={classes.text}>
            We'll be sending your tickets to the details below. Booking for a
            friend? Add their details.
          </p>
        </div>
        <div className={classes.inputsbox}>
          <div className={classes.row1}>
            <FloatingLabel
              controlId="floatingFullName"
              label="Full Name *"
              required
              className={classes.mb3}
            >
              <Form.Control
                type="text"
                placeholder="John Doe"
                required
                className={classes.customInput}
              />
            </FloatingLabel>
          </div>

          <div className={classes.row}>
            <div className={classes.column}>
              <div className={classes.countryCodeContainer}>
              <label>
                <input
                  type="text"
                  id="countryCodeInput"
                  placeholder="+91"
                  required
                  ref={countryCodeInputRef}
                />
                </label>
              </div>
            </div>
            <div className={classes.column}>
              <FloatingLabel
                controlId="floatingPhoneNumber"
                label="Phone Number *"
                className={classes.mb3}
              >
                <Form.Control
                  type="tel"
                  placeholder="123-456-7890"
                  required
                  className={classes.customInput}
                />
              </FloatingLabel>
            </div>
          </div>

          <div className={classes.row}>
            <div className={classes.column}>
              <FloatingLabel
                controlId="floatingEmail"
                label="Email *"
                className={classes.mb3}
              >
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  required
                  className={classes.customInput}
                />
              </FloatingLabel>
            </div>
            <div className={classes.column}>
              <FloatingLabel
                controlId="floatingConfirmEmail"
                label="Confirm Email *"
                className={classes.mb3}
              >
                <Form.Control
                  type="email"
                  placeholder="confirm@example.com"
                  required
                  className={classes.customInput}
                />
              </FloatingLabel>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsInput;
