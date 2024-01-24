// Generated from /Users/user/study/calendar-dsl/calendar-dsl/Calendar.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link CalendarParser}.
 */
public interface CalendarListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link CalendarParser#calendar}.
	 * @param ctx the parse tree
	 */
	void enterCalendar(CalendarParser.CalendarContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalendarParser#calendar}.
	 * @param ctx the parse tree
	 */
	void exitCalendar(CalendarParser.CalendarContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalendarParser#line}.
	 * @param ctx the parse tree
	 */
	void enterLine(CalendarParser.LineContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalendarParser#line}.
	 * @param ctx the parse tree
	 */
	void exitLine(CalendarParser.LineContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalendarParser#single_event}.
	 * @param ctx the parse tree
	 */
	void enterSingle_event(CalendarParser.Single_eventContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalendarParser#single_event}.
	 * @param ctx the parse tree
	 */
	void exitSingle_event(CalendarParser.Single_eventContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalendarParser#periodical_event}.
	 * @param ctx the parse tree
	 */
	void enterPeriodical_event(CalendarParser.Periodical_eventContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalendarParser#periodical_event}.
	 * @param ctx the parse tree
	 */
	void exitPeriodical_event(CalendarParser.Periodical_eventContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalendarParser#every}.
	 * @param ctx the parse tree
	 */
	void enterEvery(CalendarParser.EveryContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalendarParser#every}.
	 * @param ctx the parse tree
	 */
	void exitEvery(CalendarParser.EveryContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalendarParser#period}.
	 * @param ctx the parse tree
	 */
	void enterPeriod(CalendarParser.PeriodContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalendarParser#period}.
	 * @param ctx the parse tree
	 */
	void exitPeriod(CalendarParser.PeriodContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalendarParser#week_day}.
	 * @param ctx the parse tree
	 */
	void enterWeek_day(CalendarParser.Week_dayContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalendarParser#week_day}.
	 * @param ctx the parse tree
	 */
	void exitWeek_day(CalendarParser.Week_dayContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalendarParser#beginning}.
	 * @param ctx the parse tree
	 */
	void enterBeginning(CalendarParser.BeginningContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalendarParser#beginning}.
	 * @param ctx the parse tree
	 */
	void exitBeginning(CalendarParser.BeginningContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalendarParser#name}.
	 * @param ctx the parse tree
	 */
	void enterName(CalendarParser.NameContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalendarParser#name}.
	 * @param ctx the parse tree
	 */
	void exitName(CalendarParser.NameContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalendarParser#date}.
	 * @param ctx the parse tree
	 */
	void enterDate(CalendarParser.DateContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalendarParser#date}.
	 * @param ctx the parse tree
	 */
	void exitDate(CalendarParser.DateContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalendarParser#day}.
	 * @param ctx the parse tree
	 */
	void enterDay(CalendarParser.DayContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalendarParser#day}.
	 * @param ctx the parse tree
	 */
	void exitDay(CalendarParser.DayContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalendarParser#month}.
	 * @param ctx the parse tree
	 */
	void enterMonth(CalendarParser.MonthContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalendarParser#month}.
	 * @param ctx the parse tree
	 */
	void exitMonth(CalendarParser.MonthContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalendarParser#year}.
	 * @param ctx the parse tree
	 */
	void enterYear(CalendarParser.YearContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalendarParser#year}.
	 * @param ctx the parse tree
	 */
	void exitYear(CalendarParser.YearContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalendarParser#time}.
	 * @param ctx the parse tree
	 */
	void enterTime(CalendarParser.TimeContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalendarParser#time}.
	 * @param ctx the parse tree
	 */
	void exitTime(CalendarParser.TimeContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalendarParser#hour}.
	 * @param ctx the parse tree
	 */
	void enterHour(CalendarParser.HourContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalendarParser#hour}.
	 * @param ctx the parse tree
	 */
	void exitHour(CalendarParser.HourContext ctx);
	/**
	 * Enter a parse tree produced by {@link CalendarParser#minute}.
	 * @param ctx the parse tree
	 */
	void enterMinute(CalendarParser.MinuteContext ctx);
	/**
	 * Exit a parse tree produced by {@link CalendarParser#minute}.
	 * @param ctx the parse tree
	 */
	void exitMinute(CalendarParser.MinuteContext ctx);
}