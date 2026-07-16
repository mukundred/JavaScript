// singleton

const tinderUser = new Object()
// console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

const regularUser = {
    email: "mukund@xyz.com",
    fullname: {
        userfullname :{
            firstName : "Mukund",
            LastName : "Chaturvedi"
        }
    }
}

// console.log(regularUser.fullname?.userfullname.firstName);


const obj1 = {
    1:"a",
    2:"b",
    3:"c"
}

const obj2 = {
    4:"e",
    5:"w",
    6:"q"
}

// // or we can just use spread {...obj1, ...obj2}
// const obj3 = Object.assign({},obj1, obj2);
// console.log(obj3);


console.log(Object.keys(tinderUser));//similar for values, entries

// we also use .hasOwnProperty !! to check if the property is even there or not !













// object literals
const mysym = Symbol("Key1")
const jUser = {
    name : "Mukund",
    [mysym] : "MyKey1",
    age : 18,
    location: "NCR",
    email : "mukund@google.com",
    isLoggedIn : false,
    lastLoginDays: ["monday","friday"]
}


// console.log(jUser.email);
// console.log(jUser["email"]);
// console.log(typeof jUser[mysym]);




// jUser.email = "mukund@Microsoft.com"
// Object.freeze(jUser)
// jUser.email = "mukund@Microsoft.com"
// console.log(jUser);


// jUser.greeting = function(){
//     console.log("Hello !");
    
// }

// console.log(jUser.greeting());


