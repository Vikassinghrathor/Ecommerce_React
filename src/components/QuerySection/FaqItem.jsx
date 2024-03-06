import React from "react";
import { Img,Text } from "../CheckoutPay/export";

const FaqItem = ({ title, description, isDescriptionVisible, onClick }) => {
  return (
    <div className="bg-white-A700 border border-blue_gray-200 border-solid flex flex-1 flex-col items-start justify-start sm:px-5 px-7 py-6 rounded-[16px] w-full" onClick={onClick}>
      <div className="flex flex-col items-start justify-start w-full">
        <div className="flex sm:flex-col flex-row gap-6 items-center justify-start w-full">
          <Img
            className="h-6 w-6"
            src={
              isDescriptionVisible
                ? "images/img_close_gray_700_01.svg"
                : "images/img_plus_gray_700_01.svg"
            }
            alt={isDescriptionVisible ? "close_One" : "plus_Two"}
          />
          <Text
            className="flex-1 text-gray-900_01 text-lg w-auto"
            size="txtOpenSansSemiBold18"
          >
            {title}
          </Text>
        </div>
      </div>
      {isDescriptionVisible && (
        <div className="flex flex-col items-center justify-center pb-6 md:pl-10 pl-12 sm:pl-5 w-full">
          <Text
            className="leading-[24.00px] max-w-[586px] md:max-w-full text-base text-gray-700_01"
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