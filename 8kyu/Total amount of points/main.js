function points(games) {
  let totalPoints = 0;

  for (let match of games) {
    const [ourScore, opponentScore] = match.split(":").map(Number);
    if (ourScore > opponentScore) {
      totalPoints += 3; // Win
    } else if (ourScore === opponentScore) {
      totalPoints += 1; // Tie
    }
    // No points for a loss (ourScore < opponentScore)
  }

  return totalPoints;
}
