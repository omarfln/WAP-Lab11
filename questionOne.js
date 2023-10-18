// Filter even values val%2 === 0
Array.prototype.even = function () {
    return this.filter((num) => num % 2 === 0);
};

// Filter Odd values val%2 !== 0
Array.prototype.odd = function () {
    return this.filter((num) => num % 2 !== 0);
};

// Test the functions with Array [1,2,3,4,5,6,7,8]
let testArray = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(testArray.even()); // [2,4,6,8]
console.log(testArray.odd()); // [1,3,5,7]
  