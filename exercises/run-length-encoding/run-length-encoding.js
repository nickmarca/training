// aabbcc
// aaaaa

function runLengthEncoding(str) {
  let counter = 1;
  let encoded = "";

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      counter++;
    } else {
      encoded += String(counter) + str[i - 1];
      counter = 1;
    }
  }

  encoded += String(counter) + str[str.length - 1];
  return encoded;
}

module.exports = {
  runLengthEncoding,
};