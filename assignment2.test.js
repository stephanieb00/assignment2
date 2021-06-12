//Array for testing
const arr = [1, 2, 3];
const arr2 = [1, , 3];
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const words2 = ['spray', 'limit', 'elite', '', 'destruction', 'present'];
const array = [1, 2, 3, 4, 5];

//Testing myEach
console.log("myEach TESTS ---------------------------------------------------------------");

console.log("myEach: ");
arr.myEach((x) => console.log(x));

console.log("forEach: ");
arr.forEach((x) => console.log(x));

console.log("myEach for undefined: ");
arr2.myEach((x) => console.log(x));
console.log("myEach for undefined: ");
arr2.forEach((x) => console.log(x));

//Testing myMap
console.log("myMap TESTS ----------------------------------------------------------------");

console.log("myMap: ");
const map1a = arr.myMap(x => x);
console.log(map1a);
console.log("Map: ");
const map1b = arr.map(x => x);
console.log(map1b);

console.log("myMap: ");
const map2a = arr2.myMap(x => x);
console.log(map2a);
console.log("Map: ");
const map2b = arr2.map(x => x);
console.log(map2b);

//Test myFilter
console.log("myFilter TESTS -------------------------------------------------------------");

const words_arr1a = words.myFilter(word => word.length > 6); //Test myFilter
console.log("myFilter: ");
console.log(words_arr1a); //Print myFilter

const words_arr1b = words.filter(word => word.length > 6); //Test .filter
console.log("Filter: ");
console.log(words_arr1b); //print .filter

const words_arr2a = words2.myFilter(word => word.length > 6); //Test myFilter
console.log("myFilter: ");
console.log(words_arr2a); //Print myFilter

const words_arr2b = words2.filter(word => word.length > 6); //Test .filter
console.log("Filter: ");
console.log(words_arr2b); //print .filter

//Test mySome 
console.log("mySome TESTS ---------------------------------------------------------------");

const even1a = (element) => element % 2 === 0; //Test mySome
console.log('mySome: ')
console.log(array.mySome(even1a)); //Print mySome

const even1b = (element) => element % 2 === 0; //Test Some
console.log('Some: ')
console.log(array.some(even1b)); //Print Some
// expected output: true

console.log('mySome: ') //Test mySome
console.log([2, 5, 8, 1, 4].mySome(x => x > 10)); // Print and Test mySome: false 
console.log('mySome: ')
console.log([12, 5, 8, 1, 4].mySome(x => x > 10)); // Print and Test mySome: true

console.log('Some: ') //Test Some
console.log([2, 5, 8, 1, 4].some(x => x > 10)); // Print and Test Some: false
console.log('Some: ')
console.log([12, 5, 8, 1, 4].some(x => x > 10)); //Print and Test Some: true

//Test myEvery
console.log("myEvery TESTS --------------------------------------------------------------");
const isBelowThreshold = (currentValue) => currentValue < 40;
const sample_array = [1, 30, 39, 29, 10, 13];

console.log('myEvery: ')
console.log(sample_array.myEvery(isBelowThreshold)); // Print and Test myEvery: true.

console.log('Every: ')
console.log(sample_array.every(isBelowThreshold)); // Print and Test Every: true.

const isBelowThreshold2 = (currentValue) => currentValue < 30;
console.log('myEvery: ')
console.log(sample_array.myEvery(isBelowThreshold2)); // Print and Test myEvery: false.

console.log('Every: ')
console.log(sample_array.every(isBelowThreshold2)); // Print and Test Every: false.

function isBigEnough(element, index, array) {
	return element >= 10;
}

console.log('myEvery: ')
console.log([12, 5, 8, 130, 44].myEvery(isBigEnough)); // Print and Test myEvery: false.
console.log([12, 54, 18, 130, 44].myEvery(isBigEnough)); // Print and Test myEvery: true.

console.log('Every: ')
console.log([12, 5, 8, 130, 44].every(isBigEnough)); // Print and Test Every: false.
console.log([12, 54, 18, 130, 44].every(isBigEnough)); // Print and Test Every: true.

// Test Reduce
console.log("REDUCE TESTS ---------------------------------------------------------------");
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

if (array1.myReduce(reducer) === array1.reduce(reducer))
	console.log('\x1b[36m%s\x1b[0m', "Test passed! ✔");
else
	console.log("\x1b[31m", "Test failed! X", "\x1b[0m");
