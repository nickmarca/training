function matrixSpiral(n) {
  const spiral = Array.from({ length: n }, () => new Array(n));

  let i = 0;
  let j = 0;
  let value = 1;
  let direction = 'r';

  while (true) {
    spiral[i][j] = value;
    value++; 
    
    if (direction === 'r') {
      if (j < n - 1 && !spiral[i][j + 1]) {
        j++;
      } else if (i < n - 1 && !spiral[i + 1][j]) {
        direction = 'b';
        i++;
      } else {
        break;
      }
    } 
    else if (direction === 'b') {
      if (i < n - 1 && !spiral[i + 1][j]) {
        i++;
      } else if (j > 0 && !spiral[i][j - 1]) {
        direction = 'l';
        j--;
      } else {
        break;
      }
    }
    else if (direction === 'l') {
      if (j > 0 && !spiral[i][j - 1]) {
        j--;
      } else if (i > 0 && !spiral[i - 1][j]) {
        direction = 't';
        i--;
      } else {
        break;
      }
    }
    else if (direction === 't') {
      if (i > 0 && !spiral[i - 1][j]) {
        i--;
      } else if (j < n - 1 && !spiral[i][j + 1]) {
        direction = 'r';
        j++;
      } else {
        break;
      }
    }
  }
  return spiral;
}

module.exports = {
  matrixSpiral,
};