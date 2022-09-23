const { runLengthEncoding } = require("./run-length-encoding");

const tests = [
  {
    input: 'aaaaa',
    output: '5a',
  },
  {
    input: 'aabbcc',
    output: '2a2b2c',
  },
 {
    input: 'abc',
    output: '1a1b1c',
  },
  {
    input: 'baabbacccc',
    output: '1b2a2b1a4c',
  },
];

tests.forEach(({ input, output }, index) => {
  test(`#${index + 1}`, () => {
    expect(runLengthEncoding(input)).toBe(output)
  });
});