if (array1.myReduce(reducer, 5) === array1.reduce(reducer, 5))
	console.log('\x1b[36m%s\x1b[0m', "Test passed! ✔");
else
	console.log("\x1b[31m", "Test failed! X", "\x1b[0m");

// Test Includes
console.log("INCLUDES TESTS -------------------------------------------------------------");
let test = [1, 3, 4, 6];

if (test.myIncludes(7) === test.includes(7))
	console.log('\x1b[36m%s\x1b[0m', "Test passed! ✔");
else
	console.log("\x1b[31m", "Test failed! X", "\x1b[0m");

if (test.myIncludes(6) === test.includes(6))
	console.log('\x1b[36m%s\x1b[0m', "Test passed! ✔");
else
	console.log("\x1b[31m", "Test failed! X", "\x1b[0m");

if (test.myIncludes(0) === test.includes(0))
	console.log('\x1b[36m%s\x1b[0m', "Test passed! ✔");
else
	console.log("\x1b[31m", "Test failed! X", "\x1b[0m");

// Test myIndexOf
let test2 = ["A", "B", "Z", 5, "B", "F", "Z"];
console.log("MYINDEXOF TESTS ------------------------------------------------------------");

if (test2.myIndexOf("J") === test2.indexOf("J"))
	console.log('\x1b[36m%s\x1b[0m', "Test passed! ✔");
else
	console.log("\x1b[31m", "Test failed! X", "\x1b[0m");
if (test2.myIndexOf("B") === test2.indexOf("B"))
	console.log('\x1b[36m%s\x1b[0m', "Test passed! ✔");
else
	console.log("\x1b[31m", "Test failed! X", "\x1b[0m");

// Test Push
console.log("PUSH TESTS -----------------------------------------------------------------");
arrayTest = ["Florence", "Sicily", "Rome", "Kyoto "];
arrayTest.myPush("Miami");
arrayTest.myPush(["New York", "Boston", "Los Angeles"]);

arrayTest2 = ["Florence", "Sicily", "Rome", "Kyoto "];
arrayTest.push("Miami");
arrayTest.push(["New York", "Boston", "Los Angeles"]);

if (arrayTest = arrayTest2)
	console.log('\x1b[36m%s\x1b[0m', "Test passed! ✔");
else
	console.log("\x1b[31m", "Test failed! X", "\x1b[0m");

// Test myLastIndexOf
console.log("MYLASTINDEXOF TESTS --------------------------------------------------------");

if (test2.myLastIndexOf("Z") == test2.lastIndexOf("Z"))
	console.log('\x1b[36m%s\x1b[0m', "Test passed! ✔");
else
	console.log("\x1b[31m", "Test failed! X", "\x1b[0m");

if (test2.myLastIndexOf("B") == test2.lastIndexOf("B"))
	console.log('\x1b[36m%s\x1b[0m', "Test passed! ✔");
else
	console.log("\x1b[31m", "Test failed! X", "\x1b[0m");

if (test2.myLastIndexOf("J") == test2.lastIndexOf("J"))
	console.log('\x1b[36m%s\x1b[0m', "Test passed! ✔");
else
	console.log("\x1b[31m", "Test failed! X", "\x1b[0m");

// Tests Keys
console.log("KEYS TESTS -----------------------------------------------------------------");
const test3 = {
	a: "test1",
	b: "test2",
	c: "test3"
};

let keyarr1 = Object.grabKeys(test3);
let keyarr2 = Object.keys(test3);

let pass = true;
for (let i = 0; i < keyarr1.length; i++) {
	if(keyarr1[i] != keyarr2[i]){
		pass = false;
		break;
	}
}

if (pass)
	console.log('\x1b[36m%s\x1b[0m', "Test passed! ✔");
else
	console.log("\x1b[31m", "Test failed! X", "\x1b[0m");

// Test grab values
console.log("GRAB TESTS -----------------------------------------------------------------");

let valarr1 = Object.grabValues(test3);
let valarr2 = Object.values(test3);

pass = true;
for (let i = 0; i < valarr1.length; i++) {
	if(valarr1[i] != valarr2[i]){
		pass = false;
		break;
	}
}

if (pass)
	console.log('\x1b[36m%s\x1b[0m', "Test passed! ✔");
else
	console.log("\x1b[31m", "Test failed! X", "\x1b[0m");