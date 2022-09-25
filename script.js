let dynamicText = document.getElementById("dynamic-text");
let phrases = ["Vaibhav Vyas...", "Software Engineer...", "Youtuber...","Gamer..."];
let phraseIndex = 0;
let letterIndex = 0;
let typingSpeed = 150;
let removingSpeed = 100;

function printLetters(phrase){
    if(letterIndex < phrase.length){
        dynamicText.textContent += phrase.charAt(letterIndex);
        letterIndex +=1;
        setTimeout(() => {
            printLetters(phrase);
        }, typingSpeed);
    }
}

printLetters(phrases[0]);