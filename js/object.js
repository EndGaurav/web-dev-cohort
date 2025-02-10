const myTeas = {
    greenTea: {
        name: "Green Tea"
    },
    blackTea: {
        name: "Black tea"
    }
}

const shallowTeasCopy = {...myTeas};
shallowTeasCopy.greenTea.name = "change tea";
console.log(shallowTeasCopy);

// Now i am doing deep copy:
// step 1: stringify the complete object which you want to copy and save it with a reference.
const stringifyMyTeas = JSON.stringify(myTeas);

// step 2: parse that stringify object using json.parse() and spread that object where you want to make a deep copy. 
const deepTeasCopy = {...JSON.parse(stringifyMyTeas)}; 

// walah, here is your deep copy.
// with a differnce memory address in heap. 
// console.log(deepTeasCopy);


// checking weather actually a deep copy is made or not
// deepTeasCopy.greenTea.name = "change tea";
// console.log(deepTeasCopy);
console.log(myTeas);


