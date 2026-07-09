console.log("Script loaded.");
const frequencyButton = document.getElementById('frequency-button');
const cipherLengthButton = document.getElementById("cipher-length");
const cipherButton = document.getElementById("cipher-hint-button");
const mapButton = document.getElementById("map-hint-button");
const backToOriginalButton = document.getElementById("back-to-original-button");
const translationButton = document.getElementById("translation-button");
const groupingButton = document.getElementById("grouping");
const normalizeButton = document.getElementById("full-translate");
const coincidenceButton = document.getElementById("coincidence");
const kasiskiButton = document.getElementById("kasiski");

const letter = document.createElement("letter");
const length = document.createElement("length");
const cipher = document.createElement("cipher");
const translation = document.createElement("translation");
const normalize = document.createElement("normalize");
const coincidence = document.createElement("coincidence");
const swapText = document.querySelector(".translate-text p.my-font");
const swap = document.createElement("swap");
const originalText = swapText.innerHTML;
const kasiski = document.createElement("kasiski");

const inputField = document.getElementById("user-guess");
const feedbackMessage = document.getElementById("guess-feedback");

kasiskiButton.addEventListener('click', function() {
    kasiski.innerHTML = `
    <span class="normal-font"></span><br>
    <span class="normal-font">One way we can find the length of the key is finding repeating letter seqeunces.</span><br>
    <span class="normal-font">Identical sequences of 3 or more letters that appear multiple times in the ciphertext(after we remove spaces and puncuation) can help us find the length of the key.</span><br>
    <span class="normal-font">By finding the distances between these repeating sequences, we can start to find possible key lengths.</span><br>
    <span class="normal-font">Given you distances, find all the factors(divisors) and the key length is likely one of these factors, starting with the most common one.</span><br>
    <span class="normal-font"></span><br>
    <span class="normal-font">Now please don't use any of the other cipher hints because they would tell you too much. Something I can tell you is the key is somewhere in this website. Also Julius....(It will become clear eventually)</span><br>
    <span class="normal-font"></span><br>
    <span class="normal-font">Here are some confirmed patterns to get you started and we have removed the puncation and spaces from the text for you!(Ignore the spaces, they are for readability)</span><br>
    <span class="normal-font">MYJTG: Positions 11 and 76, PER: Positions 83 and 192</span><br>
    <span class="normal-font">There are two more patterns hiding somewhere in this text.</span><br>
    <span class="normal-font"></span><br>
    `

    swapText.innerHTML = `

    <span class="my-font"> F s z g j n f r h t s m y j t g v z x g 
    g x s h f h v d w c g e w o e m k p e u
    s x s l s n r p z i k p m h a a m e k a
    q h p u I e c z x a q i c h a c m y j t
    g m d p e r w l j e h x x h a m w j r u 
    f s e w h q s f j h s l p f i o l p u b
    t x e k a s m d q o s m e L t h w x d t
    g x t p e m s h G o d w e k e m e x h V
    k g g l r h r r d b d p w Z e k p s h h
    z h l p a o e y g s n q p e r h h r h s 
    S i w o m d x s h f k o e i d u s q k i 
    r t c r b k i x S v i j t H f</span>
    `
    document.querySelector(".translate-text").append(kasiski);
})

backToOriginalButton.addEventListener('click', function() {
    const container = document.querySelector(".translate-text");
    [letter, length, cipher, translation,swap, normalize, kasiski].forEach(el => {
        if (container.contains(el)) {
            container.removeChild(el);
        }
    });
    document.getElementById('konigsberg-image').classList.remove('revealed');
    document.getElementById('secret-text').classList.remove('revealed');

    swapText.classList.remove('normal-font');
    swapText.classList.add('my-font');
    swapText.innerHTML = originalText;
});

coincidenceButton.addEventListener('click', function() {
    coincidence.innerHTML= `
    <span class="normal-font"></span><br>
    <span class="normal-font">One way to find the key length is to use the Index of Coincidence(IC).</span><br>
    <span class="normal-font">For normal English the IC is around 0.0667 (6.67%).</span><br>
    <span class="normal-font">Take every 2nd letter of the text and put it into a group. Calculate the IC of that group, and if it isn't close to 0.0667, 2 is wrong, so move on to 3 and etc.</span><br>
    <span class="normal-font">Once you find the correct length, your data will spike.</span><br>
    <span class="normal-font"></span><br>
    <span class="normal-font">Now please don't use the cipher or cipher length hint, because it would tell you too much.</span><br>
    <span class="normal-font">Since you can't use the cipher hint, let me just say Julius...(It will become clear eventually)</span><br>
    <span class="normal-font">Also, look around the website for possible keys....</span><br>
    <span class="normal-font"></span><br>
    <span class="normal-font">Have fun calculating!</span><br>
    
    <span class="normal-font">To calculate the IC use the following formula: </span><br>

    <pre style="font-family: monospace; font-size: 16px; background-color: #000; padding: 5px; border-radius: 5px; line-height: 1.4; margin: 0;">
=======================================================
INDEX OF COINCIDENCE (IC) FORMULA
=======================================================
       Σ [ f_i * (f_i - 1) ]
IC = -----------------------
            N * (N - 1)

SYMBOL DESCRIPTIONS:
- IC  : The Index of Coincidence value.
- Σ   : The sum total calculated across all 26 letters (A-Z).
- f_i : The frequency (count) of an individual letter 'i'.
- N   : The total number of alphabetic letters in the text.
=======================================================
    </pre>
    `;
    coincidence.style.fontSize = "30px";
    document.querySelector(".translate-text").append(coincidence);
})

