import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Badge from "react-bootstrap/Badge";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { Text, Img } from "../../CheckoutPay/export";
import Form from "react-bootstrap/Form";
import PaymentButton from "./PaymentButton";
import classes from "./PaymentInput.module.css";
import PaymentIcons from "./PaymentIcons";


const PaymentInput = () => {
  return (
    <>
      <div className={classes.Main}>
        <div className={classes.textbox}>
          <p className={classes.heading}>Select your mode of payment</p>
          <p className={classes.text}>
            We need your card details to complete the reservation.
          </p>
        </div>
        <div className={classes.card}>
          <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
          <div className="flex flex-row gap-3 items-center justify-start w-auto">
            <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
              <div className="bg-white-A700 border border-gray-300_01 border-solid flex flex-col items-center justify-start px-[7px] rounded-[3px] w-full">
                <Img
                  className="h-5 w-5"
                  src="images/img_creditcard.svg"
                  alt="creditcard"
                />
              </div>
            </div>
            <Text
              className="text-base text-gray-900_01 w-auto"
              size="txtOpenSansSemiBold16Gray90001"
            >
            Credit & debit card
            </Text>
          </div>
          <div className="bg-gray-900_01 flex flex-col h-6 items-center justify-start p-2 rounded-[50%] w-6">
            <div className="bg-gray-50 h-2 rounded-[50%] w-2"></div>
          </div>
          </div> 
         <PaymentIcons/>
          <div className={classes.inputsbox}>
            <div className={classes.row}>
              <div className={classes.column}>
                <FloatingLabel
                  controlId="name"
                  label="Name on card *"
                  className={classes.mb3}
                >
                  <Form.Control
                    type="text"
                    placeholder="Name on card"
                    required
                    className={classes.customInput}
                  />
                </FloatingLabel>
              </div>
              <div className={classes.column}>
                <FloatingLabel controlId="card" label="Card number *">
                  <Form.Control
                    type="text"
                    minLength={16}
                    maxLength={16}
                    placeholder="Card number"
                    required
                    className={classes.customInput}
                  />
                </FloatingLabel>
              </div>
            </div>

            <div className={classes.row}>
              <div className={classes.column}>
                <FloatingLabel controlId="expiry" label="Expiry date *">
                  <Form.Control
                    type="text"
                    required
                    placeholder="Expiry date"
                    className={classes.customInput}
                  />
                </FloatingLabel>
              </div>
              <div className={classes.column}>
                <FloatingLabel controlId="cvc" label="CVV/CVC *">
                  <Form.Control
                    type="text"
                    minLength={3}
                    maxLength={4}
                    placeholder="CVV/CVC"
                    required
                    className={classes.customInput}
                  />
                </FloatingLabel>
              </div>
            </div>
            <div className={classes.totaltext}>
              <div className={classes.infoContainer}>
                <p>Total payable:</p>
                <p>$XXX</p>
              </div>
              <div className={classes.badgeContainer}>
                <Badge bg="success">You save price</Badge>
              </div>
            </div>
            <div className={classes.infoContainer}>
              <p className={classes.infotext}>You will be charged in AED</p>
              <BsFillInfoCircleFill style={{width: '13px' , height: '13px' ,top: '1.5px' , left: '1.5px' , color: '#7E808A', marginBottom: 'auto' , marginTop: '3px'}} />
            </div>
            <div className={classes.btnbox}>
              <p className={classes.btnpara}>
                By clicking “confirm & pay”, you agree to{" "}
                <span className={classes.linkText}>
                  Tickete’s general terms and conditions
                </span>{" "}
                and{" "}
                <span className={classes.linkText}>cancellation policy</span>.
              </p>
              <PaymentButton/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentInput;
