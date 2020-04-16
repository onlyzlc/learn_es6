"use strict";

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var newarr = arr.filter(function (item) {
  return item % 2;
});
console.log(newarr);
