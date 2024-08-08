function analyzeSentence(sentence) {
    
    let lengthCounter = 0;
    let wordCounter = 0;
    let vowelCounter = 0;

    
    const vowels = 'aeiouAEIOU';



    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];

        if (char === '.') {
            break;  // End of sentence
        }

     
        lengthCounter++;

     
        if (vowels.includes(char)) {
            vowelCounter++;
        }

     
        if (char === ' ') {
            if (inWord) {
                wordCounter++;
                inWord = false;
            }
        } else {
            inWord = true;
        }
    }


    if (inWord) {
        wordCounter++;
    }

    return {
        length: lengthCounter,
        words: wordCounter,
        vowels: vowelCounter
    };
}


const sentence = "This is an example sentence.";
const result = analyzeSentence(sentence);
console.log(`Length of sentence: ${result.length}`);
console.log(`Number of words: ${result.words}`);
console.log(`Number of vowels: ${result.vowels}`);
