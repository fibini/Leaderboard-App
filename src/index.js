import './style.css';
import getScore from './scores.js';

const refresh = document.querySelector('.refresh');
const submit = document.querySelector('.submit');
const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');

const newGame = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
    {
      method: 'POST',
      body: JSON.stringify({
        name: 'chess',
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const id = await response.json();
  return id;
  // console.log(id)
};
newGame();

const sendData = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/5kwd9qE46jjunPWk6sVg/scores',
    {
      method: 'POST',
      body: JSON.stringify({
        user: nameInput.value,
        score: scoreInput.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const dataSent = await response.json();
  return dataSent;
};

submit.addEventListener('submit', sendData);

const receiveData = async () => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/5kwd9qE46jjunPWk6sVg/scores',
    {
      method: 'GET',
      header: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  const gameScore = await response.json();
  getScore(nameInput.value, scoreInput.value);
  return gameScore;
};

refresh.addEventListener('click', receiveData);
