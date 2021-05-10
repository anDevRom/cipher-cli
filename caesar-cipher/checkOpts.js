const fs = require('fs')

const checkOpts = (action, shift, input, output) => {
    try {
        if (!action || !shift) throw new Error(
            `Missing ${
                !action && !shift ? 'action and shift' : !action ? 'action' : 'shift'
            } argument`
        )

        if (action !== 'decode' && action !== 'encode') throw new Error('Incorrect action argument')

        if (isNaN(shift)) throw new Error('Incorrect shift argument')

        if (input) fs.accessSync(input)
        if (output) fs.accessSync(output)
    } catch (err) {
        process.stderr.write(err.message)
        process.exit(1)
    }
}

module.exports = checkOpts