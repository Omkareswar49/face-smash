const people = ["Arjun", "Diya", "Ravi", "Sneha"];
let currentIndex = 0;

const votes = {};

function showNextPerson() {
  const name = people[currentIndex];
  document.getElementById("person-name").innerText = name;
}

function vote(category) {
  const name = people[currentIndex];
  if (!votes[name]) votes[name] = {};
  votes[name][category] = (votes[name][category] || 0) + 1;

  currentIndex = (currentIndex + 1) % people.length;
  showNextPerson();
  updateLeaderboard();
}

function updateLeaderboard() {
  const leaderboard = document.getElementById("leaderboard");
  leaderboard.innerHTML = "";
  for (let name in votes) {
    const entry = document.createElement("div");
    entry.innerHTML = `<strong>${name}</strong>: ${JSON.stringify(votes[name])}`;
    leaderboard.appendChild(entry);
  }
}

showNextPerson();
