class TextEncoder {
  constructor(encoding) {
    this.encoding = encoding;
  }
  encode(string) {
    return new Uint8Array(new Buffer(string, this.encoding));
  }
}
module.exports = TextEncoder;
