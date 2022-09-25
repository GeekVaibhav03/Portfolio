let dynamicText = document.getElementById("dynamic-text");
let phrases = ["Vaibhav Vyas...", "Software Engineer...", "Youtuber...","Gamer..."];
let phraseIndex = 0;
let letterIndex = 0;
let typingSpeed = 100;
let removingSpeed = 70;

function printLetters(phrase){

    if(letterIndex == phrase.length){
        clearLetters();
    }

    else if(letterIndex < phrase.length){
        dynamicText.textContent += phrase.charAt(letterIndex);
        letterIndex +=1;
        setTimeout(() => {
            printLetters(phrase);
        }, typingSpeed);
    }
}
function clearLetters(){
    if(letterIndex == -1){
        phraseIndex = (phraseIndex + 1) % phrases.length;
        letterIndex = 0;
        printLetters(phrases[phraseIndex])
    }
    else if(letterIndex > -1){
        let updatedPhrase = "";
        for(let index = 0; index<letterIndex; index++){
            updatedPhrase += phrases[phraseIndex].charAt(index);
        }
        dynamicText.textContent = updatedPhrase;
        letterIndex -=1;
        setTimeout(clearLetters, removingSpeed);
    }
}

printLetters(phrases[phraseIndex]);