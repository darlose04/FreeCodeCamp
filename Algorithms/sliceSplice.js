function frankenSplice(arr1, arr2, n) {
  var newArr = arr2.slice();

  for (var i = 0; i < arr1.length; i++) {
    newArr.splice(n, 0, arr1[i]);
    n++;
  }
  console.log(newArr);
  return newArr;
}

frankenSplice([1,2,3], [4,5,6], 1);

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);
