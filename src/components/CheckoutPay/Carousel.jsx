import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button, Img } from "./export";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className="h-[198px] relative rounded-[16px] w-full">
          <Img
            className="h-[198px] m-auto object-cover rounded-[16px] w-full"
            src="images/Booking_Summary_carousel.png"
            alt="rectangleSixtySix"
          />
          <div className="absolute inset-[0] justify-center m-auto rounded-[16px] w-full">
            <Img
              className="h-[198px] m-auto object-cover rounded-[16px] w-full"
              src="images/Booking_Summary_carousel.png"
              alt="rectangleSixtyFive"
            />
            <div className="absolute flex flex-row h-max inset-[0] items-center justify-between m-auto px-3 w-[352px]">
              <Button
                className="flex h-8 items-center justify-center w-8"
                shape="circle"
                color="gray_50_bf"
                size="sm"
                variant="fill"
              />
              <Button
                className="flex h-8 items-center justify-center w-8"
                shape="circle"
                color="gray_50_bf"
                size="sm"
                variant="fill"
              />
            </div>
          </div>
        </div>
        {/* Add the button with ticket image and bestseller text */}
        <div className="absolute flex flex-col items-center justify-start left-[3%] top-[6%] w-auto">
          <Button
            className="cursor-pointer flex items-center justify-center min-w-[91px] rounded"
            leftIcon={
              <Img
                className="h-3.5 mr-1 my-px"
                src="images/img_ticket.svg"
                alt="ticket"
              />
            }
            color="white_A700"
            size="xs"
            variant="fill"
          >
            <div className="!text-gray-900_01 font-opensans font-semibold text-left text-xs">
              Bestseller
            </div>
          </Button>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="h-[198px] relative rounded-[16px] w-full">
          {/* Add content for the second slide */}
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className="h-[198px] relative rounded-[16px] w-full">
          {/* Add content for the third slide */}
        </div>
      </Carousel.Item>

      {/* Add more Carousel.Item for additional slides */}
      
      {/* Add additional Carousel.Item components with their content */}
    </Carousel>
  );
}

export default ControlledCarousel;
