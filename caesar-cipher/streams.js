const { createReadStream, createWriteStream } = require('fs')
const { Transform } = require('stream')
const cipher = require('./cipher')

const decoder = new TextDecoder()
const encoder = new TextEncoder()

class Crypt extends Transform {
    constructor(shift, type) {
        super();
        this.shift = shift
        this.type = type
    }

    _transform(chunk, encoding, callback) {
        const shift = this.type === 'encode' ? +this.shift : -this.shift

        const result = cipher(decoder.decode(chunk), shift);

        callback(null, encoder.encode(result));
    }
}

module.exports = {
    createReadStream(input) {
        return input ? createReadStream(input) : process.stdin
    },

    createTransformStream(shift, type) {
        return new Crypt(shift, type)
    },

    createWriteStream(output) {
        return output ? createWriteStream(output, {encoding: 'utf-8', flags: 'a'}) : process.stdout
    }
}