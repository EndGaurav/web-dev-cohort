const arr = ["gaurav", "anuj", "rahul", "bob", "ziiz"];

// console.log(arr.sort((a, b) => b.localeCompare(a)));
const upper = [];

for (let i = 0; i < arr.length; i++) {
   upper.push(arr[i].toUpperCase())
}

// console.log(upper);
// console.log(upper);

const person1 = {   
    name: "gaurav",
    subInfo: {
        friends: "divyansh",
        isFrendly: false
    }
}

// const person2 = {...person1};
// console.log("Person2: ",person2);
// person2.subInfo.friends = "sourav";
// console.log("Person2: ",person2);
// console.log("Person1: ",person1);

// deep copy i can do by following ways mentioned below:
// first serialize object and then deserialize object and then copy it in new address to making it different.
const stringify = JSON.stringify(person1);
console.log(stringify);
const person2 = {...JSON.parse(stringify)};
// console.log(person2);
person2.subInfo.friends = "akash";
console.log(person2);
console.log(person1);



