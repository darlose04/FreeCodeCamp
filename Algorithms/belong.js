/*
  the sort() function sorts the values in arrays as strings.
  If numbers are sorted as strings, "25" is bigger than "100" because "2" is bigger than "1".
  This leads to sort() returning incorrect results when sorting numbers.
  We fix this by providing a compare function: 
    foo.sort(function(a, b) {return a - b}); // can do {return b - a} to sort it descending
*/

// function getIndexToIns(arr, num) {

//   arr.push(num);
//   let sortedArr = arr.sort(function(a, b){return a -b});
//   console.log(sortedArr.indexOf(num));
// }

// getIndexToIns([40, 60], 50);
// getIndexToIns([5, 3, 20, 3], 5);


// More advanced solution

function getIndexToInsAdvanced(arr, num) {
  console.log(arr.concat(num).sort((a, b) => a - b).indexOf(num));
  return arr.concat(num).sort((a, b) => a-b).indexOf(num);

}

getIndexToInsAdvanced([1,5,3,7], 2);

/*
  Explanation:
  - we use method-chaining to invoke one method after another to solve the problem in a single line.
  - First we merge arr and num by invoking the arr.concat(num) method
  - Then we use sort() with the callback arrow function (a, b) => return a - b to sort the numbers in ascending order
  - Lastly, we return the position or index of num in the array with the indexOf() method
  * Look up method-chaining 
  * Method-cahining is a technique that can be used to simplify code in scenarios that involve 
  * calling multiple functions on the same object consecutively. 
   Example of method chaining in jQuery
      //////////////////////////
      // WITHOUT METHOD CHAINING

      var $div = $('#my-div');         // assign to var

      $div.css('background', 'blue');  // set BG
      $div.height(100);                // set height
      $div.fadeIn(200);                // show element


      ///////////////////////
      // WITH METHOD CHAINING

      $('#my-div').css('background', 'blue').height(100).fadeIn(200);

      // often broken to multiple lines:
      $('#my-div')
        .css('background', 'blue')
        .height(100)
        .fadeIn(200);
      */