import styled from "styled-components";
import { CardDetailsType } from "../../types/common";
import logo from "./Group 15.png";
import circle from "./Group 8.png";

const CardDetails = ({
  cardNumber,
  ownerName,
  expirationMonth,
  expirationYear,
  cvc,
}: CardDetailsType) => {
  return (
    <>
      <CreditCard>
        <BackSide>
          <BlackSpace />
          <GreySpace>
            <CardDetailStyle
              className="cvc"
              type="text"
              placeholder="000"
              value={cvc}
            />
          </GreySpace>
          <img className="logo" src={logo} alt="" />
        </BackSide>
        <FrontSide>
          <img className="circle" src={circle} alt="" />
          <Gap />
          <CardNumber
            className="card-number"
            type="text"
            placeholder="0000 0000 0000 0000"
            value={cardNumber}
          />
          <NameAndDate>
            <CardDetailStyle
              className="card-owner"
              type="text"
              placeholder="JANE APPLESEED"
              value={ownerName}
            />
            <DateStyle>
              <CardDetailStyle
                className="expiration-month"
                type="text"
                placeholder="00"
                value={expirationMonth}
              />
              <span className="separator">/</span>
              <CardDetailStyle
                className="expiration-year"
                type="text"
                placeholder="00"
                value={expirationYear}
              />
            </DateStyle>
          </NameAndDate>
        </FrontSide>
      </CreditCard>
    </>
  );
};

export default CardDetails;

const CardDetailStyle = styled.input`
  border: none;
  outline: none;
  background: transparent;
  color: white;
`;

const DateStyle = styled.div`
  width: 50px;
  height: 18px;
  display: flex;
  align-items: center;
  gap: 2px;
  @media (min-width: 1200px) {
    width: 60px;
    height: 18px;
  }

  .expiration-month {
    width: 16px;
    height: 11px;
    font-size: 9px;
    @media (min-width: 1200px) {
      width: 23px;
      height: 18px;
      font-size: 14px;
    }
  }

  .expiration-month::placeholder {
    font-size: 9px;
    @media (min-width: 1200px) {
      font-size: 14px;
    }
  }

  .expiration-year {
    width: 16px;
    height: 11px;
    font-size: 9px;
    @media (min-width: 1200px) {
      width: 23px;
      height: 18px;
      font-size: 14px;
    }
  }

  .expiration-year::placeholder {
    font-size: 9px;
    @media (min-width: 1200px) {
      font-size: 14px;
    }
  }

  .separator {
    font-size: 9px;
    @media (min-width: 1200px) {
      font-size: 14px;
    }
  }
`;

const CreditCard = styled.div`
  background-color: #21092f;
  width: 375px;
  height: 240px;
  position: relative;

  @media (min-width: 1200px) {
    width: 483px;
    height: 100vh;
  }
`;

const BackSide = styled.div`
  background: linear-gradient(90deg, hsla(231, 8%, 84%, 1) 100%, hsla(345, 43%, 54%, 1) 100%);;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 286px;
  height: 157px;
  position: absolute;
  right: 10px;
  top: 25px;
  border-radius: 6px;

  .logo {
    margin-block: 20px;
    width: 70px;
  }

  @media (min-width: 1200px) {
    width: 447px;
    height: 245px;
    top: 350px;
    left: 280px;

    .logo {
      margin-block: 30px;
      width: 186px;
    }
  }
`;

const FrontSide = styled.div`
  background: linear-gradient(
    90deg,
    hsla(344, 97%, 63%, 1) 0%,
    hsla(232, 90%, 59%, 1) 100%
  );
  color: white;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: baseline;
  width: 286px;
  height: 157px;
  position: absolute;
  bottom: -28px;
  left: 20px;
  border-radius: 6px;

  .circle {
    width: 54px;
    height: 30px;
    margin: 10px;
  }

  @media (min-width: 1200px) {
    width: 447px;
    height: 245px;
    top: 45px;
    left: 150px;
    gap: 15px;

    .circle {
      width: 84px;
      height: 47px;
      margin: 20px;
    }
  }
`;

const BlackSpace = styled.div`
  width: 286px;
  height: 35px;
  background: black;
  margin-block: 10px;

  @media (min-width: 1200px) {
    width: 447px;
    height: 54px;
    margin-block: 20px;
  }
`;

const GreySpace = styled.div`
  width: 231px;
  height: 30px;
  background: #adb5be;
  display: flex;
  justify-content: end;
  border-radius: 3px;

  .cvc {
    width: 20px;
    font-size: 9px;
  }

  @media (min-width: 1200px) {
    width: 361px;
    height: 38px;
  }

  .cvc {
    width: 32px;
    font-size: 14px;
  }
`;

const NameAndDate = styled.div`
  display: flex;
  justify-content: space-between;
  width: 245px;

  ::placeholder {
    color: white;
    font-size: 14px;
  }

  .card-owner {
    width: 90px;
    font-size: 9px;
    letter-spacing: 1.29px;
  }

  @media (min-width: 1200px) {
    width: 383px;

    .card-owner {
      width: 200px;
      font-size: 14px;
      letter-spacing: 2px;
    }
  }
`;

const Gap = styled.div`
  height: 10px;

  @media (min-width: 1200px) {
    height: 30px;
  }
`;

const CardNumber = styled.input`
  width: 239px;
  border: none;
  outline: none;
  background: transparent;
  color: white;

  .card-number {
    font-size: 18px;
    letter-spacing: 2.2px;
  }

  @media (min-width: 1200px) {
    width: 372px;
    font-size: 28px;
    letter-spacing: 3.42px;
  }
`;
