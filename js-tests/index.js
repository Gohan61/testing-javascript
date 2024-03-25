export function capitalize(string) {
  const strArray = string.toLowerCase().split("");
  strArray[0] = strArray[0].toUpperCase();
  return strArray.join("");
}

export function reverseString(string) {
  return string.split("").reverse().join("");
}

export const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

export function caesarCipher(string, key) {
  const plainAlphabet = " .,?!abcdefghijklmnopqrstuvwxyz0123456789";
  let cipherAlphabet = plainAlphabet.split("");
  let keyLetters = undefined;
  key = key % 41;
  if (key < 0) {
    keyLetters = cipherAlphabet.splice(key);
    cipherAlphabet = keyLetters.concat(cipherAlphabet);
  } else {
    keyLetters = cipherAlphabet.splice(0, key);
    cipherAlphabet = cipherAlphabet.concat(keyLetters);
  }

  const cipherString = [];

  string
    .toLowerCase()
    .split("")
    .forEach((element) => {
      let index = plainAlphabet.split("").indexOf(element);
      cipherString.push(cipherAlphabet[index]);
    });

  return cipherString.join("");
}
