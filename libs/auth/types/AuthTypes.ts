export interface IAuthUser {
    avatar : string
    name : string
    email : string
    token : string
}

export interface AuthSliceState {
    user : IAuthUser | null;
}