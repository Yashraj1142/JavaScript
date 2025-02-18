//Non-primitive datatypes

let userName = {
    firstName: "Yashraj",
    lastName: "Gupta",
    isLoggedin: false
};

console.log(userName);
console.log(typeof userName);



const userName2 = {
    name: "Suhana",
    isLoggedin: false
};

//userName2 object is const, but still we can change the values of name and isLoggedin. This is because, userName2 is an object in the storage that holds the link to name and isLoggesin. And name and isLoggedin are primitive datatypes which are not const.

console.log(userName2.name);    //we can access the name by using dot operator.
//we can also change any member of the object by using the dot operator.
userName2.isLoggedin = true;
console.log(userName2.isLoggedin);



let today = new Date();
console.log(today.getDate());


//arrays
let arr = ["Yash", true, 3];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);