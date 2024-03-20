import { CardDetailsType } from "../../types/common";
import logo from "./Group 15.png";
import circle from "./Group 8.png";
import { CreditCard, BackSide, BlackSpace, GreySpace, CardDetailStyle, FrontSide, Gap, CardNumber, NameAndDate, DateStyle } from "../../styles/common";

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

