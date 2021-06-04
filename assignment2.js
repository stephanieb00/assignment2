
//Array for testing

const arr = [1,2,3];

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

// MAP //
Array.prototype.myMap = function() {
    //The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.//

};

// FILTER //
Array.prototype.myFilter = function() {
    //The filter() method creates a new array with all elements that pass the test implemented by the provided function.//
};

// SOME //
Array.prototype.mySome = function() {
    /*The some() method tests whether at least one element in the array passes the test implemented by the provided function. 
        It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. 
        It doesn't modify the array.
    */
};

// EVERY //
Array.prototype.myEvery = function() {
    //The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.//

};

// REDUCE //
Array.prototype.myReduce = function() {
    //The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.//

};

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
