import { TitleType } from "../../../types/common";

const Title = ({
  width,
  height,
  fontSize,
  lineHeight,
  letterSpacing,
  children,
}: TitleType) => {
  return (
    <h4
      style={{
        width: width,
        height: height,
        fontSize: fontSize,
        lineHeight: lineHeight,
        letterSpacing: letterSpacing,
      }}
    >
      {children}
    </h4>
  );
};
export default Title;
