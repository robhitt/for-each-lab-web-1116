// Define a function, iterativeLog(), that accepts an array. Call .forEach() on this array, and inside the callback, log each element with the format ${index}: ${element}.

function iterativeLog(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`)
  })
}

// Define a function, iterate, that accepts a callback. Within the iterate() function, you should initialize an array — it can contain anything you want. Call .forEach() on this array, passing the callback to .forEach(). Then return the array that you initialized.

function iterate( callback ) {
  var newArr = ["hi", "bye"]

  newArr.forEach(callback)

  return newArr
}

// Define a function, doToArray that accepts an array and a callback. Call .forEach() on the array, passing the callback as the forEach callback.

function doToArray(array, callback) {
  array.forEach(callback)
}
