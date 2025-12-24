export type UserDTO = {

    id?: number;
    name: string;
    email: string;
    password: string;
};

export type UpdateUserDTO = {

    name?: string;
    email?: string;
    password?: string;
};

export type UserSignUp = {

    name: string;
    email: string;
    password: string;
    confirmPassword: string;
};