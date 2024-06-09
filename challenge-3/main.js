const str1 = "Chocolate Chip Cookie";

const sanitizeString = (str) =>
  str
    .trim() //remove trailing spaces
    .split(" ") //get an array of each word
    .join("") //put the words together as 1 big word
    .split(""); //get an array of each characters
const getAsciiCode = (str) =>
  str
    .map((char) => char.charCodeAt()) //return the ASCII code of the character
    .join(" "); //return a single word with space between characters

const reverseString = (str) => str.reverse().join("");

const transformString = (str) => {
  let result;

  if (str.length % 15 === 0) {
    const reversedString = reverseString(sanitizeString(str));
    result = getAsciiCode(reversedString.split(""));
  } else if (str.length % 5 === 0) {
    result = getAsciiCode(sanitizeString(str));
  } else if (str.length % 3 === 0) {
    result = reverseString(sanitizeString(str));
  } else {
    return null;
  }

  return result;
};

console.log(transformString("awert"));
