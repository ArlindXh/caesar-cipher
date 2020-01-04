import { en } from "./alphabet.json";

export class Cipher {
  alphabet: Array<Array<string>> = en;
  characters: Array<string> = [];
  defaultRegex: RegExp = /([a-z])|(\+)|[^A-Za-z]/gi;
  nonAlphabetChars: RegExp = /[^A-Za-z|+]+/g;

  private getCharacterPositions(text: string) {
    this.characters = this.destructureText(text);
    let characterPositions: Array<Object | string> = [];
    this.characters.map((character: any) => {
      this.alphabet.map((c, i) => {
        if (character === c[0]) {
          characterPositions = [...characterPositions, { position: i, index: 0 }];
        } else if (character === c[1]) {
          characterPositions = [...characterPositions, { position: i, index: 1 }];
        } else if (character === "+" && characterPositions[characterPositions.length - 1] !== "+") {
          characterPositions = [...characterPositions, character];
        } else if (this.nonAlphabetChars.test(character)) {
          characterPositions = [...characterPositions, character];
          character = undefined;
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
        }
        else if (typeof char === "string" && char.match(this.nonAlphabetChars)) {
          newString = newString + char;
        } else {
          newString = newString + this.alphabet[char.position + shiftLength][char.index];
        }
      });
    }
    else {
      charPositions.map((char) => {
        if (char === "+") {
          newString = newString + " ";
        } else if (char.position - shiftLength < 0) {
          remainderLength = char.position - shiftLength + this.alphabet.length;
          newString = newString + this.alphabet[remainderLength][char.index];
        } else if (typeof char === "string" && char.match(this.nonAlphabetChars)) {
          newString = newString + char;
        } else {
          newString = newString + this.alphabet[char.position - shiftLength][char.index];
        }
      });
    }

    return newString;
  }

  private destructureText(text: string) {
    let newText: string = text.replace(/\s+/g, "+")
    let destructuredText: any = newText.match(this.defaultRegex);
    return destructuredText;
  }

  private validateParameters(text: string, shiftLength: number) {
    if (!text) {
      throw new Error("Text is required.")
    }
    if (typeof text !== "string") {
      throw new Error("Text should be a string.")
    }
    if (typeof shiftLength !== "number") {
      throw new Error("Shift length should be a number.")
    }
    if (!shiftLength && shiftLength !== 0) {
      throw new Error("Shift length is required.")
    }
    if (shiftLength <= 0 || shiftLength > this.alphabet.length) {
      throw new Error(`Shift length should be between : 1-${this.alphabet.length}.`)
    }
  }

  encrypt(text: string, shiftLength: number) {
    try {
      this.validateParameters(text, shiftLength)
      const charPositions = this.getCharacterPositions(text);
      return this.alteredString(charPositions, shiftLength, true);
    } catch (err) {
      throw new Error(`Unable to encrypt message. ${err.message}`)
    }
  }

  decrypt(text: string, shiftLength: number) {
    try {
      this.validateParameters(text, shiftLength)
      const charPositions = this.getCharacterPositions(text);
      return this.alteredString(charPositions, shiftLength, false);
    } catch (err) {
      throw new Error(`Unable to decrypt message. ${err.message}`)
    }
  }
};