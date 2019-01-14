function titleCase(str) {
  var arr = str.split(" ");
  var capitalized = [];

  for (var i = 0; i < arr.length; i++) {
    capitalized.push(arr[i][0].toUpperCase() + arr[i].slice(1).toLowerCase());
  }
  console.log(capitalized.join(" "));
  return capitalized.join(" ");
}

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT");
