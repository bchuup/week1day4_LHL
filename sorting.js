//Practice
// var array = [10, 2, 5, 1, 9];

// array.sort(function(a,b){
//   return a - b
// });
// console.log(array)



// ADVANCED SORTING
// SORT BY ALPHABETICAL ORDER, PRIORITIZE AGE IF NAME IS SAME
var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


students.sort(function(a,b){
  if (a.name < b.name) {
    return -1;
  }
  else if (a.name > b.name) {
    return 1;
  }
  else return b.age - a.age   // names are equal
  });
console.log(students)




