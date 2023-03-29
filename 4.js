function showNumbers(a, b) {
  let i = a;
  const interval = setInterval(function() {
    console.log(i);
    i += 1;
    if (i > b) {
      clearInterval(interval)
    }
  }, 1000);
}
showNumbers(2, 7)
