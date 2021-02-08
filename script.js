//'use strict';

var scores, roundScore, activePlayer, dice, canIplay;
const maxtowin = 20;


const init = () => {
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    canIplay = true;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#score--1').innerHTML = 0;
    document.querySelector('#score--0').innerHTML = 0;
    document.querySelector('#current--0').innerHTML = 0;
    document.querySelector('#current--1').innerHTML = 0;
    document.querySelector('#name--1').textContent = 'Player 2';
    document.querySelector('#name--0').textContent = 'Player 1';
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--winner');
    document.querySelector('.player--0').classList.add('player--active');
    
}


init();

const nextPlayer = () => {
    activePlayer === 1 ? activePlayer = 0 : activePlayer = 1 ;
        roundScore = 0;

        document.querySelector('#current--0').innerHTML = 0;
        document.querySelector('#current--1').innerHTML = 0;

        document.querySelector('.player--0').classList.toggle('player--active');
        document.querySelector('.player--1').classList.toggle('player--active');

}

var rollbtn = document.querySelector('.btn--roll');
var holdbtn = document.querySelector('.btn--hold');
var newbtn  = document.querySelector('.btn--new');


const rollclick = (e) => {

    if(canIplay) {
        nerd = Math.floor(Math.random()*6) + 1;

        const dicDom = document.querySelector('.dice');
        dicDom.style.display = 'block';
        dicDom.setAttribute('src',`dice-${nerd}.png`);

        if (nerd != 1){
            roundScore += nerd;
            document.querySelector(`#current--${activePlayer}`).innerHTML =  roundScore ;
        }else{
            nextPlayer();
        }
    }

    
    
}

const holdclick = (e) => {

    if(canIplay) {
        // add the score to the var
        scores[activePlayer] += roundScore;

        //add the score to the page
        document.querySelector(`#score--${activePlayer}`).innerHTML = scores[activePlayer];

        //check if the player winn the game
        if(scores[activePlayer] >= maxtowin) {
            document.querySelector(`#name--${activePlayer}`).textContent = 'winner';   
            
            document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');

            document.querySelector('.dice').style.display = 'none';
            canIplay = false;
        }else {
            // set the current to the zero
            nextPlayer();
        }
    }

   
   
}

 

rollbtn.addEventListener('click',rollclick);
holdbtn.addEventListener('click',holdclick);
newbtn.addEventListener('click',init);