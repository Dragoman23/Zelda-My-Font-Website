console.log("Script loaded successfully.");
const frequencyButton = document.getElementById('frequency-button');
const lengthButton = document.getElementById("word-lengths-button");
const oneLetterButton = document.getElementById("isolate-words-button");
const threeFrequencyButton = document.getElementById("most-frequent-button");
const backToOriginalButton = document.getElementById("back-to-original-button");

const specialText = document.querySelector(".translate-text p");


frequencyButton.addEventListener('click', function() {
    specialText.textContent = "Frequency";
    specialText.className = "container";
});

lengthButton.addEventListener('click', function () {
    specialText.textContent = "Word Frequency";
    specialText.className = "container";
})

oneLetterButton.addEventListener('click', function() {
    specialText.textContent = "Isolate Words";
    specialText.className = "container";
})

threeFrequencyButton.addEventListener('click', function() {
    specialText.textContent = "Most Frequent 3-Letter Words";  
    specialText.className = "container";
})

backToOriginalButton.addEventListener('click', function() {
    specialText.textContent = "This language is written in the Zelda-based language of the Sheikah. This is a challenge to translate this language. By solving this challenge you will get the passkey to go to the next website. The passkey is Glskh huk Spur, but that is not all. Using this passkey text, find the real passkey.";
    specialText.className = "my-font";
})