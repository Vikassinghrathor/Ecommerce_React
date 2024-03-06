import React from "react";

import { Img, Text } from "../CheckoutPay/export";

const ComingSoon2 = (props) => {
  return (
    <>
      <div className={props.className}>
      <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "792px",
            height: "82px",
            borderRadius: "16px",
            border: "1px solid #D3D4DB",
            marginLeft: '120px',
            marginTop: '50px',
            padding: '10px'
          }}
        >
        <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
          <div className="flex flex-row gap-[15px] items-end justify-start w-auto">
            <div className="flex flex-col h-6 md:h-auto items-center justify-start w-auto">
              <div className="bg-gray-300_02 flex flex-col items-center justify-end p-1 rounded-md w-full">
                <Img
                  className="h-2.5"
                  src="images/img_settings_blue_gray_400_01_10x25.svg"
                  alt="settings"
                />
              </div>
            </div>
            <Text
              className="text-base text-blue_gray-400_01 w-auto"
              size="txtOpenSansSemiBold16Bluegray40001"
            >
              {props?.googlepay}
            </Text>
          </div>
          <div className="bg-gray-300_02 border border-blue_gray-100 border-solid h-6 rounded-[50%] w-6"></div>
        </div>
        </div>
      </div>
    </>
  );
};

ComingSoon2.defaultProps = { googlepay: "Coming soon" };

export default ComingSoon2;
