// ie. "Found Waldo at index 3!".
// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "Waldo") {
      var position = i + 1;
      found(position);   // execute callback
    }
  }
}

function actionWhenFound(position) {
  console.log("Found Waldo at index:", position);
}

findWaldo(["Alice", "Bob", "Harry", "Waldo", "Winston"], actionWhenFound);