function pyramid(n) {
  const j = (n * 2) - 1;
  const m = Math.floor(j / 2);

  for (let i = 0; i <= m; i++) {
    let pL = m - i;
    let pR = m + i; 
    
    const str = Array.from({ length: j }, (_, idx) => (idx >= pL && idx <= pR) ? '#' : ' ').join('');
    console.log(str);
  } 
}

module.exports = {
  pyramid,
};