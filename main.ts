export default class Cipher {
  private characters: Array<string> = [
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
    "z",
  ];

  private getCharacterPositions(text: String) {
    let newString: String = text.replace(/\s+/g, "+");
    let splittedString: Array<string | number> = newString.split("");
    let characterPositions: Array<string | number> = [];
    splittedString.map((character) => {
      this.characters.map((c, i) => {
        if (character === "+" && characterPositions[characterPositions.length - 1] !== "+") {
          characterPositions = [...characterPositions, character];
        } else if (c === character) {
          characterPositions = [...characterPositions, i];
        }
      });
    });
    return characterPositions;
  }

  private alteredString(positions: Array<any>, shiftLength: number, positiveShift: Boolean) {
    let remainderLength: number;
    let newString = "";
    if (positiveShift) {
      positions.map((pos) => {
        if (pos === "+") {
          newString = newString + " ";
        } else if (pos + shiftLength > this.characters.length - 1) {
          remainderLength = pos + shiftLength - this.characters.length;
          newString = newString + this.characters[remainderLength];
        } else {
          newString = newString + this.characters[pos + shiftLength];
        }
      });
    } else {
      positions.map((pos) => {
        if (pos === "+") {
          newString = newString + " ";
        } else if (pos - shiftLength < 0) {
          remainderLength = pos - shiftLength + this.characters.length;
          newString = newString + this.characters[remainderLength];
        } else {
          newString = newString + this.characters[pos - shiftLength];
        }
      });
    }

    return newString;
  }

  encrypt(text: String, shiftLength: number) {
    const charPosArray = this.getCharacterPositions(text);
    return this.alteredString(charPosArray, shiftLength, true);
  }

  decrypt(text: String, shiftLength: number) {
    const charPosArray = this.getCharacterPositions(text);
    return this.alteredString(charPosArray, shiftLength, false);
  }
}
