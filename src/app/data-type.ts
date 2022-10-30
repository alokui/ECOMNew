export interface SignUp {
    name: string,
    password: string,
    email: string
};

export interface Login {
    email: string,
    password: string,
};

export interface Product {
    PName: string,
    PPrice: number,
    PCategory: string,
    PDiscription: string,
    PImage: string
}