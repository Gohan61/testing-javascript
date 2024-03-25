export function capitalize(string) {
  const strArray = string.toLowerCase().split("");
  strArray[0] = strArray[0].toUpperCase();
  return strArray.join("");
}
