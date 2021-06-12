// FOR EACH //
Array.prototype.myEach = function (callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] == undefined) continue; //for cases like these [1,,3]
        callbackFn(this[i], i, this);
    } //end of for loop
};

// MAP //
Array.prototype.myMap = function (callbackFn) {
    const returnArray = []; //empty array that will be returned later.
    for (let i = 0; i < this.length; i++) {
        returnArray.push(callbackFn(this[i], i, this));
    } //end of for loop

    return (returnArray);
};

// FILTER //
Array.prototype.myFilter = function (callbackFn) {
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

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return true;
        }
    }
    return false;
};

// EVERY //
Array.prototype.myEvery = function (callbackFn) {
    for (let i = 0; i < this.length; i++) {
        if (!callbackFn(this[i])) {
            return false;
        }
    }
    return true;
};

// REDUCE //
Array.prototype.myReduce = function(callbackFn, initialValue = 0) {
    let accumulator = initialValue; // if supplied use initialValue, else = 0

    for (let i = 0; i < this.length; i++)
        accumulator = callbackFn(accumulator, this[i], i, this);
    
    return accumulator;
}

// INCLUDES //
Array.prototype.myIncludes = function (searchElement, fromIndex = 0) {
    for (let i = fromIndex; i < this.length; i++)
        if (searchElement === this[i])
            return true;

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
    this[this.length] = elementN;
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
