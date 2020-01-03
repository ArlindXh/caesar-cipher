import alphabets from "./alphabets.json";

export class Cipher {
  languageNames: Array<string> = Object.keys(alphabets);
  alphabet: Array<Array<string>> = [];
  characters: Array<string> = [];
  languageSelected?: string;
  defaultRegex: RegExp = /([a-z])|(\+)/gi;
  alRegex: RegExp = /(dh|Dh)|(gj|Gj)|(ll|Ll)|(nj|Nj)|(rr|Rr)|(sh|Sh)|(th|Th)|(xh|Xh)|(zh|Zh)|(ë|Ë)|(ç|Ç)|(\+)|([a-z])/gi;

  constructor(language?: string) {
    this.languageSelected = language;
    if (!language) {
      this.alphabet = (alphabets as any)["en"];
    } else if (this.languageNames.indexOf(language) !== -1) {
      this.alphabet = (alphabets as any)[language];
    } else {
      throw new Error("Wrong language input.")
    }
  }

  private getCharacterPositions(text: string) {
    this.characters = this.destructureText(text);
    let characterPositions: Array<Object | string> = [];
    this.characters.map((character) => {
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
    if (!shiftLength || shiftLength > this.alphabet.length) {
      throw new Error(`Maximum shift length is: ${this.alphabet.length}`)
    }
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

  private destructureText(text: string) {
    let newText: string = text.replace(/\s+/g, "+")
    let destrucuredText: any;
    if (this.languageSelected === "sq") {
      destrucuredText = newText.match(this.alRegex);
    } else {
      destrucuredText = newText.match(this.defaultRegex);
    }
    return destrucuredText;
  }

  encrypt(text: string, shiftLength: number) {
    try {
      const charPositions = this.getCharacterPositions(text);
      return this.alteredString(charPositions, shiftLength, true);
    } catch (err) {
      throw new Error(`Unable to encrypt message. ${err.message}`)
    }
  }

  decrypt(text: string, shiftLength: number) {
    try {
      const charPositions = this.getCharacterPositions(text);
      return this.alteredString(charPositions, shiftLength, false);
    } catch (err) {
      throw new Error(`Unable to decrypt message. ${err.message}`)
    }
  }
};