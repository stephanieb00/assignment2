// FOR EACH //
Array.prototype.myEach = function (callbackFn) {
    //The forEach() method executes a provided function once for each array element.//
    
    for (let i = 0; i < this.length; i++) {
        if (this[i] == undefined) continue; //for cases like these [1,,3]
        callbackFn(this[i], i, this);
    } //end of for loop
};

// MAP //
Array.prototype.myMap = function (callbackFn) {
    //The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.//
    /*
        Accepts three arguments:
            current element
            current elements index
            entire array
    */
    const returnArray = []; //empty array that will be returned later.
    for (let i = 0; i < this.length; i++) {
        returnArray.push(callbackFn(this[i], i, this));
    } //end of for loo

    return (returnArray);
};

// FILTER //
Array.prototype.myFilter = function (callbackFn) {
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
        if (callbackFn(this[i])) {
            returnArray.push(this[i]);
        } //end of if statement

    } //end of for loop

    return (returnArray);
};

// SOME //
Array.prototype.mySome = function (callback) {
    //This parameter is no longer called callbackFn according to https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Some
    /*The some() method tests whether at least one element in the array passes the test implemented by the provided function. 
        It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. 
        It doesn't modify the array.
    */

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return true;
        }
    }
    return false;

};

// EVERY //
Array.prototype.myEvery = function (callbackFn) {
    //The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.//
    for (let i = 0; i < this.length; i++) {
        if (!callbackFn(this[i])) {
            return false;
        }
    }
    return true;
};

// REDUCE //
Array.prototype.myReduce = function (callbackFn, initialValue) {
    if (initialValue === undefined)
        accumulator = undefined;
    else
        accumulator = initialValue;

    for (var i = 0; i < this.length; i++) {
        if (accumulator !== undefined)
            accumulator = callbackFn.call(undefined, accumulator, this[i], i, this);
        else
            accumulator = this[i];
    }
    return accumulator;
};

// INCLUDES //
Array.prototype.myIncludes = function (searchElement, fromIndex = 0) {
    for (let i = fromIndex; i < this.length; i++) {
        if (searchElement === this[i])
            return true;
    }
    return false;
};

// INDEXOF //
Array.prototype.myIndexOf = function (searchElement, fromIndex = 0) {
    for (let i = fromIndex; i < this.length; i++)
        if (searchElement === this[i])
            return i;

    return -1;
};

// PUSH //
Array.prototype.myPush = function (elementN) {
    let len = this.length;
    this[len] = elementN;
    len++;
    return this.length;
};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function (searchElement, fromIndex = 0) {
    let lastIndexOf = -1;
    for (let i = fromIndex; i < this.length; i++)
        if (searchElement === this[i])
            lastIndexOf = i;

    return lastIndexOf;
};

// KEYS //
Object.grabKeys = function (obj) {
    let keys = [];
    for (const property in obj)
        keys.push(property);
    
    return keys;
};

// VALUES //
Object.grabValues = function (obj) {
    let keys = [];
    for (const property in obj) 
        keys.push(obj[property]);
    
    return keys;
};