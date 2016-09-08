//UNIQUE ID
var id = (function () {
  var counter = -1;
    return function (){
      counter += 1;
      return counter;
    }
})() ;
// console.log(id()); // 0
// console.log(id()); // 1
// console.log(id()); // 2
// console.log(id()); // 3

// LOADED DIE
var loadedDie = (function () {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var i = -1
  return function (){
    i += 1;
    return list[i];
  }
})();
// console.log(loadedDie());  // 5
// console.log(loadedDie());  // 4
// console.log(loadedDie());  // 6


// COUNTDOWN
var countdownGenerator = function (x) {
  console.log(x);
  return function (){
    x -= 1
    if (x > 0){
      console.log(x);
      return x;
    }
      else if (x === 0){
        x = "Blast off!"
        console.log(x);
        return x;
    }
      else {
        x = "Rockets already gone, bub!"
        console.log(x);
        return x;
    }
  }
};

// // console.log(countdownGenerator(3));
// var countdown = countdownGenerator(3);
// // // console.log(typeof(countdown))
var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!





