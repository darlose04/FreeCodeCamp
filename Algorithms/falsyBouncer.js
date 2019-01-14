function bouncer(arr) {
  let truthyArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      truthyArr.push(arr[i]);
    }
  }
  console.log(truthyArr);
  return truthyArr;
}

bouncer([7, "ate", "", false, 9]);
bouncer(["a", "b", "c"]);
bouncer([false, null, 0, NaN, undefined, ""]);
bouncer([1, null, NaN, 2, undefined]);

/* advanced solution

  function bouncer(arr) {
    return arr.filter(Boolean);
  }

  Explanation:
    The Array.prototype.filter method expects a function that returns a Boolean value which takes
    a single argument and returns true for truthy value or false for falsy value. Hence we pass the built-in Boolean function.
*/