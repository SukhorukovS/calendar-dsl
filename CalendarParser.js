// Generated from Calendar.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import CalendarListener from './CalendarListener.js';
import CalendarVisitor from './CalendarVisitor.js';

const serializedATN = [4,1,22,112,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,1,0,4,0,34,8,0,11,0,12,0,35,1,0,1,0,1,1,1,
1,1,1,1,1,1,1,3,1,45,8,1,1,1,3,1,48,8,1,1,2,1,2,3,2,52,8,2,1,2,1,2,3,2,56,
8,2,1,3,1,3,1,3,1,3,3,3,62,8,3,1,3,3,3,65,8,3,1,3,1,3,3,3,69,8,3,1,4,1,4,
1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,8,1,8,4,8,84,8,8,11,8,12,8,85,1,8,
1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,11,1,11,1,12,1,12,1,13,1,13,1,13,
1,13,3,13,106,8,13,1,14,1,14,1,15,1,15,1,15,0,0,16,0,2,4,6,8,10,12,14,16,
18,20,22,24,26,28,30,0,3,1,0,6,9,1,0,11,17,2,0,10,10,19,20,105,0,33,1,0,
0,0,2,39,1,0,0,0,4,49,1,0,0,0,6,57,1,0,0,0,8,70,1,0,0,0,10,72,1,0,0,0,12,
76,1,0,0,0,14,78,1,0,0,0,16,81,1,0,0,0,18,89,1,0,0,0,20,95,1,0,0,0,22,97,
1,0,0,0,24,99,1,0,0,0,26,101,1,0,0,0,28,107,1,0,0,0,30,109,1,0,0,0,32,34,
3,2,1,0,33,32,1,0,0,0,34,35,1,0,0,0,35,33,1,0,0,0,35,36,1,0,0,0,36,37,1,
0,0,0,37,38,5,0,0,1,38,1,1,0,0,0,39,40,3,14,7,0,40,41,3,16,8,0,41,44,5,20,
0,0,42,45,3,4,2,0,43,45,3,6,3,0,44,42,1,0,0,0,44,43,1,0,0,0,45,47,1,0,0,
0,46,48,5,21,0,0,47,46,1,0,0,0,47,48,1,0,0,0,48,3,1,0,0,0,49,51,3,18,9,0,
50,52,5,20,0,0,51,50,1,0,0,0,51,52,1,0,0,0,52,55,1,0,0,0,53,54,5,4,0,0,54,
56,3,26,13,0,55,53,1,0,0,0,55,56,1,0,0,0,56,5,1,0,0,0,57,58,3,8,4,0,58,61,
5,20,0,0,59,62,3,10,5,0,60,62,3,12,6,0,61,59,1,0,0,0,61,60,1,0,0,0,62,64,
1,0,0,0,63,65,5,20,0,0,64,63,1,0,0,0,64,65,1,0,0,0,65,68,1,0,0,0,66,67,5,
4,0,0,67,69,3,26,13,0,68,66,1,0,0,0,68,69,1,0,0,0,69,7,1,0,0,0,70,71,7,0,
0,0,71,9,1,0,0,0,72,73,5,10,0,0,73,74,5,20,0,0,74,75,5,18,0,0,75,11,1,0,
0,0,76,77,7,1,0,0,77,13,1,0,0,0,78,79,5,5,0,0,79,80,5,20,0,0,80,15,1,0,0,
0,81,83,5,1,0,0,82,84,7,2,0,0,83,82,1,0,0,0,84,85,1,0,0,0,85,83,1,0,0,0,
85,86,1,0,0,0,86,87,1,0,0,0,87,88,5,1,0,0,88,17,1,0,0,0,89,90,3,20,10,0,
90,91,5,2,0,0,91,92,3,22,11,0,92,93,5,2,0,0,93,94,3,24,12,0,94,19,1,0,0,
0,95,96,5,10,0,0,96,21,1,0,0,0,97,98,5,10,0,0,98,23,1,0,0,0,99,100,5,10,
0,0,100,25,1,0,0,0,101,102,3,28,14,0,102,103,5,3,0,0,103,105,3,30,15,0,104,
106,5,20,0,0,105,104,1,0,0,0,105,106,1,0,0,0,106,27,1,0,0,0,107,108,5,10,
0,0,108,29,1,0,0,0,109,110,5,10,0,0,110,31,1,0,0,0,10,35,44,47,51,55,61,
64,68,85,105];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class CalendarParser extends antlr4.Parser {

    static grammarFileName = "Calendar.g4";
    static literalNames = [ null, "'''", "'.'", "':'" ];
    static symbolicNames = [ null, null, null, null, "AT", "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\u0008\u0009", 
                             "\u0000\u0001\u0002\u0003\u0004\u0005", "\u0000\u0001\u0002\u0003\u0004\u0005", 
                             "\u0000\u0001\u0002\u0003\u0004\u0005", "\u0000\u0001\u0002\u0003\u0004\u0005", 
                             "NUMBER", "MONDAY", "TUESDAY", "WEDNESDAY", 
                             "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY", 
                             "DAYS", "WORD", "WHITESPACE", "NEWLINE", "TEXT" ];
    static ruleNames = [ "calendar", "line", "single_event", "periodical_event", 
                         "every", "period", "week_day", "beginning", "name", 
                         "date", "day", "month", "year", "time", "hour", 
                         "minute" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CalendarParser.ruleNames;
        this.literalNames = CalendarParser.literalNames;
        this.symbolicNames = CalendarParser.symbolicNames;
    }



	calendar() {
	    let localctx = new CalendarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CalendarParser.RULE_calendar);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 32;
	            this.line();
	            this.state = 35; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===5);
	        this.state = 37;
	        this.match(CalendarParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	line() {
	    let localctx = new LineContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CalendarParser.RULE_line);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.beginning();
	        this.state = 40;
	        this.name();
	        this.state = 41;
	        this.match(CalendarParser.WHITESPACE);
	        this.state = 44;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            this.state = 42;
	            this.single_event();
	            break;
	        case 6:
	        case 7:
	        case 8:
	        case 9:
	            this.state = 43;
	            this.periodical_event();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 47;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===21) {
	            this.state = 46;
	            this.match(CalendarParser.NEWLINE);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	single_event() {
	    let localctx = new Single_eventContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CalendarParser.RULE_single_event);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 49;
	        this.date();
	        this.state = 51;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 50;
	            this.match(CalendarParser.WHITESPACE);
	        }

	        this.state = 55;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 53;
	            this.match(CalendarParser.AT);
	            this.state = 54;
	            this.time();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	periodical_event() {
	    let localctx = new Periodical_eventContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CalendarParser.RULE_periodical_event);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.every();
	        this.state = 58;
	        this.match(CalendarParser.WHITESPACE);
	        this.state = 61;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	            this.state = 59;
	            this.period();
	            break;
	        case 11:
	        case 12:
	        case 13:
	        case 14:
	        case 15:
	        case 16:
	        case 17:
	            this.state = 60;
	            this.week_day();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this.state = 64;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 63;
	            this.match(CalendarParser.WHITESPACE);
	        }

	        this.state = 68;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 66;
	            this.match(CalendarParser.AT);
	            this.state = 67;
	            this.time();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	every() {
	    let localctx = new EveryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, CalendarParser.RULE_every);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 70;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 960) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	period() {
	    let localctx = new PeriodContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, CalendarParser.RULE_period);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 72;
	        this.match(CalendarParser.NUMBER);
	        this.state = 73;
	        this.match(CalendarParser.WHITESPACE);
	        this.state = 74;
	        this.match(CalendarParser.DAYS);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	week_day() {
	    let localctx = new Week_dayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CalendarParser.RULE_week_day);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 76;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 260096) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	beginning() {
	    let localctx = new BeginningContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, CalendarParser.RULE_beginning);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 78;
	        this.match(CalendarParser.ЗАПЛАНИРУЙ);
	        this.state = 79;
	        this.match(CalendarParser.WHITESPACE);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	name() {
	    let localctx = new NameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, CalendarParser.RULE_name);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 81;
	        this.match(CalendarParser.T__0);
	        this.state = 83; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 82;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1573888) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 85; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1573888) !== 0));
	        this.state = 87;
	        this.match(CalendarParser.T__0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	date() {
	    let localctx = new DateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, CalendarParser.RULE_date);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 89;
	        this.day();
	        this.state = 90;
	        this.match(CalendarParser.T__1);
	        this.state = 91;
	        this.month();
	        this.state = 92;
	        this.match(CalendarParser.T__1);
	        this.state = 93;
	        this.year();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	day() {
	    let localctx = new DayContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, CalendarParser.RULE_day);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 95;
	        this.match(CalendarParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	month() {
	    let localctx = new MonthContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, CalendarParser.RULE_month);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 97;
	        this.match(CalendarParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	year() {
	    let localctx = new YearContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, CalendarParser.RULE_year);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 99;
	        this.match(CalendarParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	time() {
	    let localctx = new TimeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, CalendarParser.RULE_time);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 101;
	        this.hour();
	        this.state = 102;
	        this.match(CalendarParser.T__2);
	        this.state = 103;
	        this.minute();
	        this.state = 105;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===20) {
	            this.state = 104;
	            this.match(CalendarParser.WHITESPACE);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	hour() {
	    let localctx = new HourContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, CalendarParser.RULE_hour);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 107;
	        this.match(CalendarParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	minute() {
	    let localctx = new MinuteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, CalendarParser.RULE_minute);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109;
	        this.match(CalendarParser.NUMBER);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CalendarParser.EOF = antlr4.Token.EOF;
CalendarParser.T__0 = 1;
CalendarParser.T__1 = 2;
CalendarParser.T__2 = 3;
CalendarParser.AT = 4;
CalendarParser.ЗАПЛАНИРУЙ = 5;
CalendarParser.КАЖДЫЙ = 6;
CalendarParser.КАЖДУЮ = 7;
CalendarParser.КАЖДОЕ = 8;
CalendarParser.КАЖДЫЕ = 9;
CalendarParser.NUMBER = 10;
CalendarParser.MONDAY = 11;
CalendarParser.TUESDAY = 12;
CalendarParser.WEDNESDAY = 13;
CalendarParser.THURSDAY = 14;
CalendarParser.FRIDAY = 15;
CalendarParser.SATURDAY = 16;
CalendarParser.SUNDAY = 17;
CalendarParser.DAYS = 18;
CalendarParser.WORD = 19;
CalendarParser.WHITESPACE = 20;
CalendarParser.NEWLINE = 21;
CalendarParser.TEXT = 22;

CalendarParser.RULE_calendar = 0;
CalendarParser.RULE_line = 1;
CalendarParser.RULE_single_event = 2;
CalendarParser.RULE_periodical_event = 3;
CalendarParser.RULE_every = 4;
CalendarParser.RULE_period = 5;
CalendarParser.RULE_week_day = 6;
CalendarParser.RULE_beginning = 7;
CalendarParser.RULE_name = 8;
CalendarParser.RULE_date = 9;
CalendarParser.RULE_day = 10;
CalendarParser.RULE_month = 11;
CalendarParser.RULE_year = 12;
CalendarParser.RULE_time = 13;
CalendarParser.RULE_hour = 14;
CalendarParser.RULE_minute = 15;

class CalendarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalendarParser.RULE_calendar;
    }

	EOF() {
	    return this.getToken(CalendarParser.EOF, 0);
	};

	line = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LineContext);
	    } else {
	        return this.getTypedRuleContext(LineContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof CalendarListener ) {
	        listener.enterCalendar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalendarListener ) {
	        listener.exitCalendar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalendarVisitor ) {
	        return visitor.visitCalendar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LineContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalendarParser.RULE_line;
    }

	beginning() {
	    return this.getTypedRuleContext(BeginningContext,0);
	};

	name() {
	    return this.getTypedRuleContext(NameContext,0);
	};

	WHITESPACE() {
	    return this.getToken(CalendarParser.WHITESPACE, 0);
	};

	single_event() {
	    return this.getTypedRuleContext(Single_eventContext,0);
	};

	periodical_event() {
	    return this.getTypedRuleContext(Periodical_eventContext,0);
	};

	NEWLINE() {
	    return this.getToken(CalendarParser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalendarListener ) {
	        listener.enterLine(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalendarListener ) {
	        listener.exitLine(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalendarVisitor ) {
	        return visitor.visitLine(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Single_eventContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalendarParser.RULE_single_event;
    }

	date() {
	    return this.getTypedRuleContext(DateContext,0);
	};

	WHITESPACE() {
	    return this.getToken(CalendarParser.WHITESPACE, 0);
	};

	AT() {
	    return this.getToken(CalendarParser.AT, 0);
	};

	time() {
	    return this.getTypedRuleContext(TimeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalendarListener ) {
	        listener.enterSingle_event(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalendarListener ) {
	        listener.exitSingle_event(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalendarVisitor ) {
	        return visitor.visitSingle_event(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Periodical_eventContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalendarParser.RULE_periodical_event;
    }

	every() {
	    return this.getTypedRuleContext(EveryContext,0);
	};

	WHITESPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalendarParser.WHITESPACE);
	    } else {
	        return this.getToken(CalendarParser.WHITESPACE, i);
	    }
	};


	period() {
	    return this.getTypedRuleContext(PeriodContext,0);
	};

	week_day() {
	    return this.getTypedRuleContext(Week_dayContext,0);
	};

	AT() {
	    return this.getToken(CalendarParser.AT, 0);
	};

	time() {
	    return this.getTypedRuleContext(TimeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalendarListener ) {
	        listener.enterPeriodical_event(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalendarListener ) {
	        listener.exitPeriodical_event(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalendarVisitor ) {
	        return visitor.visitPeriodical_event(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EveryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalendarParser.RULE_every;
    }

	КАЖДЫЙ() {
	    return this.getToken(CalendarParser.КАЖДЫЙ, 0);
	};

	КАЖДУЮ() {
	    return this.getToken(CalendarParser.КАЖДУЮ, 0);
	};

	КАЖДОЕ() {
	    return this.getToken(CalendarParser.КАЖДОЕ, 0);
	};

	КАЖДЫЕ() {
	    return this.getToken(CalendarParser.КАЖДЫЕ, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalendarListener ) {
	        listener.enterEvery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalendarListener ) {
	        listener.exitEvery(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalendarVisitor ) {
	        return visitor.visitEvery(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PeriodContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalendarParser.RULE_period;
    }

	NUMBER() {
	    return this.getToken(CalendarParser.NUMBER, 0);
	};

	WHITESPACE() {
	    return this.getToken(CalendarParser.WHITESPACE, 0);
	};

	DAYS() {
	    return this.getToken(CalendarParser.DAYS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalendarListener ) {
	        listener.enterPeriod(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalendarListener ) {
	        listener.exitPeriod(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalendarVisitor ) {
	        return visitor.visitPeriod(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class Week_dayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalendarParser.RULE_week_day;
    }

	MONDAY() {
	    return this.getToken(CalendarParser.MONDAY, 0);
	};

	TUESDAY() {
	    return this.getToken(CalendarParser.TUESDAY, 0);
	};

	WEDNESDAY() {
	    return this.getToken(CalendarParser.WEDNESDAY, 0);
	};

	THURSDAY() {
	    return this.getToken(CalendarParser.THURSDAY, 0);
	};

	FRIDAY() {
	    return this.getToken(CalendarParser.FRIDAY, 0);
	};

	SATURDAY() {
	    return this.getToken(CalendarParser.SATURDAY, 0);
	};

	SUNDAY() {
	    return this.getToken(CalendarParser.SUNDAY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalendarListener ) {
	        listener.enterWeek_day(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalendarListener ) {
	        listener.exitWeek_day(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalendarVisitor ) {
	        return visitor.visitWeek_day(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BeginningContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalendarParser.RULE_beginning;
    }

	ЗАПЛАНИРУЙ() {
	    return this.getToken(CalendarParser.ЗАПЛАНИРУЙ, 0);
	};

	WHITESPACE() {
	    return this.getToken(CalendarParser.WHITESPACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalendarListener ) {
	        listener.enterBeginning(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalendarListener ) {
	        listener.exitBeginning(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalendarVisitor ) {
	        return visitor.visitBeginning(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalendarParser.RULE_name;
    }

	NUMBER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalendarParser.NUMBER);
	    } else {
	        return this.getToken(CalendarParser.NUMBER, i);
	    }
	};


	WORD = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalendarParser.WORD);
	    } else {
	        return this.getToken(CalendarParser.WORD, i);
	    }
	};


	WHITESPACE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CalendarParser.WHITESPACE);
	    } else {
	        return this.getToken(CalendarParser.WHITESPACE, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CalendarListener ) {
	        listener.enterName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalendarListener ) {
	        listener.exitName(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalendarVisitor ) {
	        return visitor.visitName(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalendarParser.RULE_date;
    }

	day() {
	    return this.getTypedRuleContext(DayContext,0);
	};

	month() {
	    return this.getTypedRuleContext(MonthContext,0);
	};

	year() {
	    return this.getTypedRuleContext(YearContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CalendarListener ) {
	        listener.enterDate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalendarListener ) {
	        listener.exitDate(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalendarVisitor ) {
	        return visitor.visitDate(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DayContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalendarParser.RULE_day;
    }

	NUMBER() {
	    return this.getToken(CalendarParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalendarListener ) {
	        listener.enterDay(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalendarListener ) {
	        listener.exitDay(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalendarVisitor ) {
	        return visitor.visitDay(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MonthContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalendarParser.RULE_month;
    }

	NUMBER() {
	    return this.getToken(CalendarParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalendarListener ) {
	        listener.enterMonth(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalendarListener ) {
	        listener.exitMonth(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalendarVisitor ) {
	        return visitor.visitMonth(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class YearContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalendarParser.RULE_year;
    }

	NUMBER() {
	    return this.getToken(CalendarParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalendarListener ) {
	        listener.enterYear(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalendarListener ) {
	        listener.exitYear(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalendarVisitor ) {
	        return visitor.visitYear(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TimeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalendarParser.RULE_time;
    }

	hour() {
	    return this.getTypedRuleContext(HourContext,0);
	};

	minute() {
	    return this.getTypedRuleContext(MinuteContext,0);
	};

	WHITESPACE() {
	    return this.getToken(CalendarParser.WHITESPACE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalendarListener ) {
	        listener.enterTime(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalendarListener ) {
	        listener.exitTime(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalendarVisitor ) {
	        return visitor.visitTime(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class HourContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalendarParser.RULE_hour;
    }

	NUMBER() {
	    return this.getToken(CalendarParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalendarListener ) {
	        listener.enterHour(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalendarListener ) {
	        listener.exitHour(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalendarVisitor ) {
	        return visitor.visitHour(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MinuteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CalendarParser.RULE_minute;
    }

	NUMBER() {
	    return this.getToken(CalendarParser.NUMBER, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CalendarListener ) {
	        listener.enterMinute(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CalendarListener ) {
	        listener.exitMinute(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CalendarVisitor ) {
	        return visitor.visitMinute(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




CalendarParser.CalendarContext = CalendarContext; 
CalendarParser.LineContext = LineContext; 
CalendarParser.Single_eventContext = Single_eventContext; 
CalendarParser.Periodical_eventContext = Periodical_eventContext; 
CalendarParser.EveryContext = EveryContext; 
CalendarParser.PeriodContext = PeriodContext; 
CalendarParser.Week_dayContext = Week_dayContext; 
CalendarParser.BeginningContext = BeginningContext; 
CalendarParser.NameContext = NameContext; 
CalendarParser.DateContext = DateContext; 
CalendarParser.DayContext = DayContext; 
CalendarParser.MonthContext = MonthContext; 
CalendarParser.YearContext = YearContext; 
CalendarParser.TimeContext = TimeContext; 
CalendarParser.HourContext = HourContext; 
CalendarParser.MinuteContext = MinuteContext; 
