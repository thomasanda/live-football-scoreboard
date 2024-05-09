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

  public finishMatch(match: Match): void {
    const index = this.matches.indexOf(match);
    console.log(index);
  }

  public getMatches(): Match[] {
    return this.matches;
  }
}

export default Scoreboard;
