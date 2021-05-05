const { Command } = require('commander')
const program = new Command()

program
    .option('-a, --action <type>', 'Choose action type')
    .option('-s, --shift <number>', 'Enter shift number')
    .option('-i, --input <file-name>', 'Enter input file name')
    .option('-o, --output <file-name>', 'Enter output file name')
    .parse(process.argv)

