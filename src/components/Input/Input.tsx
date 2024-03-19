import { InputType } from "../../types/common";

const Input = ({
  type,
  placeholder,
  width,
  height,
  border,
  maxLength,
  onChange,
  value,
  className,
}: InputType) => {
  return (
    <>
      <input
        className={className}
        type={type}
        placeholder={placeholder}
        style={{ width: width, height: height, border: border }}
        maxLength={maxLength}
        onChange={onChange}
        value={value}
      />
      {/* <span>{value}</span> */}
    </>
  );
};

export default Input;
