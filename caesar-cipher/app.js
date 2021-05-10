const { Command } = require('commander')
const path = require('path')
const streams = require('./streams')
const checkOpts = require('./checkOpts')

const program = new Command()

program
    .option('-a, --action <type>', 'Choose action type')
    .option('-s, --shift <number>', 'Enter shift number')
    .option('-i, --input <file>', 'Enter input file name')
    .option('-o, --output <file>', 'Enter output file name')
    .parse(process.argv)

const action = program.opts().action
const shift = program.opts().shift
const input = program.opts().input ? path.resolve(program.opts().input) : ''
const output = program.opts().output ? path.resolve(program.opts().output): ''

checkOpts(action, shift, input, output)

const readStream = streams.createReadStream(input)
const transformStream = streams.createTransformStream(shift, action)
const writeStream = streams.createWriteStream(output)

readStream.pipe(transformStream).pipe(writeStream)