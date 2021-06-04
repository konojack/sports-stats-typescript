import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { CsvFileReader } from './CsvFileReader';
import { MatchReader } from './MatchReader';
import { ConsoleReport } from './reportTargets/ConsoleReport';
import { HtmlReport } from './reportTargets/HtmlReport';
import { Summary } from './Summary';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summaryHtml = Summary.winsAnalysisAndHTMLReport('Man City');

const summaryConsole = Summary.winsAnalysisAndConsoleReport('Man United');

summaryHtml.buildAndPrintReport(matchReader.matches);
summaryConsole.buildAndPrintReport(matchReader.matches);
