function titleCase(str) {
    var lowerArr = str.toLowerCase().split(" ");
    var ans = lowerArr.map(function(val) {
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });

    return ans.join(" ");
}
    
console.log(titleCase("I'm a little teapot"));

/*
Code Explanation:
    We are making the entire string lowercase and then converting it into an array. 
    Then we are using the map function to replace the lowercase character with uppercase.
    Finally, we are returning the string using the join() method.
*/