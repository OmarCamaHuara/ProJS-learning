const morseCodeMap = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.',
    'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---',
    'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--',
    'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
    '9': '----.', ' ': '/'
};

function textToMorse(chunk) {
    if (typeof chunk !== 'string') {
        throw new TypeError('The input must be a string');
    }
    return chunk.toUpperCase().split('').map(character => {
        return morseCodeMap[character] || '';
    }).join(' ');
}

function convertToMorse(chunk){
    try {
        const morseText = textToMorse(chunk);
        return morseText;
    } catch (error) {
        console.error(error.message)
    }
    
}

module.exports = convertToMorse;
