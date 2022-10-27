function printingSteps (n) {
  for (let i = 0; i < n; i++) {
    let str = Array.from({ length: n }, (_, idx) => idx <= i ? '#' : ' ').join('');  
    console.log(str);
  }
};

module.exports = {
  printingSteps,
};