import { MatchReader } from './MatchReader';
import { MatchResult } from './MatchResult';

const matches = new MatchReader('football.csv');
matches.read();

let manUtdWins = 0;

for (let match of matches.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUtdWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUtdWins++;
  }
}
console.log(`Man United won ${manUtdWins} games`);
console.log(matches.data);
