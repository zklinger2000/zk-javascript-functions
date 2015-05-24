//deep copy function for a generic object
//===========================================================================
function copy(to_copy) {
//===========================================================================
  var copy = Object.create(Object.getPrototypeOf(to_copy));
  var propNames = Object.getOwnPropertyNames(to_copy);

  propNames.forEach(function(name) {
    var desc = Object.getOwnPropertyDescriptor(to_copy, name);
    Object.defineProperty(copy, name, desc);
  });
  return copy;
}
/*
var o1 = { a: 1, b: 2 };
var o2 = copy(o1); // o2 looks like o1 now
*/
/*
var values = {
	name : "Robert",
	age : 33
};

var oneValue = { name : "Zack" };
*/

//===========================================================================
function printValues(arg1) {
//===========================================================================
	var content = "";

	if (arg1.name.length > 0)
		content += ("Name: " + arg1.name + '\n');
	if (arg1.age != undefined)
		content += ("Age: " + arg1.age + '\n');
	return content;
}

//===========================================================================
function printProperty(object, propertyName) {
//===========================================================================
	return object[propertyName];
}

//===========================================================================
function createComparisonFunction(propertyName) {
//===========================================================================
	return function(object1, object2) {
		var value1 = object1[propertyName];
		var value2 = object2[propertyName];

		if (value1 < value2) {
			return -1;
		} else if (value1 > value2) {
			return 1;
		} else {
			return 0;
		}
	};
}

//===========================================================================
function callSomeFunction(someFunction, someArgument) {
//===========================================================================
	return someFunction(someArgument);
}

//===========================================================================
function add10(num1) {
//===========================================================================
	return num1 + 10;
}
/*
var result1 = callSomeFunction(sum, 10);
console.log(result1);
*/
