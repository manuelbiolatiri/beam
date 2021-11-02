export const Button = ({ text, login, secondary, active, ...rest }) => {
  const disabled = rest.loading || rest.disabled;
  return (
    <button
      disabled={disabled}
      {...rest}
      className={`button  ${disabled ? "button--disabled" : ""}
      ${active && "active"} ${rest.className}`}
    >
      {text}
    </button>
  );
};
