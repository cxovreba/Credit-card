import { useState } from "react";
import Button from "../../_molecules/Button/Button";
import GratitudeCard from "../GratitudeCard/GratitudeCard";
import Input from "../../_molecules/Input/Input";
import Title from "../../_atoms/Title/Title";
import CardDetails from "./CardDetails";
import { Container, InputContainer, InputStyle, DateAndCvc } from "../../../styles/common";

const CreditCard = () => {
  const [ownerName, setOwnerName] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expirationMonth, setExpirationMonth] = useState<string>("");
  const [expirationYear, setExpirationYear] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [alert, setAlert] = useState<{
    ownerName: string;
    cardNumber: string;
    expirationMonth: string;
    expirationYear: string;
    cvc: string;
  }>({
    ownerName: "",
    cardNumber: "",
    expirationMonth: "",
    expirationYear: "",
    cvc: "",
  });

  const handleSubmit = () => {
    if (validate()) {
      const creditCardDetails = {
        ownerName,
        cardNumber,
        expirationMonth,
        expirationYear,
        cvc,
      };
      localStorage.setItem("creditCard", JSON.stringify(creditCardDetails));
      setConfirmed(true);
    }
  };

  const validate = () => {
    let valid = true;
    const alertCopy = { ...alert };

    if (!ownerName || ownerName.trim() === "" || /\d/.test(ownerName)) {
      alertCopy.ownerName = "Please enter the cardholder's name";
      valid = false;
    } else {
      alertCopy.ownerName = "";
    }

    const cardNumberWithoutSpaces = cardNumber.replace(/\s/g, "");
    const cardNumberRegex = /^\d{16}$/;
    if (!cardNumberRegex.test(cardNumberWithoutSpaces)) {
      alertCopy.cardNumber = "Wrong format, numbers only";
      valid = false;
    } else {
      alertCopy.cardNumber = "";
    }

    const expirationMonthNumber = parseInt(expirationMonth, 10);
    if (
      !expirationMonthNumber ||
      expirationMonthNumber < 1 ||
      expirationMonthNumber > 12
    ) {
      alertCopy.expirationMonth = "Invalid expiry";
      valid = false;
    } else {
      alertCopy.expirationMonth = "";
    }

    const expirationYearNumber = parseInt(expirationYear, 10);
    const currentYearLastTwoDigits = new Date().getFullYear() % 100;
    if (
      !expirationYearNumber ||
      expirationYearNumber < currentYearLastTwoDigits ||
      expirationYearNumber > 99
    ) {
      alertCopy.expirationYear = " ";
      valid = false;
    } else {
      alertCopy.expirationYear = "";
    }

    const cvcRegex = /^\d{3}$/;
    if (!cvcRegex.test(cvc)) {
      alertCopy.cvc = "CVC must be a 3 digit number";
      valid = false;
    } else {
      alertCopy.cvc = "";
    }

    setAlert(alertCopy);
    return valid;
  };

  return (
    <Container>
      <div>
        <CardDetails
          cardNumber={cardNumber}
          ownerName={ownerName}
          expirationMonth={expirationMonth}
          expirationYear={expirationYear}
          cvc={cvc}
        />
      </div>
      {!confirmed && (
        <InputContainer>
          <InputStyle>
            <Title
              width={145}
              height={15}
              fontSize={"12px"}
              lineHeight={"15.31px"}
              letterSpacing={"2px"}
              children={"CARDHOLDER NAME"}
            />
            <Input
              type={"text"}
              placeholder={"e.g. Jane Appleseed"}
              width={347}
              height={45}
              border={
                alert.ownerName ? "1px solid #FF5050" : "1px solid #DFDEE0"
              }
              maxLength={30}
              onChange={(e) => setOwnerName(e.target.value)}
              className={"owner-input"}
            />
            {alert.ownerName && (
              <span className="warning">{alert.ownerName}</span>
            )}
          </InputStyle>
          <InputStyle>
            <Title
              width={110}
              height={15}
              fontSize={"12px"}
              lineHeight={"15.31px"}
              letterSpacing={"2px"}
              children={"CARD NUMBER"}
            />
            <Input
              type={"text"}
              placeholder={"e.g. 1234 5678 9123 0000"}
              width={347}
              height={45}
              border={
                alert.cardNumber ? "1px solid #FF5050" : "1px solid #DFDEE0"
              }
              maxLength={19}
              onChange={(e) => setCardNumber(e.target.value)}
              className={"card-number-input"}
              value={cardNumber
                .replace(/\s/g, "")
                .replace(/(\d{4})/g, "$1 ")
                .trim()}
            />
            {alert.cardNumber && (
              <span className="warning">{alert.cardNumber}</span>
            )}
          </InputStyle>
          <DateAndCvc>
            <InputStyle>
              <Title
                width={143}
                height={15}
                fontSize={"12px"}
                lineHeight={"15.31px"}
                letterSpacing={"2px"}
                children={"Exp. Date (MM/YY)"}
              />
              <div className="month-year">
                <div className="date">
                  <Input
                    type={"text"}
                    placeholder={"MM"}
                    width={72}
                    height={45}
                    border={
                      alert.expirationMonth
                        ? "1px solid #FF5050"
                        : "1px solid #DFDEE0"
                    }
                    maxLength={2}
                    onChange={(e) => setExpirationMonth(e.target.value)}
                    className={"month-input"}
                  />
                  {alert.expirationMonth && (
                    <span className="warning">{alert.expirationMonth}</span>
                  )}
                </div>
                <div className="date">
                  <Input
                    type={"text"}
                    placeholder={"YY"}
                    width={72}
                    height={45}
                    border={
                      alert.expirationYear
                        ? "1px solid #FF5050"
                        : "1px solid #DFDEE0"
                    }
                    maxLength={2}
                    onChange={(e) => setExpirationYear(e.target.value)}
                    className={"year-input"}
                  />
                  {alert.expirationYear && (
                    <span className="warning">{alert.expirationYear}</span>
                  )}
                </div>
              </div>
            </InputStyle>
            <InputStyle>
              <Title
                width={27}
                height={15}
                fontSize={"12px"}
                lineHeight={"15.31px"}
                letterSpacing={"2px"}
                children={"CVC"}
              />
              <Input
                type={"text"}
                placeholder={"e.g. 123"}
                width={130}
                height={45}
                border={alert.cvc ? "1px solid #FF5050" : "1px solid #DFDEE0"}
                maxLength={3}
                onChange={(e) => setCvc(e.target.value)}
                className={"cvc-input"}
              />
              {alert.cvc && <span className="warning">{alert.cvc}</span>}
            </InputStyle>
          </DateAndCvc>
          <Button
            children={"Confirm"}
            onClick={handleSubmit}
            width={355}
            height={53}
            color={"white"}
            background={"black"}
            className={"confirm-btn"}
          />
        </InputContainer>
      )}
      {confirmed && (
        <GratitudeCard
          title={"Thank You!"}
          content={"We've added your card details"}
          setConfirmed={setConfirmed}
        />
      )}
    </Container>
  );
};

export default CreditCard;

