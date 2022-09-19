console.log("hello Node");

// variable
const name = ""
//name = "Veli"

let surname = "Bilmem"
surname = "Bilirler"

var age = 30
age = 35

if ( true ) {
    if ( true ) {
        let num1 = 10;
        var num2 = 20;
    }
    console.log(num2);
}

// array
const arr = [ "İstanbul" ,100, true ]
// add item
arr.push("İzmir")
arr.push(50)
const newlength = arr.push(false)
console.log(arr);
const arr1 = ["Ankara", "Adana"]
const newArr = arr.concat(arr1)
console.log(newArr);

// loop
for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    console.log( typeof item );
    if ( (typeof item) == 'string' ) {
        console.log("City", item);
    }
}
// array remove item
arr.splice(1,1)
console.log("Delete Arr", arr);
if ( arr.splice(100,1).length > 0 ) {
    console.log("Delete success");
}else {
    console.log("Delete Fail");
}

const a1 = "10"
const a2 = 10
if (  a1 === a2 ) {
    console.log("a1 == a2");
}else {
    console.log("a1 !== a2");
}

// Filter
const newArrX = arr.filter( item => (typeof item) == 'string' )
const newArrY = arr1.filter( item => (typeof item) == 'string' )
const joinArr = newArrX.concat(newArrY)
console.log(joinArr);

// findIndex
const statusIndex = joinArr.findIndex(item => item === 'Ankara')
console.log(statusIndex);


// object
const user1 = {
    name: 'Ali',
    surname: 'Bilmem',
    age: 30
}
const user2 = {
    name: 'Zehra',
    surname: 'Bil',
    age: 25
}
user1['status'] = true
user2['status'] = false
delete user1['name']
const users = [user1, user2]
users[0].age = 40
users.forEach( (item) => {
    console.log(item.name, item.surname, item.age, item.status);
})
console.log(users[0].age);

const objx = {
    pid: 10,
    title: 'TV',
    price: 30000
}
const objy = Object.assign({}, objx)
objx['pid'] = 50
console.log( objx );
console.log( objy );

Object.keys(objy).forEach(key => {
    console.log(key, objy[key]);
})

// 1. Function
function fncSum(numa, numb) {
    const sm = numa + numb
    console.log(sm);
}
fncSum(20,30)


function pullFnc(fncParams) {
    fncParams(70,66)
}
pullFnc(fncSum)


// 2.Function - arrow function
/**
 * 
 * @param {number} numa 
 * @param {number} numb 
 * @returns {number} return
 */
const fncMinus = (numa, numb) => {
    const min = numa - numb
    console.log(min);
}
fncMinus( 99, 87 )

// import module
const util = require('./util')
console.log(util.appTitle);
util.fncProfileName("Title App")

// ts module import
const action = require('./action')
console.log(action.age);