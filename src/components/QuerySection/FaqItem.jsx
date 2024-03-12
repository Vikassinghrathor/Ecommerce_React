import React from "react";
import { Img, Text } from "../CheckoutPay/export";
import styles from "./FaqItem.module.css";

const FaqItem = ({ title, description, isDescriptionVisible, onClick }) => {
  return (
    <div
      className={`${styles.bgWhiteA700} ${styles.border} ${styles.borderBlueGray200} ${styles.borderSolid} ${styles.flex} ${styles.flex1} ${styles.flexCol} ${styles.itemsStart} ${styles.justifyStart} ${styles.smPx5} ${styles.px7} ${styles.py6} ${styles.rounded16} ${styles.fullWidth}`}
      onClick={onClick}
    >
      <div
        className={`${styles.flex} ${styles.flexCol} ${styles.itemsStart} ${styles.justifyStart} ${styles.fullWidth}`}
      >
        <div
          className={`${styles.flex} ${styles.flexRow} ${styles.gap6} ${styles.itemsCenter} ${styles.justifyStart} ${styles.fullWidth}`}
        >
          <Img
            className={`${styles.h6} ${styles.w6}`}
            src={
              isDescriptionVisible
                ? "images/img_close_gray_700_01.svg"
                : "images/img_plus_gray_700_01.svg"
            }
            alt={isDescriptionVisible ? "close_One" : "plus_Two"}
          />
          <Text
            className={`${styles.flex1} ${styles.textGray90001} ${styles.textLg} ${styles.wAuto}`}
            size="txtOpenSansSemiBold18"
          >
            {title}
          </Text>
        </div>
      </div>
      {isDescriptionVisible && (
        <div
          className={`${styles.flex} ${styles.flexCol} ${styles.itemsCenter} ${styles.justifyCenter} ${styles.pb6} ${styles.mdPl10} ${styles.pl12} ${styles.smPl5} ${styles.fullWidth}`}
        >
          <Text
            className={`${styles.leading24} ${styles.maxW586} ${styles.mdMaxWFull} ${styles.textBase} ${styles.textGray70001}`}
            size="txtOpenSans16"
          >
            {description}
          </Text>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
