import styled from "styled-components";
import { GratitudeCardType } from "../../types/common";
import Button from "../Button/Button";
import Image from "../Image/Image";

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

const GratitudeCardContainer = styled.div`
  width: 810px;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 40px;

  @media (min-width: 1200px) {
    gap: 50px;
  }
`;

const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .title {
    width: 327px;
    font-size: 28px;
    letter-spacing: 3.42px;
  }

  .content {
    width: 263px;
    font-size: 18px;
    color: #8F8694;
  }

  @media (min-width: 1200px) {
    .title {
        width: 381px;
    }
  }
`;
