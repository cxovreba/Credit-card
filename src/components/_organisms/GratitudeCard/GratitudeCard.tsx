import { Button, Image } from "../..";
import { GratitudeCardContainer, TextInfo } from "../../../styles";
import { GratitudeCardType } from "../../../types/common";


const GratitudeCard = ({ title, content, setConfirmed }: GratitudeCardType) => {
  return (
    <GratitudeCardContainer>
      <Image />
      <TextInfo>
        <h2 className="title">{title}</h2>
        <p className="content">{content}</p>
      </TextInfo>

      <Button
        children={"Continue"}
        onClick={() => setConfirmed(false)}
        width={327}
        height={53}
        color={"white"}
        background={"black"}
        className={"continue-btn"}
      />
    </GratitudeCardContainer>
  );
};

export default GratitudeCard;

