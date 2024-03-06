import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import classes from "./AdditionalDetails.module.css";

const DetailsInput = () => {
  return (
    <>
      <div className={classes.Main}>
        <div className={classes.textbox}>
          <p className={classes.heading}>Additional information</p>
          <p className={classes.text}>
            We need a few more details to complete your reservation.
          </p>
        </div>
        <div className={classes.inputsbox}>
          {/* Input fields in the same row */}
          <div className={classes.row}>
            <div className={classes.column}>
              <FloatingLabel label="Input label *" className={classes.mb3}>
                <Form.Control
                  type="text"
                  required
                  className={classes.customInput}
                />
              </FloatingLabel>
            </div>
            <div className={classes.column}>
              <FloatingLabel label="Select *">
                <Form.Select className={classes.customInput} required>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </FloatingLabel>
            </div>
          </div>
          <div className={classes.column}>
            <FloatingLabel label="Multiselect *">
              <Form.Select className={classes.customInput} required>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </FloatingLabel>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailsInput;
