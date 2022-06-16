const getScore = (name, score) => {
  const scoreList = `<li class="score-list"><label id="label" for="score" class="score-slot">${name}: ${score}</label></li>`;
  document.getElementById('leaderboard').innerHTML += scoreList;
};
export default getScore;
