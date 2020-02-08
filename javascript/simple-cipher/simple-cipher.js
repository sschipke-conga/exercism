//
// This is only a SKELETON file for the 'Simple Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Cipher {
  constructor() {
    this.alphabet = [
      'a', 'b', 'c', 'd', 'e', 'f',
      'g', 'h', 'i', 'j', 'k', 'l',
      'm', 'n', 'o', 'p', 'q', 'r',
      's', 't', 'u', 'v', 'w', 'x',
      'y', 'z'
    ]
    this.key = ''
  }

  encode(message) {
    this.key = message
    console.log(message)
    message.toLowerCase().split()
    for (let char of message) {
      const i = this.alphabet.findIndex(char)
      char = this.alphabet[i+1]
    }
    message.join()
    console.log(message)
    return message
  }

  decode() {
    throw new Error("Remove this statement and implement this function");
  }

  getkey(letters) {
    this.key = letters
  }
}
