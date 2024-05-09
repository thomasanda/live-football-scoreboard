import Match from "../src/match";

describe("Match", () => {
  test("initialize a match", () => {
    const match = new Match("England", "Spain");
    const expected = "England 0 - 0 Spain";
    expect(match.getScore()).toEqual(expected);
  });
  test("update score", () => {
    const match = new Match("England", "Spain");
    match.updateScore(3, 2);
    match.updateScore(4, 2);
    const expected = "England 4 - 2 Spain";
    expect(match.getScore()).toEqual(expected);
  });
});
