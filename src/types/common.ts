export interface ButtonType {
    children: React.ReactNode,
    onClick: (e: any) => void,
    width: number,
    height: number,
    color: 'white',
    background: 'black',
    className: string,
}

export interface GratitudeCardType {
    title: string;
    content: string;
    setConfirmed: (confirmed: boolean) => void;
}

export interface TitleType {
    width: number,
    height: number,
    fontSize: '12px',
    lineHeight: '15.31px',
    letterSpacing: '2px',
    children: React.ReactNode,
}

export interface InputType {
    type: 'text' | 'tel' | 'month',
    placeholder: string,
    width: number,
    height: number,
    border: string,
    maxLength: number,
    onChange: (e: any) => void,
    value?: string | undefined,
    className: string,
}

export interface CardDetailsType {
    cardNumber: number | string,
    ownerName: string,
    expirationMonth: number | string,
    expirationYear: number | string,
    cvc: number | string,
}