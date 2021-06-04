import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';
import { Summary } from './Summary';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summaryHtml = new Summary(
  new WinsAnalysis('Man City'),
  new HtmlReport()
)

const summaryConsole = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
)

summaryHtml.buildAndPrintReport(matchReader.matches);
summaryConsole.buildAndPrintReport(matchReader.matches);
