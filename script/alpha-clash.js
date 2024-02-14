function continueGame(){
    const alphabet = getARandomAlphabet();
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    setBackgroundColorById(alphabet);
}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame()
}
