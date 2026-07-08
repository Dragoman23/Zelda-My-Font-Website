console.log("Script loaded.");
const frequencyButton = document.getElementById('frequency-button');
const wordFrequencyButton = document.getElementById("words-frequency-button");
const oneLeterButton = document.getElementById("isolate-words-button");
const threeFrequencyButton = document.getElementById("most-frequenct-button");
const vowelFrequencyButton = document.getElementById("vowel-frequency");
const cipherButton = document.getElementById("cipher-hint-button");
const mapButton = document.getElementById("map-hint-button");
const backToOriginalButton = document.getElementById("back-to-original-button");

const letter = document.createElement("letter");
const word = document.createElement("word");
const one = document.createElement("one");
const three = document.createElement("three");
const vowel = document.createElement("vowel");
const cipher = document.createElement("cipher");
const map = document.createElement("map");


backToOriginalButton.addEventListener('click', function() {
    const container = document.querySelector(".translate-text");
    [letter, word, one, three, vowel, cipher].forEach(el => {
        if (container.contains(el)) {
            container.removeChild(el);
        }
    })
    document.getElementById('konigsberg-image').classList.remove('revealed');
})

mapButton.addEventListener('click', function() {
    document.getElementById('konigsberg-image').classList.add('revealed');
})

/* Finish button functionality*/