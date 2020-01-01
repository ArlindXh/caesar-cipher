export class Cipher {
  private alphabet: Array<string> = [
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
    let characters: Array<string | number> = newString.split("");
    let characterPositions: Array<string | number> = [];
    characters.map((character) => {
      this.alphabet.map((c, i) => {
        if (character === "+" && characterPositions[characterPositions.length - 1] !== "+") {
          characterPositions = [...characterPositions, character];
        } else if (c === character) {
          characterPositions = [...characterPositions, i];
        }
      });
    });
    return characterPositions;
  }

  private alteredString(charPositions: Array<any>, shiftLength: number, positiveShift: Boolean) {
    let remainderLength: number;
    let newString = "";
    if (positiveShift) {
      charPositions.map((pos) => {
        if (pos === "+") {
          newString = newString + " ";
        } else if (pos + shiftLength > this.alphabet.length - 1) {
          remainderLength = pos + shiftLength - this.alphabet.length;
          newString = newString + this.alphabet[remainderLength];
        } else {
          newString = newString + this.alphabet[pos + shiftLength];
        }
      });
    } else {
      charPositions.map((pos) => {
        if (pos === "+") {
          newString = newString + " ";
        } else if (pos - shiftLength < 0) {
          remainderLength = pos - shiftLength + this.alphabet.length;
          newString = newString + this.alphabet[remainderLength];
        } else {
          newString = newString + this.alphabet[pos - shiftLength];
        }
      });
    }

    return newString;
  }

  encrypt(text: String, shiftLength: number) {
    const charPositions = this.getCharacterPositions(text);
    return this.alteredString(charPositions, shiftLength, true);
  }

  decrypt(text: String, shiftLength: number) {
    const charPositions = this.getCharacterPositions(text);
    return this.alteredString(charPositions, shiftLength, false);
  }
}
