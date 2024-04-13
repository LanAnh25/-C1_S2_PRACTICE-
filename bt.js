// let numbers = [1, 2, 3, 4, 5];
// numbers.push(6);
// console.log(numbers);

// let numbers = [1,2,3,4,5];
// numbers.forEach(function(element){
//     console.log(element);
// });

//  let numbers = [1,2,3,4,5];
//  let elementIndex = numbers[2];
//  console.log(elementIndex);

// let numbers = [1,2,3,4,5];
// numbers.splice(2,1);
// console.log(numbers);

// let numbers = [1,2,3,4,5];
// let filterNumbers = numbers.filter(function(number){
//     return number % 2 !==0;
// });
// console.log(filterNumbers);

let numbers = [1,2,3,4,5];
let squareNumbers = numbers.map(function(number){
    return number * number;
});
console.log(squareNumbers);
