var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(obj){
  var sum = Math.pow(obj.x, 2) + Math.pow(obj.y, 2)
  var sqrt = Math.sqrt(sum);
  return sqrt
});


console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);