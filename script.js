console.log("Script loaded successfully."); /check if the script is loaded/
const frequencyButton = document.getElementById('frequency-button');
const lengthButton = document.getElementById("word-lengths-button");
const oneLetterButton = document.getElementById("isolate-words-button");
const threeFrequencyButton = document.getElementById("most-frequent-button");
const backToOriginalButton = document.getElementById("back-to-original-button");
const vowelFrequencyButton = document.getElementById("vowel-frequency");

const specialText = document.querySelector(".translate-text p");



const p = document.createElement("p");

frequencyButton.addEventListener('click', function() {
    p.innerHTML = `
        <span class="normal-font">Number of</span> <span class="my-font">E</span> <span class="normal-font">: 28</span><br>
        <span class="normal-font">Number of</span> <span class="my-font">T</span> <span class="normal-font">: 27</span><br>
        <span class="normal-font">Number of</span> <span class="my-font">S</span> <span class="normal-font">: 25</span><br>
        <span class="normal-font">Number of</span> <span class="my-font">A</span> <span class="normal-font">: 21</span><br>
        <span class="normal-font">Number of</span> <span class="my-font">H</span> <span class="normal-font">: 18</span><br>
        <span class="normal-font">Number of</span> <span class="my-font">I</span> <span class="normal-font">: 17</span><br>
        <span class="normal-font">Number of</span> <span class="my-font">L</span> <span class="normal-font">: 16</span><br>
        <span class="normal-font">Number of</span> <span class="my-font">G</span> <span class="normal-font">: 13</span><br>
        <span class="normal-font">Number of</span> <span class="my-font">N</span> <span class="normal-font">: 12</span><br>
        <span class="normal-font">Number of</span> <span class="my-font">0</span> <span class="normal-font">: 8</span><br>
        <span class="normal-font">Number of</span> <span class="my-font">U</span> <span class="normal-font">: 8</span><br>
        <span class="normal-font">Number of</span> <span class="my-font">K</span> <span class="normal-font">: 7</span><br>
        <span class="normal-font">Number of</span> <span class="my-font">Y</span> <span class="normal-font">: 6</span><br>
        <span class="normal-font">Number of</span> <span class="my-font">P</span> <span class="normal-font">: 5</span><br>
        <span class="normal-font">Number of</span> <span class="my-font">B</span> <span class="normal-font">: 4</span><br>
        <span class="normal-font">Number of</span> <span class="my-font">R</span> <span class="normal-font">: 4</span><br>
        <span class="normal-font">Number of</span> <span class="my-font">D</span> <span class="normal-font">: 3</span><br>
        <span class="normal-font">Number of</span> <span class="my-font">W</span> <span class="normal-font">: 3</span><br>
        <span class="normal-font">Number of</span> <span class="my-font">C</span> <span class="normal-font">: 2</span><br>
        <span class="normal-font">Number of</span> <span class="my-font">F</span> <span class="normal-font">: 2</span><br>
        <span class="normal-font">Number of</span> <span class="my-font">X</span> <span class="normal-font">: 2</span><br>
        <span class="normal-font">Number of</span> <span class="my-font">V</span> <span class="normal-font">: 1</span><br>
        <span class="normal-font">Number of</span> <span class="my-font">Z</span> <span class="normal-font">: 1</span><br>
        <span class="normal-font">Number of</span> <span class="my-font">J</span> <span class="normal-font">: 0</span><br>
        <span class="normal-font">Number of</span> <span class="my-font">M</span> <span class="normal-font">: 0</span><br>
        <span class="normal-font">Number of</span> <span class="my-font">Q</span> <span class="normal-font">: 0</span><br>
    `;
    document.querySelector(".translate-text").appendChild(p);
})

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
    document.querySelector(".translate-text").removeChild(p);
})