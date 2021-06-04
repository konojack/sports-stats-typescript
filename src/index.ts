import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

const matchReader = MatchReader.fromCsv('football.csv');
const summaryHtml = Summary.winsAnalysisAndHTMLReport('Man City');
const summaryConsole = Summary.winsAnalysisAndConsoleReport('Man United');

matchReader.load();

summaryHtml.buildAndPrintReport(matchReader.matches);
summaryConsole.buildAndPrintReport(matchReader.matches);
