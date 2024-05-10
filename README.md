# Live Football World Cup Scoreboard Library

This is a TypeScript library for managing a live football World Cup scoreboard. It allows you to start matches, update scores, finish matches, and get a summary of matches in progress.

# Setup

1. Clone the repository:

`git clone https://github.com/thomasanda/live-football-scoreboard.git`

2. Navigate to the project directory:

`cd live-football-scoreboard`

3. Install dependencies:

`npm install`

4. Run the tests:

`npm test`

# Usage:

```TypeScript
import { Scoreboard } from 'live-football-scoreboard';

// Create a new scoreboard
const scoreboard = new Scoreboard();

// Start a match
const match1 = scoreboard.startMatch('Home Team 1', 'Away Team 1', 1);
const match2 = scoreboard.startMatch('Home Team 2', 'Away Team 2', 2);

// Update scores
match1.updateScore(2, 1);
match2.updateScore(3, 2);

// Finish a match
scoreboard.finishMatch(match1);

// Get matches summary
const summary = scoreboard.getMatchesSummary();
console.log(summary);
```


