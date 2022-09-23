function balancedBrackets(str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
      const current = str[i];
      if (!stack.length && isClosingBrackets(current)) {
          return false;
      }
      if (stack.length && isClosingBrackets(current)) {
          const [head, ...rest] = stack;
          const closingBracketsMatch = getClosingBrackets(head);
          if (current === closingBracketsMatch) {
              stack = rest;
          }
          else {
              return false;
          }
      }
      else if (isOpeningBrackets(current)) {
          stack = [current, ...stack];
      }
  }
  return !stack.length;
}
function isOpeningBrackets(str) {
  return ['[', '{', '('].includes(str);
}
function isClosingBrackets(str) {
  return [']', '}', ')'].includes(str);
}
function getClosingBrackets(str) {
  switch (str) {
      case '{':
          return '}';
      case '[':
          return ']';
      case '(':
          return ')';
      default:
          throw Error('Unknown opening bracket');
  }
}

const res = balancedBrackets('([])(){}(())()()');
console.log(res);