normalizeButton.addEventListener('click', function() {
    document.getElementById('secret-text').classList.add('revealed');

    swapText.classList.remove('my-font');
    swapText.classList.add('normal-font');

    swapText.querySelectorAll('.my-font').forEach(el => {
        el.classList.remove("my-font");
        el.classList.add("normal-font");
    })


})

mapButton.addEventListener('click', function() {
    document.getElementById('konigsberg-image').classList.add('revealed');
});

cipherButton.addEventListener('click', function() {
    cipher.innerHTML = `
        <span class="normal-font"></span><br>
        <span class="normal-font">Vigenère: One of the words from the previous passkey</span><br>
        <span class="normal-font"></span><br>
        <span class="normal-font">Julius: a -> r</span><br
        <span class="normal-font"></span><br>>
    `/*maybe add my font to a - r*/
    document.querySelector(".translate-text").append(cipher)   
});

frequencyButton.addEventListener('click', function() {
    letter.innerHTML = `
        <span class="normal-font"></span><br>
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
        <span class="normal-font">The frequency of N is 3</span><br>
        <span class="normal-font">The frequency of B is 3</span><br>
        <span class="normal-font"></span><br>
    `
    document.querySelector(".translate-text").append(letter)
});

cipherLengthButton.addEventListener('click', function() {
    length.innerHTML=`
    <span class="normal-font"></span><br>
    <span class="normal-font">The length of the V cipher is 5. Look around the website for possible keys...</span><br>
    <span class="normal-font"></span><br>
    <span class="normal-font">Now please don't use the cipher hint, because it would tell you too much.</span><br>
    <span class="normal-font">Since you can't use the cipher hints, let me just say Julius...(It will become clear eventually)</span><br>
    <span class="normal-font"></span><br>
    <span class="normal-font">Now get to grouping!!!</span><br>
    <span class="normal-font"></span><br>
    `
    document.querySelector(".translate-text").append(length)
})

translationButton.addEventListener('click', function() {
//Some text was visual broken up to make it more readable
    translation.innerHTML = `
    <span class="normal-font"></span><br>
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
    <span class="normal-font"></span><br>
    `
    document.querySelector(".translate-text").append(translation)
});

groupingButton.addEventListener('click', function() {
    swapText.innerHTML = `
    <span class="my-font">|FSZGJ|NFRHT|SMYJT|GVZXG|GXSHF|HVDWC|GEWOE|MKPEU|SXSLS|NRPZI|
KPMHA|AMEKA|QHPUI|ECZXA|QICHA|CMYJT|GMDPE|RWLJE|HXXHA|MWJRU|
FSEWH|QSFJH|SLPFI|OLPUB|TXEKA|SMDQO|SMELT|HWXDT|GXTPE|MSHGO|
DWEKE|MEXHV|KGGLR|HRRDB|DPWZE|KPSHH|ZHLPA|OEYGS|NQPER|HHRHS|
SIWOM|DXSHF|KOEID|USQKI|RTCRB|KIXSV|IJTHF|</span>
`
    swap.innerHTML =`
    <span class="normal-font"></span><br>
    <span class="normal-font">Look at just the first letter of every group!</span><br>
    <span class="normal-font">Columns......</span><br>
    <span class="normal-font"></span><br>
    `

    document.querySelector(".translate-text").append(swap)
});

inputField.addEventListener('keydown', function(event) {

    if(event.key==='Enter') {

        const userGuess = inputField.value.trim();

        const correctPasskey = "No";

        if (userGuess === correctPasskey) {
            feedbackMessage.textContent = "Correct! You have completed the puzzle...";
            feedbackMessage.className = "feedback-message show correct";

            setTimeout(() => {
                window.location.href = "challenge1.html";
            }, 1200); 
        } else {
            feedbackMessage.textContent = "Wrong Passkey. Look at the text, hints, and ciphers again.";
            feedbackMessage.className = "feedback-message show wrong";
            inputField.value = "";

        }
    }
})