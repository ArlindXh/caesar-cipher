import Cipher from "./main";
import { expect } from "chai";

describe("Encryption function", () => {
  it("should return an encrypted string", () => {
    const cipher = new Cipher();
    const firstResult = cipher.encrypt("hello world", 3);
    const secondResult = cipher.encrypt("you should attack now", 5);
    expect(firstResult).to.equal("khoor zruog");
    expect(secondResult).to.equal("dtz xmtzqi fyyfhp stb");
  });
});

describe("Decryption function", () => {
  it("should return a decrypted string", () => {
    const cipher = new Cipher();
    const firstResult = cipher.decrypt("khoor zruog", 3);
    const secondResult = cipher.decrypt("dtz xmtzqi fyyfhp stb", 5);
    expect(firstResult).to.equal("hello world");
    expect(secondResult).to.equal("you should attack now");
  });
});
