import { age, userName } from './action'
import { IUser, User } from './models/IUser';
const util = require('./util')
console.log(age);
console.log(userName);
console.log(util.appTitle);

const action = (item:IUser) => {
    console.log("Action  Call", item.email);
}

const user1: IUser = {
    name: 'Ali',
    email: 'ali@mail.com',
    age: 30,
    clickfnc: action 
}
console.log(user1.email);
user1.clickfnc(user1)

class userx implements IUser {
    clickfnc = action;
    name = "";
    email = "";
    age = 10;
    status = true;
}
const usery = new userx()
usery.age

const user2:User = {
    name: '',
    email: '',
    age: 0,
    status: false,
    clickfnc: action
}

const arr:IUser[] = []
//arr.push('')
arr.map( item => {
    item.name
} )



