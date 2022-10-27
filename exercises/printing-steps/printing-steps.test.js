const { printingSteps } = require("./printing-steps");

describe('printingSteps', () => {
  let consoleSpy;

  beforeAll(() => {
    consoleSpy = jest.spyOn(console, 'log');
  });

  test('n = 3', () => {
    printingSteps(3);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, '#  ');
    expect(consoleSpy).toHaveBeenNthCalledWith(2, '## ');
    expect(consoleSpy).toHaveBeenNthCalledWith(3, '###');
  });
});