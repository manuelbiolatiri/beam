export const Input = ({
  label,
  placeholder,
  value,
  required,
  onChange,
  ...rest
}) => {
  return (
    <div className="input">
      <div className="input-cont">
        <input
          type={rest.type}
          value={value}
          required={required}
          placeholder={placeholder}
          onChange={onChange}
          className={`text-input ${rest.className}`}
        />
      </div>
    </div>
  );
};
