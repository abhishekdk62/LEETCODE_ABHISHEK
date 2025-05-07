/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let rvrsed = s.split(" ").reverse();
  let arr = [];
  rvrsed.map((val) => {
    if (val != "") {
      arr.push(val);
    }
  });
  return arr.join(" ");
};
