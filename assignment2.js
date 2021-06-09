
//Array for testing

const arr = [1,2,3];
const arr2 = [1,,3];
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const words2 = ['spray', 'limit', 'elite','', 'destruction', 'present'];
const array = [1, 2, 3, 4, 5];

// FOR EACH //
Array.prototype.myEach = function(callbackFn) {
    //The forEach() method executes a provided function once for each array element.//

    for (let i = 0; i < this.length; i++) {
        if(this[i]== undefined) continue; //for cases like these [1,,3]
        callbackFn(this[i],i,this);
    }//end of for loop
};


//Testing myEach
console.log("myEach: ");
arr.myEach((x)=>console.log(x));

console.log("forEach: ");
arr.forEach((x)=>console.log(x));

console.log("myEach for undefined: ");
arr2.myEach((x)=>console.log(x));
console.log("myEach for undefined: ");
arr2.forEach((x)=>console.log(x));

// MAP //
Array.prototype.myMap = function(callbackFn) {
    //The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.//
    /*
        Accepts three arguments:
            current element
            current elements index
            entire array
    */
   const returnArray = []; //empty array that will be returned later.
   for (let i = 0; i < this.length; i++) {
       returnArray.push(callbackFn(this[i],i,this));
   }//end of for loo

   return(returnArray);
};


//Testing myMap
console.log("myMap: ");
const map1a = arr.myMap(x=> x);
console.log(map1a);
console.log("Map: ");
const map1b = arr.map(x=> x);
console.log(map1b);

console.log("myMap: ");
const map2a = arr2.myMap(x=> x);
console.log(map2a);
console.log("Map: ");
const map2b = arr2.map(x => x);
console.log(map2b);


// FILTER //
Array.prototype.myFilter = function(callbackFn) {
    //The filter() method creates a new array with all elements that pass the test implemented by the provided function.//
    /*
        We want to take these steps:
            - Create an empty array 
            - Iterate through each element in array elements. 
            - Check for the current element of the array. 
            - If it is true then add it to the empty array. 
    */

    const returnArray = []; //empty array
    for (let i = 0; i < this.length; i++) {
        if (callbackFn(this[i]))
        {
            returnArray.push(this[i]);
        }//end of if statement

    }//end of for loop
    
    return(returnArray);
};

//Test myFilter

const words_arr1a = words.myFilter(word => word.length > 6); //Test myFilter
console.log("myFilter: ");
console.log(words_arr1a);//Print myFilter

const words_arr1b = words.filter(word => word.length > 6); //Test .filter
console.log("Filter: ");
console.log(words_arr1b);//print .filter


const words_arr2a = words2.myFilter(word => word.length > 6); //Test myFilter
console.log("myFilter: ");
console.log(words_arr2a);//Print myFilter

const words_arr2b = words2.filter(word => word.length > 6); //Test .filter
console.log("Filter: ");
console.log(words_arr2b);//print .filter

// SOME //
Array.prototype.mySome = function(callback) {
    //This parameter is no longer called callbackFn according to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Some
    /*The some() method tests whether at least one element in the array passes the test implemented by the provided function. 
        It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. 
        It doesn't modify the array.
    */
    
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i]))
        {
            return true;
        }
    }
    return false;

};

//Test mySome 

const even1a = (element) => element % 2 === 0;//Test mySome
console.log('mySome: ')
console.log(array.mySome(even1a));//Print mySome

const even1b = (element) => element % 2 === 0;//Test Some
console.log('Some: ')
console.log(array.some(even1b));//Print Some
// expected output: true

console.log('mySome: ')//Test mySome
console.log([2, 5, 8, 1, 4].mySome(x => x > 10));  // Print and Test mySome: false 
console.log('mySome: ')
console.log([12, 5, 8, 1, 4].mySome(x => x > 10)); // Print and Test mySome: true


