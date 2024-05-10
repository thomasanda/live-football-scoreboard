class Match {
  private homeTeam: string;
  private awayTeam: string;
  private homeScore: number;
  private awayScore: number;
  private totalScore: number;
  private id: number;

  constructor(homeTeam: string, awayTeam: string, id: number) {
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.homeScore = 0;
    this.awayScore = 0;
    this.totalScore = 0;
    this.id = id;
  }

  public getScore(): string {
    return `${this.homeTeam} ${this.homeScore} - ${this.awayScore} ${this.awayTeam}`;
  }

  public updateScore(homeScore: number, awayScore: number): void {
    this.homeScore = homeScore;
    this.awayScore = awayScore;
    this.totalScore = homeScore + awayScore;
  }

  public getTotalScore(): number {
    return this.totalScore;
  }

  public getId(): number {
    return this.id;
  }

  public getHomeTeam(): string {
    return this.homeTeam;
  }

  public getAwayTeam(): string {
    return this.awayTeam;
  }
}

export default Match;
