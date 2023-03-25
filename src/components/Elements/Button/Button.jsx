export function Button({ type, children }) {
  const baseStyle = `rounded-2xl px-6 py-3.5 text-sm font-medium text-white 
  w-full md:w-fit whitespace-nowrap`;
  const primaryStyle = `bg-[#108239] hover:bg-green-900 focus:outline-none 
  focus:ring-4 focus:ring-green-300`;

  return (
    <button type={type} className={`${baseStyle} ${primaryStyle}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  onClick: () => {},
  type: "button",
  variant: "primary",
};
