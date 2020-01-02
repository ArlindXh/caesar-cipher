export class Cipher {
  private alphabet: Array<Array<string>> = [
    ["a", "A"],
    ["b", "B"],
    ["c", "C"],
    ["d", "D"],
    ["e", "E"],
    ["f", "F"],
    ["g", "G"],
    ["h", "H"],
    ["i", "I"],
    ["j", "J"],
    ["k", "K"],
    ["l", "L"],
    ["m", "M"],
    ["n", "N"],
    ["o", "O"],
    ["p", "P"],
    ["q", "Q"],
    ["r", "R"],
    ["s", "S"],
    ["t", "T"],
    ["u", "U"],
    ["v", "V"],
    ["w", "W"],
    ["x", "X"],
    ["y", "Y"],
    ["z", "Z"],
  ];
  private getCharacterPositions(text: String) {
    let newString: String = text.replace(/\s+/g, "+");
    let characters: Array<string | number> = newString.split("");
    let characterPositions: Array<Object | string> = [];
    characters.map((character) => {
      this.alphabet.map((c, i) => {
        if (character === "+" && characterPositions[characterPositions.length - 1] !== "+") {
          characterPositions = [...characterPositions, character];
        } else if (character === c[0]) {
          characterPositions = [...characterPositions, { position: i, index: 0 }];
        } else if (character === c[1]) {
          characterPositions = [...characterPositions, { position: i, index: 1 }];
        }
      });
    });
    return characterPositions;
  }

  private alteredString(charPositions: Array<any>, shiftLength: number, positiveShift: Boolean) {
    let remainderLength: number;
    let newString = "";
    if (positiveShift) {
      charPositions.map((char) => {
        if (char === "+") {
          newString = newString + " ";
        } else if (char.position + shiftLength > this.alphabet.length - 1) {
          remainderLength = char.position + shiftLength - this.alphabet.length;
          newString = newString + this.alphabet[remainderLength][char.index];
        } else {
          newString = newString + this.alphabet[char.position + shiftLength][char.index];
        }
      });
    } else {
      charPositions.map((char) => {
        if (char === "+") {
          newString = newString + " ";
        } else if (char.position - shiftLength < 0) {
          remainderLength = char.position - shiftLength + this.alphabet.length;
          newString = newString + this.alphabet[remainderLength][char.index];
        } else {
          newString = newString + this.alphabet[char.position - shiftLength][char.index];
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
