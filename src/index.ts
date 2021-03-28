import { CsvFileReader } from './CsvFileReader';

const matches = new CsvFileReader('football.csv');
matches.read();

enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

let manUtdWins = 0;

for (let match of matches.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUtdWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUtdWins++;
  }
}
console.log(`Man United won ${manUtdWins} games`);
