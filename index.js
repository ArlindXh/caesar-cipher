const characters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

function main() {
  let string = "shka je bre tu folen";
  console.log("initial string: ", string);
  const ciphredString = cipher(string, 3);
  console.log("ciphered string: ", ciphredString);
  const deciphredString = decipher(ciphredString, 3);
  console.log("deciphered string: ", deciphredString);
}

function cipher(string, shiftLength) {
  const characterPositions = getCharacterPositions(string);
  return alteredString(characterPositions, characters, shiftLength, true);
}

function decipher(stringy, shiftLength) {
  const characterPositions = getCharacterPositions(stringy);

  return alteredString(characterPositions, characters, shiftLength, false);
}

function getCharacterPositions(string) {
  let newString = string.replace(/\s+/g, "+");
  let splittedString = newString.split("");
  let characterPositions = [];
  splittedString.map((character, index) => {
    characters.map((c, i) => {
      if (
        character === "+" &&
        characterPositions[characterPositions.length - 1] !== "+"
      ) {
        characterPositions = [...characterPositions, character];
      } else if (c === character) {
        characterPositions = [...characterPositions, i];
      }
    });
  });
  return characterPositions;
}
function alteredString(positions, characters, shiftLength, positiveShift) {
  let remainderLength;
  let newString = "";
  if (positiveShift) {
    positions.map(pos => {
      if (pos === "+") {
        newString = newString + " ";
      } else if (pos + shiftLength > characters.length - 1) {
        remainderLength = pos + shiftLength - characters.length;
        newString = newString + characters[remainderLength];
      } else {
        newString = newString + characters[pos + shiftLength];
      }
    });
  } else {
    positions.map(pos => {
      if (pos === "+") {
        newString = newString + " ";
      } else if (pos - shiftLength < 0) {
        remainderLength = pos - shiftLength + characters.length;
        newString = newString + characters[remainderLength];
      } else {
        newString = newString + characters[pos - shiftLength];
      }
    });
  }

  return newString;
}

main();
