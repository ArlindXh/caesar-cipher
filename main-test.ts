import { Cipher } from "./main";
import { expect } from "chai";

describe("English encryption function", () => {
  it("should return an encrypted string using the english alphabet", () => {
    const cipher = new Cipher("en");
    const firstResult = cipher.encrypt("Hello World", 3);
    const secondResult = cipher.encrypt("you should attack now", 5);

    expect(firstResult).to.equal("Khoor Zruog");
    expect(secondResult).to.equal("dtz xmtzqi fyyfhp stb");
  });
});

describe("English decryption function", () => {
  it("should return a decrypted string", () => {
    const cipher = new Cipher();
    const firstResult = cipher.decrypt("Khoor Zruog", 3);
    const secondResult = cipher.decrypt("dtz xmtzqi fyyfhp stb", 5);
    expect(firstResult).to.equal("Hello World");
    expect(secondResult).to.equal("you should attack now");
  });
});

describe("Albanian encryption function", () => {
  it("should return an encrypted string using the albanian alphabet", () => {
    const cipher = new Cipher("sq");
    const firstResult = cipher.encrypt("Pershendetje botë", 5);
    const secondResult = cipher.encrypt("Çupëz e bukur", 2);
    expect(firstResult).to.equal("Shhthxhrghxhnh esxhi");
    expect(secondResult).to.equal("Dhxrga f çxllxs");
  });
});

