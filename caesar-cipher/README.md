# CIPHER-CLI
## Installation
1. Install [NodeJS](https://nodejs.org/en/)
2. Install [Git](https://git-scm.com/)
3. Clone repository in your directory, for that enter this command in terminal:
   
    >git clone https://github.com/anDevRom/cipher-cli.git -b task-1/caesar-cipher
   > 
4. Enter this command for change directory:
    
    >cd andevrom-NODEJS2021Q2/caesar-cipher
   > 
5. Enter this command for install packages:

    >npm i
   > 
Now you can use Cipher-CLI

## Description
This tool has 4 options:
1.   <b>Action (encode/decode)</b> - type of action, this option is required
2.   <b>Shift (number)</b> - rate of shift (you can use positive and negative integers), this option is required
3.   <b>Input (path)</b> - you can enter input file path
4.   <b>Output (path)</b> - you can enter output file path

### Action (required)
*   You must enter in command line - <i>encode</i>(for encoding) or <i>decode</i>(for decoding)
*   This option pass into with using flags <i>--action</i> or <i>-a</i> 

Usage example:

    --action encode

or

    -a decode

### Shift (required)
*   You must enter in commandline positive or negative integer
*   This option pass into with using flags <i>--shift</i> or <i>-s</i>

Usage example:

    --shift 7

or

    -s -5
   
### Input
*   You can enter path for the file with text for coding
*   Or you can do not enter path, in this case you enter symbols with using commandline
*   This option pass into with using flags <i>--input</i> or <i>-i</i>

Usage example:

    --input "./input.txt"

or

    -i "./someText.txt"

### Output
*   You can enter path for the file for result of coding
*   Or you can do not enter path, in this case result output in commandline
*   This option pass into with using flags <i>--output</i> or <i>-o</i>

Usage example:

    --output "./output.txt"

or

    -o "./result.txt"

## Examples
*   With all arguments:


    node app -a encode -s 7 -i "./input.txt" -o "./output.txt"

*   With only required arguments:


    node app --action decode --shift -1
