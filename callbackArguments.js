// forEach exercise

// ie. "Found Waldo at index 3!".
// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(name, index){
    if (name == "Waldo"){
      found(index)
    }
  })
}
function actionWhenFound(index) {
  console.log("Found Waldo at index:", index)
}

findWaldo(["Alice", "Bob", "Harry", "Waldo", "Winston"], actionWhenFound);