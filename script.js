console.log("Script loaded successfully."); /check if the script is loaded/
const frequencyButton = document.getElementById('frequency-button');
const wordFrequencyButton = document.getElementById("words-frequency-button");
const oneLetterButton = document.getElementById("isolate-words-button");
const threeFrequencyButton = document.getElementById("most-frequent-button");
const backToOriginalButton = document.getElementById("back-to-original-button");
const vowelFrequencyButton = document.getElementById("vowel-frequency");

const specialText = document.querySelector(".translate-text p");

const p1 = document.createElement("p1");
const p2 = document.createElement("p2");
const p3 = document.createElement("p3");
const p4 = document.createElement("p4");
const p5 = document.createElement("p5")

frequencyButton.addEventListener('click', function() {
    p1.innerHTML = `
        <span class="normal-font">The frequency of</span> <span class="my-font">E</span> <span class="normal-font">is 28</span><br>
        <span class="normal-font">The frequency of</span> <span class="my-font">T</span> <span class="normal-font">is 27</span><br>
        <span class="normal-font">The frequency of</span> <span class="my-font">S</span> <span class="normal-font">is 25</span><br>
        <span class="normal-font">The frequency of</span> <span class="my-font">A</span> <span class="normal-font">is 21</span><br>
        <span class="normal-font">The frequency of</span> <span class="my-font">H</span> <span class="normal-font">is 18</span><br>
        <span class="normal-font">The frequency of</span> <span class="my-font">I</span> <span class="normal-font">is 17</span><br>
        <span class="normal-font">The frequency of</span> <span class="my-font">L</span> <span class="normal-font">is 16</span><br>
        <span class="normal-font">The frequency of</span> <span class="my-font">G</span> <span class="normal-font">is 13</span><br>
        <span class="normal-font">The frequency of</span> <span class="my-font">N</span> <span class="normal-font">is 12</span><br>
        <span class="normal-font">The frequency of</span> <span class="my-font">O</span> <span class="normal-font">is 8</span><br>
        <span class="normal-font">The frequency of</span> <span class="my-font">U</span> <span class="normal-font">is 8</span><br>
        <span class="normal-font">The frequency of</span> <span class="my-font">K</span> <span class="normal-font">is 7</span><br>
        <span class="normal-font">The frequency of</span> <span class="my-font">Y</span> <span class="normal-font">is 6</span><br>
        <span class="normal-font">The frequency of</span> <span class="my-font">P</span> <span class="normal-font">is 5</span><br>
        <span class="normal-font">The frequency of</span> <span class="my-font">B</span> <span class="normal-font">is 4</span><br>
        <span class="normal-font">The frequency of</span> <span class="my-font">R</span> <span class="normal-font">is 4</span><br>
        <span class="normal-font">The frequency of</span> <span class="my-font">D</span> <span class="normal-font">is 3</span><br>
        <span class="normal-font">The frequency of</span> <span class="my-font">W</span> <span class="normal-font">is 3</span><br>
        <span class="normal-font">The frequency of</span> <span class="my-font">C</span> <span class="normal-font">is 2</span><br>
        <span class="normal-font">The frequency of</span> <span class="my-font">F</span> <span class="normal-font">is 2</span><br>
        <span class="normal-font">The frequency of</span> <span class="my-font">X</span> <span class="normal-font">is 2</span><br>
        <span class="normal-font">The frequency of</span> <span class="my-font">V</span> <span class="normal-font">is 1</span><br>
        <span class="normal-font">The frequency of</span> <span class="my-font">Z</span> <span class="normal-font">is 1</span><br>
        <span class="normal-font">The frequency of</span> <span class="my-font">J</span> <span class="normal-font">is 0</span><br>
        <span class="normal-font">The frequency of</span> <span class="my-font">M</span> <span class="normal-font">is 0</span><br>
        <span class="normal-font">The frequency of</span> <span class="my-font">Q</span> <span class="normal-font">is 0</span><br>
    `; 
    document.querySelector(".translate-text").appendChild(p1);
})

wordFrequencyButton.addEventListener('click', function () {
    p3.innerHTML = `
        <span class="normal-font">Below is a list of all words with a frequency of more than 1.</span><br>
        <span class="normal-font">There are 32 unique words.</span><br>
        <span class="normal-font">The frequency of the word</span> <span class="my-font">the</span> <span class="normal-font">is 6</span><br>
        <span class="normal-font">The frequency of the word</span> <span class="my-font">this</span> <span class="normal-font"> is 5</span><br>
        <span class="normal-font">The frequency of the word</spam> <span class="my-font">is</span> <span class="normal-font">is 4</span><br>
        <span class="normal-font">The frequency of the word</span> <span class="my-font">passkey</span> <span class="normal-font">is 4</span><br>
        <span class="normal-font">The frequency of the word</span> <span class="my-font">language</span> <span class="normal-font">is 3</span><br>
        <span class="normal-font">The frequency of the word</span> <span class="my-font">to</span> <span class="normal-font">is 3</span><br>
        <span class="normal-font">The frequency of the word</span> <span class="my-font">challenge</span> <span class="normal-type">is 2</span><br>
        
    `;
    document.querySelector(".translate-text").appendChild(p3);
})

oneLetterButton.addEventListener('click', function() {
    p4.innerHTML = `
        <span class="normal-font">This the only one 1-letter word:</span> <span class="my-font">a</span> <span class="normal-font">and it translates to A.</span><br>
    `;
    document.querySelector(".translate-text").appendChild(p4);
})

threeFrequencyButton.addEventListener('click', function() {
    p5.innerHTML = `
        <span class="normal-font">The most common 3-letter word is</span> <span class="my-font">the</span> <span class="normal-font">which translates to THE.</span><br>
    `;
    document.querySelector(".translate-text").appendChild(p5);
})

vowelFrequencyButton.addEventListener('click', function() {
    p2.innerHTML = `
        <span class="normal-font">The frequency of</span> <span class="my-font">E</span> <span class="normal-font">is 28</span><br>
        <span class="normal-font">The frequency of</span> <span class="my-font">A</span> <span class="normal-font">is 21</span><br>
        <span class="normal-font">The frequency of</span> <span class="my-font">I</span> <span class="normal-font">is 17</span><br>
        <span class="normal-font">The frequency of</span> <span class="my-font">O</span> <span class="normal-font">is 8</span><br>
        <span class="normal-font">The frequency of</span> <span class="my-font">U</span> <span class="normal-font">is 8</span><br>
    `;
    document.querySelector(".translate-text").appendChild(p2);
})

backToOriginalButton.addEventListener('click', function() {
    const container = document.querySelector(".translate-text");
    [p1,p2,p3,p4].forEach(p => {
        if (container.contains(p)) {
            container.removeChild(p);
        }
    })
})