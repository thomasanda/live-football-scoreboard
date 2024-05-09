import Scoreboard from "../src/scoreboard";

describe("Scoreboard", () => {
  test("add new matches to scoreboard", () => {
    const scoreboard = new Scoreboard();
    scoreboard.startMatch("England", "Norway");
    scoreboard.startMatch("Germany", "Spain");
    const matches = scoreboard.getMatches();
    expect(matches.length).toBe(2);
  });
  test("add new matches to scoreboard and update score", () => {
    const scoreboard = new Scoreboard();
    scoreboard.startMatch("England", "Norway");
    const match2 = scoreboard.startMatch("Germany", "Spain");
    match2.updateScore(1, 0);
    match2.updateScore(1, 1);
    const matches = scoreboard.getMatches();
    const expected = "Germany 1 - 1 Spain";
    expect(matches[1].getScore()).toEqual(expected);
  });
  test("remove match from scoreboard", () => {});
});
