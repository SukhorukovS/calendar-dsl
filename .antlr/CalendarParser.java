// Generated from /Users/user/study/calendar-dsl/calendar-dsl/Calendar.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class CalendarParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, ЗАПЛАНИРУЙ=4, КАЖДЫЙ=5, КАЖДУЮ=6, КАЖДОЕ=7, NUMBER=8, 
		MONDAY=9, TUESDAY=10, WEDNESDAY=11, THURSDAY=12, FRIDAY=13, SATURDAY=14, 
		SUNDAY=15, DAYS=16, WORD=17, AT=18, WHITESPACE=19, NEWLINE=20, TEXT=21;
	public static final int
		RULE_calendar = 0, RULE_line = 1, RULE_single_event = 2, RULE_periodical_event = 3, 
		RULE_every = 4, RULE_period = 5, RULE_week_day = 6, RULE_beginning = 7, 
		RULE_name = 8, RULE_date = 9, RULE_day = 10, RULE_month = 11, RULE_year = 12, 
		RULE_time = 13, RULE_hour = 14, RULE_minute = 15;
	private static String[] makeRuleNames() {
		return new String[] {
			"calendar", "line", "single_event", "periodical_event", "every", "period", 
			"week_day", "beginning", "name", "date", "day", "month", "year", "time", 
			"hour", "minute"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'''", "'.'", "':'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, "\u0000\u0001\u0002\u0003\u0004\u0005\u0006\u0007\u0008\u0009", 
			"\u0000\u0001\u0002\u0003\u0004\u0005", "\u0000\u0001\u0002\u0003\u0004\u0005", 
			"\u0000\u0001\u0002\u0003\u0004\u0005", "NUMBER", "MONDAY", "TUESDAY", 
			"WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY", "DAYS", "WORD", 
			"AT", "WHITESPACE", "NEWLINE", "TEXT"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Calendar.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public CalendarParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class CalendarContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(CalendarParser.EOF, 0); }
		public List<LineContext> line() {
			return getRuleContexts(LineContext.class);
		}
		public LineContext line(int i) {
			return getRuleContext(LineContext.class,i);
		}
		public CalendarContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_calendar; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CalendarListener ) ((CalendarListener)listener).enterCalendar(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CalendarListener ) ((CalendarListener)listener).exitCalendar(this);
		}
	}

	public final CalendarContext calendar() throws RecognitionException {
		CalendarContext _localctx = new CalendarContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_calendar);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(33); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(32);
				line();
				}
				}
				setState(35); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( _la==ЗАПЛАНИРУЙ );
			setState(37);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class LineContext extends ParserRuleContext {
		public BeginningContext beginning() {
			return getRuleContext(BeginningContext.class,0);
		}
		public NameContext name() {
			return getRuleContext(NameContext.class,0);
		}
		public TerminalNode NEWLINE() { return getToken(CalendarParser.NEWLINE, 0); }
		public Single_eventContext single_event() {
			return getRuleContext(Single_eventContext.class,0);
		}
		public Periodical_eventContext periodical_event() {
			return getRuleContext(Periodical_eventContext.class,0);
		}
		public LineContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_line; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CalendarListener ) ((CalendarListener)listener).enterLine(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CalendarListener ) ((CalendarListener)listener).exitLine(this);
		}
	}

	public final LineContext line() throws RecognitionException {
		LineContext _localctx = new LineContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_line);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(39);
			beginning();
			setState(40);
			name();
			setState(43);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NUMBER:
				{
				setState(41);
				single_event();
				}
				break;
			case КАЖДЫЙ:
			case КАЖДУЮ:
			case КАЖДОЕ:
				{
				setState(42);
				periodical_event();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(45);
			match(NEWLINE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Single_eventContext extends ParserRuleContext {
		public DateContext date() {
			return getRuleContext(DateContext.class,0);
		}
		public TerminalNode AT() { return getToken(CalendarParser.AT, 0); }
		public TimeContext time() {
			return getRuleContext(TimeContext.class,0);
		}
		public Single_eventContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_single_event; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CalendarListener ) ((CalendarListener)listener).enterSingle_event(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CalendarListener ) ((CalendarListener)listener).exitSingle_event(this);
		}
	}

	public final Single_eventContext single_event() throws RecognitionException {
		Single_eventContext _localctx = new Single_eventContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_single_event);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(47);
			date();
			setState(50);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==AT) {
				{
				setState(48);
				match(AT);
				setState(49);
				time();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Periodical_eventContext extends ParserRuleContext {
		public EveryContext every() {
			return getRuleContext(EveryContext.class,0);
		}
		public PeriodContext period() {
			return getRuleContext(PeriodContext.class,0);
		}
		public Week_dayContext week_day() {
			return getRuleContext(Week_dayContext.class,0);
		}
		public TerminalNode AT() { return getToken(CalendarParser.AT, 0); }
		public TimeContext time() {
			return getRuleContext(TimeContext.class,0);
		}
		public Periodical_eventContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_periodical_event; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CalendarListener ) ((CalendarListener)listener).enterPeriodical_event(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CalendarListener ) ((CalendarListener)listener).exitPeriodical_event(this);
		}
	}

	public final Periodical_eventContext periodical_event() throws RecognitionException {
		Periodical_eventContext _localctx = new Periodical_eventContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_periodical_event);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(52);
			every();
			setState(55);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NUMBER:
				{
				setState(53);
				period();
				}
				break;
			case MONDAY:
			case TUESDAY:
			case WEDNESDAY:
			case THURSDAY:
			case FRIDAY:
			case SATURDAY:
			case SUNDAY:
				{
				setState(54);
				week_day();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(59);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==AT) {
				{
				setState(57);
				match(AT);
				setState(58);
				time();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class EveryContext extends ParserRuleContext {
		public TerminalNode КАЖДЫЙ() { return getToken(CalendarParser.КАЖДЫЙ, 0); }
		public TerminalNode КАЖДУЮ() { return getToken(CalendarParser.КАЖДУЮ, 0); }
		public TerminalNode КАЖДОЕ() { return getToken(CalendarParser.КАЖДОЕ, 0); }
		public EveryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_every; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CalendarListener ) ((CalendarListener)listener).enterEvery(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CalendarListener ) ((CalendarListener)listener).exitEvery(this);
		}
	}

	public final EveryContext every() throws RecognitionException {
		EveryContext _localctx = new EveryContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_every);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(61);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 224L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class PeriodContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(CalendarParser.NUMBER, 0); }
		public TerminalNode DAYS() { return getToken(CalendarParser.DAYS, 0); }
		public PeriodContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_period; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CalendarListener ) ((CalendarListener)listener).enterPeriod(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CalendarListener ) ((CalendarListener)listener).exitPeriod(this);
		}
	}

	public final PeriodContext period() throws RecognitionException {
		PeriodContext _localctx = new PeriodContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_period);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(63);
			match(NUMBER);
			setState(64);
			match(DAYS);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class Week_dayContext extends ParserRuleContext {
		public TerminalNode MONDAY() { return getToken(CalendarParser.MONDAY, 0); }
		public TerminalNode TUESDAY() { return getToken(CalendarParser.TUESDAY, 0); }
		public TerminalNode WEDNESDAY() { return getToken(CalendarParser.WEDNESDAY, 0); }
		public TerminalNode THURSDAY() { return getToken(CalendarParser.THURSDAY, 0); }
		public TerminalNode FRIDAY() { return getToken(CalendarParser.FRIDAY, 0); }
		public TerminalNode SATURDAY() { return getToken(CalendarParser.SATURDAY, 0); }
		public TerminalNode SUNDAY() { return getToken(CalendarParser.SUNDAY, 0); }
		public Week_dayContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_week_day; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CalendarListener ) ((CalendarListener)listener).enterWeek_day(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CalendarListener ) ((CalendarListener)listener).exitWeek_day(this);
		}
	}

	public final Week_dayContext week_day() throws RecognitionException {
		Week_dayContext _localctx = new Week_dayContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_week_day);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(66);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 65024L) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BeginningContext extends ParserRuleContext {
		public TerminalNode ЗАПЛАНИРУЙ() { return getToken(CalendarParser.ЗАПЛАНИРУЙ, 0); }
		public BeginningContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_beginning; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CalendarListener ) ((CalendarListener)listener).enterBeginning(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CalendarListener ) ((CalendarListener)listener).exitBeginning(this);
		}
	}

	public final BeginningContext beginning() throws RecognitionException {
		BeginningContext _localctx = new BeginningContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_beginning);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(68);
			match(ЗАПЛАНИРУЙ);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class NameContext extends ParserRuleContext {
		public List<TerminalNode> WHITESPACE() { return getTokens(CalendarParser.WHITESPACE); }
		public TerminalNode WHITESPACE(int i) {
			return getToken(CalendarParser.WHITESPACE, i);
		}
		public List<TerminalNode> NUMBER() { return getTokens(CalendarParser.NUMBER); }
		public TerminalNode NUMBER(int i) {
			return getToken(CalendarParser.NUMBER, i);
		}
		public List<TerminalNode> WORD() { return getTokens(CalendarParser.WORD); }
		public TerminalNode WORD(int i) {
			return getToken(CalendarParser.WORD, i);
		}
		public NameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_name; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CalendarListener ) ((CalendarListener)listener).enterName(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CalendarListener ) ((CalendarListener)listener).exitName(this);
		}
	}

	public final NameContext name() throws RecognitionException {
		NameContext _localctx = new NameContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_name);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(70);
			match(T__0);
			setState(72); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(71);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 655616L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				}
				setState(74); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & 655616L) != 0) );
			setState(76);
			match(T__0);
			setState(77);
			match(WHITESPACE);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DateContext extends ParserRuleContext {
		public DayContext day() {
			return getRuleContext(DayContext.class,0);
		}
		public MonthContext month() {
			return getRuleContext(MonthContext.class,0);
		}
		public YearContext year() {
			return getRuleContext(YearContext.class,0);
		}
		public DateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_date; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CalendarListener ) ((CalendarListener)listener).enterDate(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CalendarListener ) ((CalendarListener)listener).exitDate(this);
		}
	}

	public final DateContext date() throws RecognitionException {
		DateContext _localctx = new DateContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_date);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(79);
			day();
			setState(80);
			match(T__1);
			setState(81);
			month();
			setState(82);
			match(T__1);
			setState(83);
			year();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class DayContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(CalendarParser.NUMBER, 0); }
		public DayContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_day; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CalendarListener ) ((CalendarListener)listener).enterDay(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CalendarListener ) ((CalendarListener)listener).exitDay(this);
		}
	}

	public final DayContext day() throws RecognitionException {
		DayContext _localctx = new DayContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_day);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(85);
			match(NUMBER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MonthContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(CalendarParser.NUMBER, 0); }
		public MonthContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_month; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CalendarListener ) ((CalendarListener)listener).enterMonth(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CalendarListener ) ((CalendarListener)listener).exitMonth(this);
		}
	}

	public final MonthContext month() throws RecognitionException {
		MonthContext _localctx = new MonthContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_month);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(87);
			match(NUMBER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class YearContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(CalendarParser.NUMBER, 0); }
		public YearContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_year; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CalendarListener ) ((CalendarListener)listener).enterYear(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CalendarListener ) ((CalendarListener)listener).exitYear(this);
		}
	}

	public final YearContext year() throws RecognitionException {
		YearContext _localctx = new YearContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_year);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(89);
			match(NUMBER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class TimeContext extends ParserRuleContext {
		public HourContext hour() {
			return getRuleContext(HourContext.class,0);
		}
		public MinuteContext minute() {
			return getRuleContext(MinuteContext.class,0);
		}
		public TimeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_time; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CalendarListener ) ((CalendarListener)listener).enterTime(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CalendarListener ) ((CalendarListener)listener).exitTime(this);
		}
	}

	public final TimeContext time() throws RecognitionException {
		TimeContext _localctx = new TimeContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_time);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(91);
			hour();
			setState(92);
			match(T__2);
			setState(93);
			minute();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class HourContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(CalendarParser.NUMBER, 0); }
		public HourContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_hour; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CalendarListener ) ((CalendarListener)listener).enterHour(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CalendarListener ) ((CalendarListener)listener).exitHour(this);
		}
	}

	public final HourContext hour() throws RecognitionException {
		HourContext _localctx = new HourContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_hour);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(95);
			match(NUMBER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class MinuteContext extends ParserRuleContext {
		public TerminalNode NUMBER() { return getToken(CalendarParser.NUMBER, 0); }
		public MinuteContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_minute; }
		@Override
		public void enterRule(ParseTreeListener listener) {
			if ( listener instanceof CalendarListener ) ((CalendarListener)listener).enterMinute(this);
		}
		@Override
		public void exitRule(ParseTreeListener listener) {
			if ( listener instanceof CalendarListener ) ((CalendarListener)listener).exitMinute(this);
		}
	}

	public final MinuteContext minute() throws RecognitionException {
		MinuteContext _localctx = new MinuteContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_minute);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(97);
			match(NUMBER);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u0015d\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0002\t\u0007\t\u0002\n\u0007\n\u0002\u000b\u0007\u000b\u0002"+
		"\f\u0007\f\u0002\r\u0007\r\u0002\u000e\u0007\u000e\u0002\u000f\u0007\u000f"+
		"\u0001\u0000\u0004\u0000\"\b\u0000\u000b\u0000\f\u0000#\u0001\u0000\u0001"+
		"\u0000\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0001\u0003\u0001,\b"+
		"\u0001\u0001\u0001\u0001\u0001\u0001\u0002\u0001\u0002\u0001\u0002\u0003"+
		"\u00023\b\u0002\u0001\u0003\u0001\u0003\u0001\u0003\u0003\u00038\b\u0003"+
		"\u0001\u0003\u0001\u0003\u0003\u0003<\b\u0003\u0001\u0004\u0001\u0004"+
		"\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0006\u0001\u0006\u0001\u0007"+
		"\u0001\u0007\u0001\b\u0001\b\u0004\bI\b\b\u000b\b\f\bJ\u0001\b\u0001\b"+
		"\u0001\b\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\t\u0001\n\u0001"+
		"\n\u0001\u000b\u0001\u000b\u0001\f\u0001\f\u0001\r\u0001\r\u0001\r\u0001"+
		"\r\u0001\u000e\u0001\u000e\u0001\u000f\u0001\u000f\u0001\u000f\u0000\u0000"+
		"\u0010\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018"+
		"\u001a\u001c\u001e\u0000\u0003\u0001\u0000\u0005\u0007\u0001\u0000\t\u000f"+
		"\u0003\u0000\b\b\u0011\u0011\u0013\u0013Y\u0000!\u0001\u0000\u0000\u0000"+
		"\u0002\'\u0001\u0000\u0000\u0000\u0004/\u0001\u0000\u0000\u0000\u0006"+
		"4\u0001\u0000\u0000\u0000\b=\u0001\u0000\u0000\u0000\n?\u0001\u0000\u0000"+
		"\u0000\fB\u0001\u0000\u0000\u0000\u000eD\u0001\u0000\u0000\u0000\u0010"+
		"F\u0001\u0000\u0000\u0000\u0012O\u0001\u0000\u0000\u0000\u0014U\u0001"+
		"\u0000\u0000\u0000\u0016W\u0001\u0000\u0000\u0000\u0018Y\u0001\u0000\u0000"+
		"\u0000\u001a[\u0001\u0000\u0000\u0000\u001c_\u0001\u0000\u0000\u0000\u001e"+
		"a\u0001\u0000\u0000\u0000 \"\u0003\u0002\u0001\u0000! \u0001\u0000\u0000"+
		"\u0000\"#\u0001\u0000\u0000\u0000#!\u0001\u0000\u0000\u0000#$\u0001\u0000"+
		"\u0000\u0000$%\u0001\u0000\u0000\u0000%&\u0005\u0000\u0000\u0001&\u0001"+
		"\u0001\u0000\u0000\u0000\'(\u0003\u000e\u0007\u0000(+\u0003\u0010\b\u0000"+
		"),\u0003\u0004\u0002\u0000*,\u0003\u0006\u0003\u0000+)\u0001\u0000\u0000"+
		"\u0000+*\u0001\u0000\u0000\u0000,-\u0001\u0000\u0000\u0000-.\u0005\u0014"+
		"\u0000\u0000.\u0003\u0001\u0000\u0000\u0000/2\u0003\u0012\t\u000001\u0005"+
		"\u0012\u0000\u000013\u0003\u001a\r\u000020\u0001\u0000\u0000\u000023\u0001"+
		"\u0000\u0000\u00003\u0005\u0001\u0000\u0000\u000047\u0003\b\u0004\u0000"+
		"58\u0003\n\u0005\u000068\u0003\f\u0006\u000075\u0001\u0000\u0000\u0000"+
		"76\u0001\u0000\u0000\u00008;\u0001\u0000\u0000\u00009:\u0005\u0012\u0000"+
		"\u0000:<\u0003\u001a\r\u0000;9\u0001\u0000\u0000\u0000;<\u0001\u0000\u0000"+
		"\u0000<\u0007\u0001\u0000\u0000\u0000=>\u0007\u0000\u0000\u0000>\t\u0001"+
		"\u0000\u0000\u0000?@\u0005\b\u0000\u0000@A\u0005\u0010\u0000\u0000A\u000b"+
		"\u0001\u0000\u0000\u0000BC\u0007\u0001\u0000\u0000C\r\u0001\u0000\u0000"+
		"\u0000DE\u0005\u0004\u0000\u0000E\u000f\u0001\u0000\u0000\u0000FH\u0005"+
		"\u0001\u0000\u0000GI\u0007\u0002\u0000\u0000HG\u0001\u0000\u0000\u0000"+
		"IJ\u0001\u0000\u0000\u0000JH\u0001\u0000\u0000\u0000JK\u0001\u0000\u0000"+
		"\u0000KL\u0001\u0000\u0000\u0000LM\u0005\u0001\u0000\u0000MN\u0005\u0013"+
		"\u0000\u0000N\u0011\u0001\u0000\u0000\u0000OP\u0003\u0014\n\u0000PQ\u0005"+
		"\u0002\u0000\u0000QR\u0003\u0016\u000b\u0000RS\u0005\u0002\u0000\u0000"+
		"ST\u0003\u0018\f\u0000T\u0013\u0001\u0000\u0000\u0000UV\u0005\b\u0000"+
		"\u0000V\u0015\u0001\u0000\u0000\u0000WX\u0005\b\u0000\u0000X\u0017\u0001"+
		"\u0000\u0000\u0000YZ\u0005\b\u0000\u0000Z\u0019\u0001\u0000\u0000\u0000"+
		"[\\\u0003\u001c\u000e\u0000\\]\u0005\u0003\u0000\u0000]^\u0003\u001e\u000f"+
		"\u0000^\u001b\u0001\u0000\u0000\u0000_`\u0005\b\u0000\u0000`\u001d\u0001"+
		"\u0000\u0000\u0000ab\u0005\b\u0000\u0000b\u001f\u0001\u0000\u0000\u0000"+
		"\u0006#+27;J";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}