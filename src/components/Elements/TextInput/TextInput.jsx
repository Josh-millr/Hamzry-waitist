import React from "react";

export const TextInput = (props) => {
  const { type, placeholder, value, onChange, variant, disabled } = props;

  return (
    <input
      type={type}
      value={value}
      disabled={disabled}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className={`h-12 w-full rounded-2xl px-6 text-sm text-gray-900
       placeholder-gray-400 focus:outline-none focus:ring-0
       ${variant === "inverse" || disabled ? "bg-gray-200" : "bg-white"}`}
    />
  );
};

TextInput.defaultProps = {
  type: "text",
  disabled: false,
  placeholder: "Enter text",
};
