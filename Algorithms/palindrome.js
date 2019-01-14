// Simple solution

function palindrome(str) {
    return str.replace(/[\W_]/g, '').toLowerCase() === str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
}

/*
Code Explanation:
    We start by using regular expressions to replace any white space or
    non-alphanumeric characters with nothing (or null), which essentially
    removes them from the string.

    Next we chain .toLowerCase() to remove any capital letteres because
    A is a different character than a. The problem did not ask us to worry about
    making sure the case of the characters was identical, just the spelling.

    Our next step is to take our string and .split() it, .reverse() it, and
    finally .join() it back together.

    Last step is to check that the string is the same forwards and backwards
    and return our result.
*/

// Intermediate solution

// function palindrome(str) {
//     str = str.toLowerCase().replace(/[\W_]/g, '');
//     for (var i = 0, len = str.length - 1; i < len/2; i++) {
//         if (str[i] !== str[len-1]) {
//             return false;
//         }
//     }
//     return true;
// }

/*
Code Explanation:
    We start by using the same methods of replacing characters we don't want
    in the string using RegEx's, regular expressions, and then make our string
    lowercase.

    Next we set up our for loop and declare an index i to keep track of the
    loop. We set our escape sequence to when i is greater than the length of
    the string divided by two, which tells the loop to stop after the halfway
    point of the string. And, finally we set i to increment after every loop.

    Inside of each loop we want to check that the letter in the element [i] is
    equal to the letter in the length of the string minus i, [str.length - 1].
    Each loop, the element that is checked on both sides of the string moves
    closer to the center until we have checked all of the letters. If at any
    point the letters do not match, we return false. If the loop completes
    successfully, it means we have a palindrome and therefore we return true.
*/

// Advanced solution (most performant)
// this solution performs at minimum 7x better, at maximum infinitely better.

// function palindrome(str) {
//     // assign a front and a back pointer
//     let front = 0;
//     let back = str.length - 1;

//     // back and front pointers won't always meet in the middle, so use (back > front)
//     while (back > front) {
//         //increments front pointer if current character doesn't meet criteria
//         while (str[front].match(/[\W_]/)) {
//             front++;
//             continue;
//         }
//         // decrements back pointer if current character doesn't meet criteria
//         while (str[back].match(/[\W_]/)) {
//             back--;
//             continue;
//         }
//     // finally does the comparison on the current characters
//     if (str[front].toLowerCase() !== str[back].toLowercase()) return false
//     front++;
//     back--;
//     }
//     //if the whole string has been compared without returning false, it's a palindrome
//     return true;
// }
console.log(palindrome("artful"))
/*
Code Explanation:
    The simple solution would take much too long if given a very long string.
    This is because it operates on the whole string multiple times
    (toLowerCase(), replace(), split(), reverse(), join()) before comparing
    the whole string twice.

    The beauty of this solution is it never needs to read through the whole
    string, even once, to know that it's not a palindrome. Why read through
    the whole string if you can tell that it's not a palindrome just by looking
    at two letters?

    Uses a while loop for best practice - because we are using two variables,
    one is the index starting from the beginning of the string and the other
    starts at the end of the string.

    Links:
    Cyclomatic_complexity
        https://en.wikipedia.org/wiki/Cyclomatic_complexity
    Divide_and_conquer_algorithm
        https://en.wikipedia.org/wiki/Divide_and_conquer_algorithm
*/
