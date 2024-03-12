import React, { useState } from "react";
import FaqItem from "./FaqItem";
import { Img, Line, Text } from "../CheckoutPay/export";
import PaymentButton from "../InputForm/Payment/PaymentButton";
import styles from "./QuerySection.module.css";

const DesktopFaqsection = (props) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(
    Array(4).fill(false)
  );
  const customButtonStyle = {
    backgroundColor: "#000000",
    color: "#ffffff",
    marginTop: "80px",
    width: "129px",
    height: "50px",
    justifyContent: "center",
    borderRadius: "12px",
  };

  const handleToggleDescription = (index) => {
    setIsDescriptionVisible((prev) =>
      prev.map((value, i) => (i === index ? !value : false))
    );
  };

  return (
    <>
      <div className={`${styles.bgGray50001} ${props.className}`}>
        <div className={`${styles.padding120}`}>
          <div
            className={`${styles.flexRow} ${styles.mdFlexCol} ${styles.gap6} ${styles.itemsStart} ${styles.justifyStart} ${styles.wAuto} ${styles.mdFullWidth}`}
          >
            <div
              className={`${styles.flexCol} ${styles.gap8} ${styles.itemsStart} ${styles.justifyStart} ${styles.w486} ${styles.smFullWidth}`}
            >
              <div
                className={`${styles.flexCol} ${styles.itemsStart} ${styles.justifyStart} ${styles.wFull}`}
              >
                <div
                  className={`${styles.flexCol} ${styles.itemsStart} ${styles.justifyStart} ${styles.pb4} ${styles.wFull}`}
                >
                  <Text
                    className={`${styles.text2xl} ${styles.mdText22} ${styles.textGray90001} ${styles.smTextXl} ${styles.tracking014px} ${styles.wAuto}`}
                    size="txtOpenSansSemiBold24"
                  >
                    {props?.headingtext}
                  </Text>
                </div>
                <div
                  className={`${styles.flexCol} ${styles.itemsStart} ${styles.justifyStart} ${styles.pb4} ${styles.w446} ${styles.smFullWidth}`}
                >
                  <Text
                    className={`${styles.textBase} ${styles.textGray70001} ${styles.wAuto}`}
                    size="txtOpenSans16"
                  >
                    {props?.paragraphtext}
                  </Text>
                </div>
              </div>
              <div
                className={`${styles.bgGray50001} ${styles.flexRow} ${styles.gap5} ${styles.itemsStart} ${styles.justifyBetween} ${styles.p6} ${styles.smPx5} ${styles.rounded16} ${styles.w446} ${styles.smFullWidth}`}
              >
                <div
                  className={`${styles.flexCol} ${styles.gap5} ${styles.itemsStart} ${styles.justifyStart} ${styles.wFull}`}
                >
                  <Text
                    className={`${styles.leading26} ${styles.maxW240} ${styles.mdMaxWFull} ${styles.textGray90001} ${styles.textLg}`}
                    size="txtOpenSansSemiBold18"
                  >
                    {props?.stillneedhelp}
                  </Text>
                  <PaymentButton
                    title="Chat with us"
                    buttonStyle={customButtonStyle}
                  />
                </div>
                <Img
                  className={styles.imgchat}
                  src="images/img_aboutillustrations.svg"
                  alt="aboutillustrati"
                />
              </div>
            </div>
            <div
              className={`${styles.flexCol} ${styles.gap6} ${styles.itemsStart} ${styles.justifyStart} ${styles.maxW690} ${styles.wFull}`}
            >
              {[
                {
                  title: props.herearesomeof,
                  description: props.descriptionTwo,
                },
                {
                  title: props.herearesomeof1,
                  description: null, // Add your own description for this item
                },
                {
                  title: props.herearesomeof2,
                  description: null, // Add your own description for this item
                },
                {
                  title: props.herearesomeof3,
                  description: null, // Add your own description for this item
                },
              ].map((item, index) => (
                <FaqItem
                  key={index}
                  title={item.title}
                  description={item.description}
                  isDescriptionVisible={isDescriptionVisible[index]}
                  onClick={() => handleToggleDescription(index)}
                />
              ))}
            </div>
          </div>
          <Line
            className={`${styles.bgGray30001} ${styles.hPx} ${styles.wFull}`}
          />
        </div>
      </div>
    </>
  );
};

DesktopFaqsection.defaultProps = {
  headingtext: "Frequently asked questions",
  paragraphtext: "Here are some of our most asked questions. ",
  stillneedhelp: (
    <>
      Still need help? <br />
      We’re here for you.
    </>
  ),
  chatbuttontext: "Chat with us",
  herearesomeof: "What should I do on my first trip to Rome?",
  herearesomeofOne: "What are some hidden gems to see in Rome?",
  descriptionTwo: (
    <>
      Rome is packed with hidden gems. If you love art, don&#39;t miss the
      Galleria Doria Pamphilj or Palazzo Barberini. The Museo Barracco is a free
      museum and well worth a quick visit. If you love the ancient stuff,
      don&#39;t miss the Domus Romana at Palazzo Valentini, the Domus Aurea, and
      the Baths of Caracalla. For even more hidden gems, take a tour of
      Trastevere, a fascinating neighborhood full of history and ambiance.
    </>
  ),
  herearesomeof1: "How much time should I spend in Rome?",
  herearesomeof2: "What food is Rome known for?",
  herearesomeof3: "What is the best way to get around Rome?",
};

export default DesktopFaqsection;
