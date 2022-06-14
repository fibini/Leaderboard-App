const scores = [
  {
    name: 'Name',
    score: '100',
  },
  {
    name: 'Name',
    score: '50',
  },
  {
    name: 'Name',
    score: '20',
  },
];

const getScore = () => {
  scores.forEach((score) => {
    const scoreList = `<li class="score-list"><label id="label" for="score" class="score-slot">${score.name}: ${score.score}</label></li>`;
    document.getElementById('leaderboard').innerHTML += scoreList;
  });
};
export default getScore();
