export interface IUserResponse {
    users: IUser[];
    total: number;
    skip:  number;
    limit: number;
}

export interface IUser {
    id:         number;
    firstName:  string;
    lastName:   string;
    maidenName: string;
    age:        number;
    gender:     Gender;
    email:      string;
    phone:      string;
    username:   string;
    password:   string;
    birthDate:  string;
    image:      string;
    bloodGroup: string;
    height:     number;
    weight:     number;
    eyeColor:   string;
    hair:       IHair;
    ip:         string;
    address:    IAddress;
    macAddress: string;
    university: string;
    bank:       IBank;
    company:    ICompany;
    ein:        string;
    ssn:        string;
    userAgent:  string;
    crypto:     Crypto;
    role:       Role;
}

export interface IAddress {
    address?:     string;
    city?:        string;
    state?:       string;
    stateCode?:   string;
    postalCode?:  string;
    coordinates?: ICoordinates;
    country?:     Country;
}

export interface ICoordinates {
    lat: number;
    lng: number;
}

export type Country = "United States";

export interface IBank {
    cardExpire?: string;
    cardNumber?: string;
    cardType?:   string;
    currency?:   string;
    iban?:       string;
}

export interface ICompany {
    department?: string;
    name?:       string;
    title?:      string;
    address?:    IAddress;
}

export interface ICrypto {
    coin?:    Coin;
    wallet?:  Wallet;
    network?: Network;
}

export type Coin = "Bitcoin";

export type Network = "Ethereum (ERC20)";

export type Wallet = "0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a";

export type Gender = "female" | "male";

export interface IHair {
    color?: string;
    type?:  Type;
}

export type Type = "Straight" | "Wavy" | "Curly" | "Kinky";

export type Role = "admin" | "moderator" | "user";