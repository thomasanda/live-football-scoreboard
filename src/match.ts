class Match {
  private homeTeam: string;
  private awayTeam: string;
  private homeScore: number;
  private awayScore: number;

  constructor(homeTeam: string, awayTeam: string) {
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.homeScore = 0;
    this.awayScore = 0;
  }

  public getScore(): string {
    return `${this.homeTeam} ${this.homeScore} - ${this.awayScore} ${this.awayTeam}`;
  }

  public updateScore(homeScore: number, awayScore: number): void {
    this.homeScore = homeScore;
    this.awayScore = awayScore;
  }
}

export default Match;
