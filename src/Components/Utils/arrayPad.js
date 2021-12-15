export const pad = (num, width, z) => {
  let zeroCount = z || '0';
  let numDigit = num + '';

  return numDigit.length >= width ? numDigit : new Array(width - numDigit.length + 1).join(zeroCount) + numDigit;
};

export default pad;
