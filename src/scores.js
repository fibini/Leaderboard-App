const scores = [
  {
    name: "Name",
    score: "100",
  },
  {
    name: "Name",
    score: "50",
  },
  {
    name: "Name",
    score: "20",
  },
];


export const getScore = () => {
  scores.forEach((score) => {
    const scoreList = `<li class="score-list"><label id="" for="" class="">${score.name}: ${score.score}</label></li>`;
    document.getElementById("leaderboard").innerHTML += scoreList;
  });
};
