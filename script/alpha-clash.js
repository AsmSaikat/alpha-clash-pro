
function handleKeyboardButtonKeyUpEvent(event){
    const playerPressed = event.key;
    if (playerPressed === 'Escape'){
        gameOver();
    }


    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();


    if (playerPressed === expectedAlphabet) {
        removeBackgroundColorById(expectedAlphabet);
        const currentScoreElement = document.getElementById('current-score');
        const currentScore = currentScoreElement.innerText;
        const newScore = parseInt(currentScore) + 1;
        currentScoreElement.innerText = newScore;
        continueGame();
    }
    else{
        const currentLife = document.getElementById('life-point');
        const newLife = parseInt(currentLife.innerText) - 1;
        currentLife.innerText = newLife;

        if (newLife === 0) {
           gameOver();
        }
    }
}


document.addEventListener('keyup', handleKeyboardButtonKeyUpEvent);


function continueGame(){
    const alphabet = getARandomAlphabet();
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');
    setTextElementValueById('life-point', 5);
    setTextElementValueById('current-score', 0);
    continueGame()
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    
    const lastScore = getTextElementValueById('current-score');
    console.log((lastScore));

    setTextElementValueById('your-score', lastScore);

    const currentAlphabet = getElementTextValueById('current-alphabet');
    removeBackgroundColorById(currentAlphabet)


}
