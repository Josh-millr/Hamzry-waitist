export function Button({ type, children, disabled, variant }) {
  const baseStyle = `rounded-2xl px-6 py-3.5 text-sm font-medium
  w-full md:w-fit whitespace-nowrap`;

  const primaryStyle = `${
    variant === "inverse"
      ? "bg-white text-green-700 hover:bg-green-600 focus:ring-green-200"
      : "bg-[#108239] text-white hover:bg-green-900 focus:ring-green-300"
  } focus:outline-none focus:ring-4 `;

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${baseStyle} ${primaryStyle}`}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  onClick: () => {},
  type: "button",
  variant: "primary",
};
