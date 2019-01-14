function mutation(arr) {
  let indexZero = arr[0].toLowerCase().split("");
  let indexOne = arr[1].toLowerCase().split("");
  // console.log(indexZero);
  // console.log(indexOne);

  for (var i = 0; i < indexOne.length; i++) {
    // console.log(indexOne[i]);
    // console.log(indexZero.indexOf(indexOne[i]));
    if (indexZero.indexOf(indexOne[i]) === -1) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}

mutation(["hello", "hey"]);
mutation(["hello", "gello"]);

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);

// Intermediate Solution

function mutationInt(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function(letter) {
      return arr[0].toLowerCase().indexOf(letter) != -1;
    });
}

/* 
  Explanation:
    Grab the second string, lowercase and turn it into an array; then make sure every one
    of its letters is a part of the lowercased first string.

    Every will basically give you letter by letter to compare, which we do by using indexOf
    on the first string. indexOf will give you -1 if the current letter is missing. We check
    that not to be the case, for if this happens even once, every will be false.

*/

mutationInt(["hello", "hey"]);
mutationInt(["hello", "gello"]);

mutationInt(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
