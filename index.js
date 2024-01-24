import { createServer } from 'http';
import antlr4 from 'antlr4';
const { CommonTokenStream, InputStream } = antlr4;
import CalendarLexer from './CalendarLexer.js';
import CalendarParser from './CalendarParser.js';
import JsonCalendarListener from './JsonCalendarListener.js';

var args = process.argv.slice(2);

var input = args[0];
var chars = new InputStream(input, true)   
var lexer = new CalendarLexer(chars);
var tokens  = new CommonTokenStream(lexer);
var parser = new CalendarParser(tokens);
    
parser.buildParseTrees = true;   
var tree = parser.calendar(); 
let obj = {};  
var JsonCalendar = new JsonCalendarListener(obj);
antlr4.tree.ParseTreeWalker.DEFAULT.walk(JsonCalendar, tree);
process.stdout.write(JSON.stringify(obj));
