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
        <div className="label">
          {label && <span className="input-label"> {label} </span>}
        </div>

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
