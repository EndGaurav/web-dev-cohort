
const arr = [1,2,3,4,5,6];

// Imagine
// Error: .forEach function does not exist on arr variable 

// Before creating any polyfill function first understand the signature 
// means: what sorts of paramater that function takes
// what that function do 
// what that function return

// let's start with forEach function
// forEach method takes a function as an input
// That callback function takes 2 parameters: First which will indicate the each individual element in array, Second: index number of the elements  
// forEach method does not return anything. 
const response = arr.forEach((value, index) => {    
    // console.log(value + ":" + index);
})

if (!Array.prototype.myForEach) {
    Array.prototype.myForEach = function (callback) {
        const originalArray = this;
        
        for (let i = 0; i < originalArray.length; i++) {
            callback(originalArray[i], i)            
        }
    }
}

arr.myForEach(function (value, index) {
    console.log(`my foreach fn: ${value} : ${index}`);    
});

// Now let's create polyfill of map method
// accept a callback fn, perform some operation on each element of the current context array.
// and callback function return each operaton result inside a new array. 

if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (callback) {
        const newArray = [];
        for (let i = 0; i < this.length; i++) {
           const result =  callback(this[i], i);
            newArray.push(result);
        }
        return newArray;
    }
}

console.log(arr.myMap((item, index) => {
    console.log(index);
    return item - 2
}))

// Now let's create a polyfill of filter method
// return a new array if given condition is true

//  [1,2,3,4,5,6]; 
if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function (callback) {
        const newArray = [];
        for (let i = 0; i < this.length; i++) {
           if(callback(this[i])) {
                newArray.push(this[i])
           }
        }
        return newArray;
    }
}

console.log(arr.myFilter((item) => item % 2 == 0));





