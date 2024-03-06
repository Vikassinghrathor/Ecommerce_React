import React from "react";

import { Button, Img, List, Text } from "./export";
import PaymentButton from "../InputForm/Payment/PaymentButton";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";

const DesktopBookingsummary = (props) => {
  const customButtonStyle = {
    backgroundColor: "#000000",
    color: "#ffffff",
    width: "352px",
    height: "56px",
    justifyContent: "center",
  };
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-3 items-start justify-start w-full">
          <div className="flex flex-col gap-4 items-start justify-start pt-4 px-4 w-full">
            <div className="flex flex-col items-start justify-start w-auto">
            <Carousel/>
            </div>
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <div className="flex flex-col gap-0.5 items-start justify-start w-full">
                <div className="flex flex-row gap-1 items-start justify-start w-full">
                  <div className="flex flex-row gap-1 items-center justify-start w-auto">
                    <Img
                      className="h-3.5 w-3.5"
                      src="images/img_airplane.svg"
                      alt="airplane"
                    />
                    <div className="flex flex-row gap-0.5 items-start justify-start w-auto">
                      <Text
                        className="text-gray-900_01 text-right text-sm"
                        size="txtOpenSansSemiBold14"
                      >
                        {props?.fortynine}
                      </Text>
                      <Text
                        className="text-gray-700_01 text-right text-sm w-auto"
                        size="txtOpenSans14"
                      >
                        {props?.p45k}
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="text-gray-700_01 text-right text-sm w-auto"
                    size="txtOpenSans14"
                  >
                    {props?.thirteen}
                  </Text>
                  <Text
                    className="flex-1 text-gray-700_01 text-sm w-auto"
                    size="txtOpenSans14"
                  >
                    {props?.category}
                  </Text>
                </div>
                <Text
                  className="leading-[22.00px] max-w-[352px] md:max-w-full text-base text-gray-900_01"
                  size="txtOpenSansSemiBold16Gray90001"
                >
                  {props?.experiencename}
                </Text>
              </div>
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <div className="flex flex-row gap-2.5 items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-center w-5">
                    <Img
                      className="h-5 w-5"
                      src="images/img_television.svg"
                      alt="television"
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <div className="flex flex-col items-start justify-start pb-2 w-full">
                      <Text
                        className="text-gray-900_01 text-sm w-auto"
                        size="txtOpenSansSemiBold14"
                      >
                        {props?.textThirteen}
                      </Text>
                    </div>
                  </div>
                </div>
                <List
                  className="flex flex-col gap-[7px] items-center w-full"
                  orientation="vertical"
                >
                  <div className="flex flex-1 flex-row gap-2.5 items-start justify-start w-full">
                    <div className="flex flex-col items-center justify-center w-5">
                      <Img
                        className="h-5 w-5"
                        src="images/img_calendar.svg"
                        alt="calendar"
                      />
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start pb-2 w-full">
                        <Text
                          className="text-gray-900_01 text-sm w-auto"
                          size="txtOpenSansSemiBold14"
                        >
                          {props?.text}
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start pb-2 w-full">
                        <Text
                          className="text-gray-700_01 text-xs w-auto"
                          size="txtOpenSans12"
                        >
                          {props?.hinttext}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 flex-row gap-2.5 items-start justify-start w-full">
                    <div className="flex flex-col items-center justify-center w-5">
                      <Img
                        className="h-5 w-5"
                        src="images/img_clock.svg"
                        alt="clock"
                      />
                    </div>
                    <div className="flex flex-1 flex-col items-start justify-start w-full">
                      <div className="flex flex-col items-start justify-start pb-2 w-full">
                        <Text
                          className="text-gray-900_01 text-sm w-auto"
                          size="txtOpenSansSemiBold14"
                        >
                          {props?.text1}
                        </Text>
                      </div>
                      <div className="flex flex-col items-start justify-start pb-2 w-full">
                        <Text
                          className="text-gray-700_01 text-xs w-auto"
                          size="txtOpenSans12"
                        >
                          {props?.hinttext1}
                        </Text>
                      </div>
                    </div>
                  </div>
                </List>
                <div className="flex flex-row gap-2.5 items-start justify-start w-full">
                  <div className="flex flex-col items-center justify-center w-5">
                    <Img
                      className="h-5 w-5"
                      src="images/img_users.svg"
                      alt="users"
                    />
                  </div>
                  <div className="flex flex-1 flex-col items-start justify-start w-full">
                    <div className="flex flex-col items-start justify-start pb-2 w-full">
                      <Text
                        className="text-gray-900_01 text-sm w-auto"
                        size="txtOpenSansSemiBold14"
                      >
                        {props?.guestscounter}
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start pb-5 w-full">
            <Img
              className="h-px w-full"
              src="images/img_divider_gray_300_01.svg"
              alt="divider_Three"
            />
            <div className="flex flex-row items-center justify-between px-4 w-full">
              <div className="flex flex-col items-center justify-center w-auto">
                <Text
                  className="text-gray-700_01 text-sm underline w-auto"
                  size="txtOpenSansSemiBold14Gray70001"
                >
                  {props?.textFourteen}
                </Text>
              </div>
              <Img
                className="h-4 w-4"
                src="images/img_plus_blue_gray_400.svg"
                alt="plus_One"
              />
            </div>
          </div>
        </div>
        <div className="border-gray-300_01 border-solid border-t flex flex-col gap-8 items-start justify-start pb-8 pt-4 px-4 w-full">
          <div className="flex flex-col gap-5 items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-row items-start justify-between w-full">
                <div className="flex flex-col items-start justify-start pb-2 w-auto">
                  <Text
                    className="text-gray-900_01 text-lg w-auto"
                    size="txtOpenSansSemiBold18"
                  >
                    {props?.textFifteen}
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-end pb-2 w-auto">
                  <Text
                    className="text-gray-900_01 text-lg text-right w-auto"
                    size="txtOpenSansSemiBold18"
                  >
                    {props?.priceFour}
                  </Text>
                </div>
              </div>
              <Button
                className="cursor-pointer flex items-center justify-center min-w-[135px] rounded-[11px]"
                leftIcon={
                  <Img
                    className="h-3.5 mb-[3px] mr-1"
                    src="images/img_user_green_600.svg"
                    alt="user"
                  />
                }
                shape="round"
                color="green_50"
                size="xs"
                variant="fill"
              >
                <div className="!text-green-600 font-opensans font-semibold text-left text-xs">
                  {props?.youSavedPrice}
                </div>
              </Button>
            </div>
            <div className="flex flex-row gap-2 items-center justify-center w-auto">
              <Text
                className="text-gray-700_01 text-xs underline w-auto"
                size="txtOpenSansRomanSemiBold12"
              >
                {props?.priceFive}
              </Text>
              <Img
                className="h-4 w-4"
                src="images/img_inbox_blue_gray_400.svg"
                alt="inbox_Three"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 items-start justify-start w-full">
            {props?.termandconditionOne}
            <PaymentButton
              title="Confirm & Pay"
              buttonStyle={customButtonStyle}
            />
          </div>
        </div>
      </div>
    </>
  );
};

