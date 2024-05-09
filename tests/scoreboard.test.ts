import Scoreboard from "../src/scoreboard";

describe("Scoreboard", () => {
  test("add new matches to scoreboard", () => {
    const scoreboard = new Scoreboard();
    scoreboard.startMatch("England", "Norway");
    scoreboard.startMatch("Germany", "Spain");
    const matches = scoreboard.getMatchesSummary();
    expect(matches.length).toBe(2);
  });

  test("add new matches to scoreboard and update score", () => {
    const scoreboard = new Scoreboard();
    const match1 = scoreboard.startMatch("England", "Norway");
    const match2 = scoreboard.startMatch("Germany", "Spain");
    match1.updateScore(1, 4);
    match2.updateScore(0, 1);
    match2.updateScore(1, 1);
    match2.updateScore(2, 1);
    match2.updateScore(3, 1);
    match2.updateScore(4, 1);
    const matches = scoreboard.getMatchesSummary();
    const expected = ["England 1 - 4 Norway", "Germany 4 - 1 Spain"];
    expect(matches).toEqual(expected);
  });

  test("remove match from scoreboard", () => {
    const scoreboard = new Scoreboard();
    const match = scoreboard.startMatch("Brann", "Viking");
    scoreboard.startMatch("Haugesund", "Lillestrøm");
    scoreboard.startMatch("Rosenborg", "Start");
    scoreboard.finishMatch(match);
    const matches = scoreboard.getMatchesSummary();
    expect(matches.length).toBe(2);
  });
});
