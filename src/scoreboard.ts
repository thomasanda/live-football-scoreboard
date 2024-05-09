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

  public getMatches(): Match[] {
    return this.matches;
  }
}

export default Scoreboard;
