console.log("Script loaded.");
const frequencyButton = document.getElementById('frequency-button');
const wordFrequencyButton = document.getElementById("words-frequency-button");
const oneLeterButton = document.getElementById("isolate-words-button");
const threeFrequencyButton = document.getElementById("most-frequenct-button");
const vowelFrequencyButton = document.getElementById("vowel-frequency");
const cipherButton = document.getElementById("cipher-hint-button");
const mapButton = document.getElementById("map-hint-button");
const backToOriginalButton = document.getElementById("back-to-original-button");
const translationButton = document.getElementById("translation-button");

const letter = document.createElement("letter");
const word = document.createElement("word");
const one = document.createElement("one");
const three = document.createElement("three");
const vowel = document.createElement("vowel");
const cipher = document.createElement("cipher");
const map = document.createElement("map");
const translation = document.createElement("translation")


backToOriginalButton.addEventListener('click', function() {
    const container = document.querySelector(".translate-text");
    [letter, word, one, three, vowel, cipher, translation].forEach(el => {
        if (container.contains(el)) {
            container.removeChild(el);
        }
    })
    document.getElementById('konigsberg-image').classList.remove('revealed');
})

mapButton.addEventListener('click', function() {
    document.getElementById('konigsberg-image').classList.add('revealed');
})

cipherButton.addEventListener('click', function() {
    cipher.innerHTML = `
        <span class="normal-font">Vigenère: One of the words from the previous passkey</span><br>
        <span class="normal-font">Julius: a -> r</span><br>
    `/*maybe add my font to a - r*/
    document.querySelector(".translate-text").append(cipher)   
})

frequencyButton.addEventListener('click', function() {
    letter.innerHTML = `
        <span class="normal-font">The frequency of H is 22</span><br>
        <span class="normal-font">The frequency of S is 19</span><br>
        <span class="normal-font">The frequency of E is 18</span><br>
        <span class="normal-font">The frequency of X is 12</span><br>
        <span class="normal-font">The frequency of P is 12</span><br>
        <span class="normal-font">The frequency of M is 12</span><br>
        <span class="normal-font">The frequency of R is 11</span><br>
        <span class="normal-font">The frequency of G is 11</span><br>
        <span class="normal-font">The frequency of K is 10</span><br>
        <span class="normal-font">The frequency of W is 9</span><br>
        <span class="normal-font">The frequency of T is 9</span><br>
        <span class="normal-font">The frequency of I is 9</span><br>
        <span class="normal-font">The frequency of D is 9</span><br>
        <span class="normal-font">The frequency of F is 8</span><br>
        <span class="normal-font">The frequency of A is 8</span><br>
        <span class="normal-font">The frequency of O is 7</span><br>
        <span class="normal-font">The frequency of L is 7</span><br>
        <span class="normal-font">The frequency of J is 7</span><br>
        <span class="normal-font">The frequency of Z is 6</span><br>
        <span class="normal-font">The frequency of Q is 6</span><br>
        <span class="normal-font">The frequency of U is 5</span><br>
        <span class="normal-font">The frequency of C is 5</span><br>
        <span class="normal-font">The frequency of V is 4</span><br>
        <span class="normal-font">The frequency of Y is 3</span><br>
        <span class ="normal-font">The frequency of N is 3</span><br>
        <span class="normal-font">The frequency of B is 3</span><br>

    `
    document.querySelector(".translate-text").append(letter)
})

translationButton.addEventListener('click', function() {
//Some text was visual broken up to make it more readable
    translation.innerHTML = `
    <span class="normal-font">Since you unlocked level 2, 
    I hope you have a pretty good understanding of the translations. 
    Here is a gift to reward your efforts!</span><br>
    <span class="normal-font"></span><br>
    <span class="normal-font">Translation Guide: </span><br>
    <span class="my-font">A</span><span class="normal-font">: A</span><br>
    <span class="my-font">B</span><span class="normal-font">: B</span><br>
    <span class="my-font">C</span><span class="normal-font">: C</span><br>
    <span class="my-font">D</span><span class="normal-font">: D</span><br>
    <span class="my-font">E</span><span class="normal-font">: E</span><br>
    <span class="my-font">F</span><span class="normal-font">: F</span><br>
    <span class="my-font">G</span><span class="normal-font">: G</span><br>
    <span class="my-font">H</span><span class="normal-font">: H</span><br>
    <span class="my-font">I</span><span class="normal-font">: I</span><br>
    <span class="my-font">J</span><span class="normal-font">: J</span><br>
    <span class="my-font">K</span><span class="normal-font">: K</span><br>
    <span class="my-font">L</span><span class="normal-font">: L</span><br>
    <span class="my-font">M</span><span class="normal-font">: M</span><br>
    <span class="my-font">N</span><span class="normal-font">: N</span><br>
    <span class="my-font">O</span><span class="normal-font">: O</span><br>
    <span class="my-font">P</span><span class="normal-font">: P</span><br>
    <span class="my-font">Q</span><span class="normal-font">: Q</span><br>
    <span class="my-font">R</span><span class="normal-font">: R</span><br>
    <span class="my-font">S</span><span class="normal-font">: S</span><br>
    <span class="my-font">T</span><span class="normal-font">: T</span><br>
    <span class="my-font">U</span><span class="normal-font">: U</span><br>
    <span class="my-font">V</span><span class="normal-font">: V</span><br>
    <span class="my-font">W</span><span class="normal-font">: W</span><br>
    <span class="my-font">X</span><span class="normal-font">: X</span><br>
    <span class="my-font">Y</span><span class="normal-font">: Y</span><br>
    <span class="my-font">Z</span><span class="normal-font">: Z</span><br>
    `
    document.querySelector(".translate-text").append(translation)
})

/* Finish button functionality*/