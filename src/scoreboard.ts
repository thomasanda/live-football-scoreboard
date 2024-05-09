import Match from "./match";

class Scoreboard {
  private matches: Match[];

  constructor() {
    this.matches = [];
  }

  public startMatch(homeTeam: string, awayTeam: string): Match {
    const match = new Match(homeTeam, awayTeam);
    this.matches.push(match);
    return match;
  }

  public finishMatch(match: Match): Match[] {
    const index = this.matches.indexOf(match);
    return this.matches.splice(index, 1);
  }

  public getMatchesSummary(): string[] {
    return this.matches
      .sort((a, b) => {
        if (a.getTotalScore() !== b.getTotalScore()) {
          return a.getTotalScore() - b.getTotalScore();
        } else {
          return b.getStartTime().getTime() - a.getStartTime().getTime();
        }
      })
      .map((match) => match.getScore());
  }
}

export default Scoreboard;
