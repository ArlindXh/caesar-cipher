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
  "k",
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
  let string = "luva";
  console.log("initial string: ", string);
  const ciphredString = cypher(string, 6);
  console.log("ciphered string: ", ciphredString);
  const deciphredString = decypher(ciphredString, 6);
  console.log("deciphered string: ", deciphredString);
}

function cypher(string, shiftLength) {
  let splittedString = string.split("");
  let characterPositions = [];

  splittedString.map(character => {
    characters.map((c, i) => {
      if (c === character) {
        characterPositions = [...characterPositions, i];
      }
    });
  });
  return cypheredString(characterPositions, characters, shiftLength);
}

function cypheredString(positions, characters, shiftLength) {
  let remainderLength;
  let cypheredString = "";
  positions.map(pos => {
    if (pos + shiftLength > characters.length - 1) {
      remainderLength = pos + shiftLength - characters.length;
      cypheredString = cypheredString + characters[remainderLength];
    } else {
      cypheredString = cypheredString + characters[pos + shiftLength];
    }
  });

  return cypheredString;
}

function decypher(string, shiftLength) {
  let splittedString = string.split("");
  let characterPositions = [];

  splittedString.map(character => {
    characters.map((c, i) => {
      if (c === character) {
        characterPositions = [...characterPositions, i];
      }
    });
  });
  return decypheredString(characterPositions, characters, shiftLength);
}

function decypheredString(positions, characters, shiftLength) {
  let remainderLength;
  let decypheredString = "";
  positions.map(pos => {
    if (pos - shiftLength < 0) {
      remainderLength = pos - shiftLength + characters.length;
      decypheredString = decypheredString + characters[remainderLength];
    } else {
      decypheredString = decypheredString + characters[pos - shiftLength];
    }
  });

  return decypheredString;
}
main();
