import React from "react";

const sizeClasses = {
  txtOpenSans14: "font-normal font-opensans",
  txtOpenSansSemiBold16Bluegray40001: "font-opensans font-semibold",
  txtOpenSansSemiBold14Red800: "font-opensans font-semibold",
  txtOpenSansSemiBold14Bluegray40002: "font-opensans font-semibold",
  txtRobotoSerifNormalRomanMedium57: "font-medium font-robotoserif",
  txtOpenSans16: "font-normal font-opensans",
  txtOpenSans14Bluegray40002: "font-normal font-opensans",
  txtOpenSansSemiBold16Gray90001: "font-opensans font-semibold",
  txtOpenSans16Bluegray400: "font-normal font-opensans",
  txtOpenSansSemiBold14Bluegray20001: "font-opensans font-semibold",
  txtOpenSansRomanSemiBold12: "font-opensans font-semibold",
  txtRobotoRegular12: "font-normal font-roboto",
  txtOpenSansSemiBold16: "font-opensans font-semibold",
  txtRobotoRegular14: "font-normal font-roboto",
  txtOpenSansSemiBold18: "font-opensans font-semibold",
  txtOpenSans16Gray90001: "font-normal font-opensans",
  txtOpenSansSemiBold14: "font-opensans font-semibold",
  txtOpenSansSemiBold24: "font-opensans font-semibold",
  txtOpenSansSemiBold14Gray70001: "font-opensans font-semibold",
  txtOpenSans12: "font-normal font-opensans",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export {Text};



