function findElement(arr, func) {
  let num = 0;

  for (var i = 0; i <= arr.length; i++) {
		num = arr[i];
		if (func(num)) {
			console.log(num);
			return num;
		}
  }
	
	return undefined;
}

findElement([1,2,3,4], num => num % 2 === 0);

/* 
Code explanation: 
	-challenge asks us to look through the array, which is done using the for loop
	-the num variable is being passed into the function so we set it to each index in our array
	-the pre-defined function already checks each number for us, so if it is "true" we return that num
	-if none of the numbers in the array pass the function's test, we return undefined
*/
