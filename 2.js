let _true = "Простое число";
let _false = "Составное число";
function simpleNumber(n) {
   if (n === 2) {
     return _true;
   }
   else if (n > 2 && n < 1000) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return _false;
      }
      else {
        return _true;
      }
    }
   }
   else {
    console.log('Данные неверны')
  }
}
console.log(simpleNumber(37))
