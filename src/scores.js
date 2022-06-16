// const scores = [
//   {
//     name: 'Name',
//     score: '100',
//   },
//   {
//     name: 'Name',
//     score: '50',
//   },
//   {
//     name: 'Name',
//     score: '20',
//   },
//   {
//     name: 'Name',
//     score: '40',
//   },
// ];

const getScore = (name, score) => {
  const scoreList = `<li class="score-list"><label id="label" for="score" class="score-slot">${name}: ${score}</label></li>`;
  document.getElementById('leaderboard').innerHTML += scoreList;
};
export default getScore;
