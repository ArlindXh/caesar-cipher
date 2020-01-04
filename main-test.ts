import { Cipher } from "./main";
import { expect } from "chai";

describe("English encryption function", () => {
  it("should return an encrypted string", () => {
    const cipher = new Cipher();
    const firstResult = cipher.encrypt("Hello World!", 3);
    const secondResult = cipher.encrypt("Should you attack now?", 5);
    const thirdResult = cipher.encrypt("I'm encrypting!!", 4)
    expect(firstResult).to.equal("Khoor Zruog!");
    expect(secondResult).to.equal("Xmtzqi dtz fyyfhp stb?");
    expect(thirdResult).to.equal("M'q irgvctxmrk!!");
  });
});

describe("English decryption function", () => {
  it("should return a decrypted string", () => {
    const cipher = new Cipher();
    const firstResult = cipher.decrypt("Khoor Zruog!", 3);
    const secondResult = cipher.decrypt("Xmtzqi dtz fyyfhp stb?", 5);
    const thirdResult = cipher.decrypt("M'q irgvctxmrk!!", 4)
    expect(firstResult).to.equal("Hello World!");
    expect(secondResult).to.equal("Should you attack now?");
    expect(thirdResult).to.equal("I'm encrypting!!");

  });
});

