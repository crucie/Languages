const tinderUser = new Object()

tinderUser.id = "123ab"
tinderUser.name = " sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)


const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName:{
            firstName: "Sammy",
            lastName: "shiv"
        }
    }
}


// console.log(regularUser);
// console.log(regularUser.email);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName["userFullName"]);
// console.log(regularUser[fullname[userFullName[lastName]]]);

 const O1 = {1:"a", 2: "b"}
 const O2 = {3:"c" , 4: "d"}

//  const obj3 = Object.assign({}, O1, O2)

const obj3 = {...O1, ...O2};
// console.log(obj3)

// console.log(tinderUser);
// console.log(Object.keys(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    courseName: "js in Hindi",
    price: "999",
    courseInstructor: "Gabbar",
}

const {courseInstructor} = course

console.log(courseInstructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}

// ]

const user = {
    username: "Hittesh",
    price:199
}
function handleObject(anyObj){
    console.log(`Username is ${anyObj.username} and the price is ${anyObj.price}`)
}

handleObject(user)