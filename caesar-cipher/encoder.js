const ALPHABET_LENGTH = 26
const UPPERCASE_START = 65
const UPPERCASE_END = 90
const LOWERCASE_START = 97
const LOWERCASE_END = 122

const encoder = (text, shift) => {
    const symbols = text.split('')

    const result = symbols.map(symbol => {
        const symbCode = symbol.charCodeAt(0)

        if (
            !(UPPERCASE_START <= symbCode && symbCode <= UPPERCASE_END) &&
            !(LOWERCASE_START <= symbCode && symbCode <= LOWERCASE_END)
        ) return symbol

        const range = UPPERCASE_START <= symbCode && symbCode <= UPPERCASE_END ?
            {
                start: UPPERCASE_START,
                end: UPPERCASE_END
            } :
            {
                start: LOWERCASE_START,
                end: LOWERCASE_END
            }

        if (shift >= 0) {
            return String.fromCharCode(range.start + (symbCode - range.start + shift) % ALPHABET_LENGTH)
        } else {
            return String.fromCharCode(range.end + (symbCode - range.end + shift) % ALPHABET_LENGTH)
        }
    })

    return result.join('')
}

module.exports = encoder