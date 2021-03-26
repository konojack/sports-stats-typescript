import fs from 'fs';

const matches: string[][] = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

let manUtdWins = 0;
for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === 'H') {
    manUtdWins++;
  } else if (match[2] === 'Man United' && match[5] === 'A') {
    manUtdWins++;
  }
}
console.log(`Man United won ${manUtdWins} games`);
