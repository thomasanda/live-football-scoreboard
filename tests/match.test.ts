import Match from "../src/match";

describe("Match", () => {
  test("initialize a match", () => {
    const match = new Match("England", "Spain", 1);
    const expected = "England 0 - 0 Spain";
    expect(match.getScore()).toEqual(expected);
  });
  test("update score", () => {
    const match = new Match("England", "Spain", 1);
    match.updateScore(3, 2);
    const expected = "England 3 - 2 Spain";
    expect(match.getScore()).toEqual(expected);
  });
});
