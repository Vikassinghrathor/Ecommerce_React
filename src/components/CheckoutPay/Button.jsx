import React from "react";
import PropTypes from "prop-types";

const shapes = {
  square: "rounded-none",
  circle: "rounded-[50%]",
  round: "rounded-[13px]",
};
const variants = {
  fill: {
    green_600: "bg-green-600",
    white_A700: "bg-white-A700",
    green_50: "bg-green-50",
    gray_50_bf: "bg-gray-50_bf",
    black_900: "bg-black-900 text-gray-50",
  },
};
const sizes = { xs: "p-1", sm: "p-2.5", md: "p-[15px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["square", "circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "green_600",
    "white_A700",
    "green_50",
    "gray_50_bf",
    "black_900",
  ]),
};

export { Button };
