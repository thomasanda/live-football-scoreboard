import Match from "./match";

class Scoreboard {
  private matches: Match[];

  constructor() {
    this.matches = [];
  }

  public startMatch(homeTeam: string, awayTeam: string, id: number): Match {
    const isHomeTeamPlaying = this.matches.some(
      (match) => match.getHomeTeam() === homeTeam,
    );
    const isAwayTeamPlaying = this.matches.some(
      (match) => match.getAwayTeam() === awayTeam,
    );

    const match = new Match(homeTeam, awayTeam, id);
    if (isHomeTeamPlaying || isAwayTeamPlaying) {
      console.log`Unable to start match. ${isHomeTeamPlaying ? homeTeam : awayTeam} is already playing.`;
    } else {
      this.matches.push(match);
    }
    return match;
  }

  public finishMatch(match: Match): Match[] {
    const index = this.matches.indexOf(match);
    if (index !== -1) {
      return this.matches.splice(index, 1);
    }
    return this.matches;
  }

  public getMatchesSummary(): string[] {
    return this.matches
      .sort((a, b) => {
        if (a.getTotalScore() !== b.getTotalScore()) {
          return b.getTotalScore() - a.getTotalScore();
        } else {
          return b.getId() - a.getId();
        }
      })
      .map((match) => match.getScore());
  }
}

export default Scoreboard;
