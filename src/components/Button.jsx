import React from "react";

const Button = ({ styles }) => {
  return (
    <button type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-xl cursor-pointer transition duration-300 hover:opacity-80 hover:shadow-inner`}>
      Get Started
    </button>
  );
};

export default Button;
