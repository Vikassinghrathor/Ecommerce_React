import React, { useState } from "react";
import FaqItem from "./FaqItem";

import {Img, Line, Text } from "../CheckoutPay/export";
import PaymentButton from "../InputForm/Payment/PaymentButton";

const DesktopFaqsection = (props) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(Array(4).fill(false));
  const customButtonStyle = {
    backgroundColor: '#000000',
    color: '#ffffff',
    marginTop: '20px',
    width: '129px',
    height: '50px',
    justifyContent: 'center',
    borderRadius: '12px'
  };

  const handleToggleDescription = (index) => {
    setIsDescriptionVisible((prev) =>
      prev.map((value, i) => (i === index ? !value : false))
    );
  };

  return (
    <>
      <div className={props.className}>
      <div style={{padding: '120px'}}> 
        <div className="flex md:flex-col flex-row gap-6 items-start justify-start w-auto md:w-full">
          <div className="flex flex-col gap-8 items-start justify-start w-[486px] sm:w-full">
            <div className="flex flex-col items-start justify-start w-full">
              <div className="flex flex-col items-start justify-start pb-4 w-full">
                <Text
                  className="text-2xl md:text-[22px] text-gray-900_01 sm:text-xl tracking-[0.14px] w-auto"
                  size="txtOpenSansSemiBold24"
                >
                  {props?.headingtext}
                </Text>
              </div>
              <div className="flex flex-col items-start justify-start pb-4 w-[446px] sm:w-full">
                <Text
                  className="text-base text-gray-700_01 w-auto"
                  size="txtOpenSans16"
                >
                  {props?.paragraphtext}
                </Text>
              </div>
            </div>
            <div className="bg-gray-50_01 flex sm:flex-col flex-row gap-5 items-start justify-between p-6 sm:px-5 rounded-[16px] w-[446px] sm:w-full">
              <div className="flex flex-col gap-5 items-start justify-start w-full">
                <Text
                  className="leading-[26.00px] max-w-[240px] md:max-w-full text-gray-900_01 text-lg"
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
                className="h-[100px] w-[157px]"
                src="images/img_aboutillustrations.svg"
                alt="aboutillustrati"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 items-start justify-start max-w-[690px] w-full">
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
        <Line className="bg-gray-300_01 h-px w-full" />
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
