function chunkArrayInGroups(arr, size) {
  let newArr = [];

  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }

  console.log(newArr);
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);

/*
  Explanation:
    - First, we create an empty array where we will store our chunks
    - The for loop starts at zero, increments by size each time through the loop, and 
      stops when it reaches arr.length
    - Note that this for loop does not loop through arr. Instead, we are using the loop
      to generate numbers we can use as indices to slice the array in the right locations.
    - Inside our loop, we create each chunk using arr.slice(i, i+size), and add this value
      to newArr with newArr.push()
    - Finally, we return the value of newArr.
*/

// Could also use a while loop with a variable i, an empty array, and incrementing i by i+=size