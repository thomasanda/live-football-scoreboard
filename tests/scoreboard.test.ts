import Scoreboard from "../src/scoreboard";

describe("Scoreboard", () => {
  test("add new matches to scoreboard", () => {
    const scoreboard = new Scoreboard();
    scoreboard.startMatch("England", "Norway", 1);
    scoreboard.startMatch("Germany", "Spain", 2);
    const matches = scoreboard.getMatchesSummary();
    expect(matches.length).toBe(2);
  });

  test("add new matches to scoreboard and update score", () => {
    const scoreboard = new Scoreboard();
    const match1 = scoreboard.startMatch("England", "Norway", 1);
    const match2 = scoreboard.startMatch("Germany", "Spain", 2);
    match1.updateScore(1, 4);
    match2.updateScore(0, 1);
    match2.updateScore(1, 1);
    match2.updateScore(2, 1);
    match2.updateScore(3, 1);
    match2.updateScore(4, 1);
    const matches = scoreboard.getMatchesSummary();
    const expected = ["Germany 4 - 1 Spain", "England 1 - 4 Norway"];
    expect(matches).toEqual(expected);
  });

  test("remove match from scoreboard", () => {
    const scoreboard = new Scoreboard();
    const match = scoreboard.startMatch("Brann", "Viking", 1);
    scoreboard.startMatch("Haugesund", "Lillestrøm", 2);
    scoreboard.startMatch("Rosenborg", "Start", 3);
    scoreboard.finishMatch(match);
    const matches = scoreboard.getMatchesSummary();
    const expected = ["Rosenborg 0 - 0 Start", "Haugesund 0 - 0 Lillestrøm"];
    expect(matches).toEqual(expected);
  });

  test("sorts matches correctly", () => {
    const scoreboard = new Scoreboard();
    const match1 = scoreboard.startMatch("Manchester United", "Liverpool", 1);
    const match2 = scoreboard.startMatch("Arsenal", "Tottenham", 2);
    const match3 = scoreboard.startMatch("Lyn", "KFUM", 3);
    const match4 = scoreboard.startMatch("Manchester City", "Luton", 4);
    match1.updateScore(2, 4);
    match2.updateScore(2, 2);
    match3.updateScore(4, 0);
    match4.updateScore(3, 3);
    const matches = scoreboard.getMatchesSummary();
    const expected = [
      "Manchester City 3 - 3 Luton",
      "Manchester United 2 - 4 Liverpool",
      "Lyn 4 - 0 KFUM",
      "Arsenal 2 - 2 Tottenham",
    ];
    expect(matches).toEqual(expected);
  });
});
