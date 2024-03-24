import { ButtonType } from "../../../types/common";

const Button = ({
  children,
  onClick,
  width,
  height,
  color,
  background,
  className,
}: ButtonType) => {
  return (
    <button
      className={className}
      onClick={onClick}
      style={{
        width: width,
        height: height,
        color: color,
        background: background,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
