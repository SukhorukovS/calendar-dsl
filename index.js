import { createServer } from 'http';
import antlr4 from 'antlr4';
const { CommonTokenStream, InputStream } = antlr4;
import CalendarLexer from './CalendarLexer.js';
import CalendarParser from './CalendarParser.js';
import JsonCalendarListener from './JsonCalendarListener.js';

var args = process.argv.slice(2);

createServer((req, res) => {
   
   res.writeHead(200, {
       'Content-Type': 'application/json',        
   });
   
   var input = "Запланируй 'Название события' каждый понедельник в 12:10\n";
   var chars = new InputStream(input, true)   
   var lexer = new CalendarLexer(chars);
   var tokens  = new CommonTokenStream(lexer);
   var parser = new CalendarParser(tokens);
      
   parser.buildParseTrees = true;   
   var tree = parser.calendar(); 
   let obj = {};  
   var JsonCalendar = new JsonCalendarListener(obj);
   antlr4.tree.ParseTreeWalker.DEFAULT.walk(JsonCalendar, tree);
   res.write(JSON.stringify(obj));
   res.end();

}).listen(1337);