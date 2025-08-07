function binaryToDecimal(binStr) {
  let decimal = 0;
  for (let i = 0; i < binStr.length; i++) {
    decimal = decimal * 2 + Number(binStr[i]);
  }
  return decimal;
}

console.log("Decimal:", binaryToDecimal("1010")); // Output: 10
