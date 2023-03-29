let arr = [2, 5, 11, 42, 69, 0, "go", null];
let even =[];
let odd =[];
let zero =[];
let others =[];
function getQuantity() {
for (let i = 0; i < arr.length; i++) {
   if (typeof arr[i] === "number" && !isNaN(arr[i])) {
    if (arr[i] === 0) {
      zero.push("i")
    } else if (arr[i] % 2 === 0) {
        even.push("i")
      } else {
          odd.push("i")
      }
} else {
    others.push("i")
}
}
}
getQuantity();
console.log("Четные - " + even.length)
console.log("Нечетные - " + odd.length)
console.log("Ноль - " + zero.length)
console.log("Другое - " + others.length)
