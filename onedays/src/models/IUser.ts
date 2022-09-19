export interface IUser {
    name: string,
    email: string,
    age: number,
    status?: boolean,
    clickfnc: Function,
}

export class User {
    name = '';
    email = '';
    age = 0;
    status = false;
    clickfnc: Function  = new Function()
}