console.log('Some: ')//Test Some
console.log([2, 5, 8, 1, 4].some(x => x > 10));  // Print and Test Some: false
console.log('Some: ')
console.log([12, 5, 8, 1, 4].some(x => x > 10)); //Print and Test Some: true

// EVERY //
Array.prototype.myEvery = function(callbackFn) {
    //The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.//
    for (let i = 0; i < this.length; i++) {
        if(!callbackFn(this[i]))
        {
            return false;
        }
    }
    return true;
};

//Test myEvery
const isBelowThreshold = (currentValue) => currentValue < 40;
const sample_array = [1, 30, 39, 29, 10, 13];

console.log('myEvery: ')
console.log(sample_array.myEvery(isBelowThreshold));// Print and Test myEvery: true.

console.log('Every: ')
console.log(sample_array.every(isBelowThreshold));// Print and Test Every: true.

const isBelowThreshold2 = (currentValue) => currentValue < 30;
console.log('myEvery: ')
console.log(sample_array.myEvery(isBelowThreshold2));// Print and Test myEvery: false.

console.log('Every: ')
console.log(sample_array.every(isBelowThreshold2));// Print and Test Every: false.

function isBigEnough(element, index, array) {
    return element >= 10;
}

console.log('myEvery: ')
console.log([12, 5, 8, 130, 44].myEvery(isBigEnough));   // Print and Test myEvery: false.
console.log([12, 54, 18, 130, 44].myEvery(isBigEnough)); // Print and Test myEvery: true.

console.log('Every: ')
console.log([12, 5, 8, 130, 44].every(isBigEnough));   // Print and Test Every: false.
console.log([12, 54, 18, 130, 44].every(isBigEnough)); // Print and Test Every: true.

// REDUCE //
Array.prototype.myReduce = function(callbackFn,initialValue) {
    //The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.//

    //arguments is an Array-like object accessible inside functions that contains the values of the arguments passed to that function.
    const initialState = arguments.length >1 ;
    let returnValue = initialValue;
    for (let i = 0; i < this.length; i++) {
        if (i==0 && !initialState) 
        {
          returnValue = this[i];
        }//end of if statement
        else
        {
            returnValue = callbackFn(returnValue, this[i])
        }// end of else statement
        
    }
    return returnValue;
};

//Test myReduce

const sample_array2 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log('myReduce: ');
console.log(sample_array2.myReduce(reducer));// Print and Test myReduce: 10 
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log('myReduce: ');
console.log(sample_array2.myReduce(reducer, 5));// Print and Test myReduce: 15
// expected output: 15

// 1 + 2 + 3 + 4
console.log('Reduce: ');
console.log(sample_array2.reduce(reducer));// Print and Test Reduce: 10 
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log('Reduce: ');
console.log(sample_array2.reduce(reducer, 5));// Print and Test Reduce: 15
// expected output: 15

console.log('myReduce: ');
let sum1 = [0, 1, 2, 3].myReduce(function (accumulator, currentValue) 
{
   return accumulator + currentValue//Test myReduce
}, 0)
console.log(sum1);//Print 6

console.log('Reduce: ');
let sum2 = [0, 1, 2, 3].reduce(function (accumulator, currentValue) 
{
    return accumulator + currentValue//Test Reduce: 6
}, 0)
console.log(sum2);//Print 6

// INCLUDES //
Array.prototype.myIncludes = function() {
    //The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.//

};

// INDEXOF //
Array.prototype.myIndexOf = function() {
    //The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.//

};

// PUSH //
Array.prototype.myPush = function() {
    //The push() method adds one or more elements to the end of an array and returns the new length of the array.//

};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {
    //The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.//
};

// KEYS //
Object.grabKeys = function() {
    //The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.//
    
};

// VALUES //
Object.grabValues = function() {
    /*The Object.values() method returns an array of a given object's own enumerable property values, 
        in the same order as that provided by a for...in loop. 
        (The only difference is that a for...in loop enumerates properties in the prototype chain as well.)
    */ 
};