DesktopBookingsummary.defaultProps = {
  bestseller: "Bestseller",
  fortynine: "4.9",
  p45k: "(4.5k)",
  thirteen: "•",
  category: <>&lt;category&gt;</>,
  experiencename:
    "Amsterdam open boat canal cruise - Live Guiye - from Anne Frank Housef",
  textThirteen: <>&lt;ticket type - variant&gt;</>,
  text: <>&lt;day&gt;, &lt;month&gt; &lt;date&gt;</>,
  hinttext: <>Duration: &lt;duration&gt;</>,
  text1: <>&lt;time&gt;</>,
  hinttext1: <>Operating hours: &lt;time&gt; to &lt;time&gt;</>,
  guestscounter: "5 guests",
  textFourteen: "View payment summary",
  textFifteen: "Total payable",
  priceFour: "$XXX",
  youSavedPrice: <>You saved &lt;price&gt;</>,
  priceFive: "You will be charged in AED",
  termandconditionOne: (
    <Text
      className="leading-[20.00px] max-w-[352px] md:max-w-full text-gray-700_01 text-xs"
      size="txtOpenSans12"
    >
      <span className="text-gray-700_01 font-opensans text-left font-normal">
        By clicking “confirm & pay”, you agree to{" "}
      </span>
      <Link
        to="/terms-and-conditions"
        className="text-indigo-500 font-opensans text-left font-normal underline"
      >
        Tickete’s general terms and conditions
      </Link>
      <span className="text-gray-700_01 font-opensans text-left font-normal">
        {" "}
        and{" "}
      </span>
      <Link
        to="/cancellation-policy"
        className="text-indigo-500 font-opensans text-left font-normal underline"
      >
        cancellation policy
      </Link>
      <span className="text-gray-700_01 font-opensans text-left font-normal">
        .
      </span>
    </Text>
  ),
  confirmPayTwo: "Confirm & pay",
};

export default DesktopBookingsummary;
