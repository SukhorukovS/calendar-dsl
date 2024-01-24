import CalendarListener from './CalendarListener.js';

// This class defines a complete listener for a parse tree produced by CalendarParser.
export default class JsonCalendarListener extends CalendarListener {
	constructor(obj) {
		super();
		this.Obj = obj;
	}

	// Enter a parse tree produced by CalendarParser#calendar.
	enterCalendar(ctx) {
		// console.log('enterCalendar', ctx)
	}

	// Exit a parse tree produced by CalendarParser#calendar.
	exitCalendar(ctx) {
		// console.log('exitCalendar', ctx)
	}


	// Enter a parse tree produced by CalendarParser#line.
	enterLine(ctx) {
		// console.log('enterLine', ctx)
	}

	// Exit a parse tree produced by CalendarParser#line.
	exitLine(ctx) {
		// console.log('exitLine', ctx)
	}


	// Enter a parse tree produced by CalendarParser#single_event.
	enterSingle_event(ctx) {
		// console.log('enterSingle_event', ctx)
	}

	// Exit a parse tree produced by CalendarParser#single_event.
	exitSingle_event(ctx) {
		// console.log('exitSingle_event', ctx)
	}


	// Enter a parse tree produced by CalendarParser#periodical_event.
	enterPeriodical_event(ctx) {
	}

	// Exit a parse tree produced by CalendarParser#periodical_event.
	exitPeriodical_event(ctx) {
	}


	// Enter a parse tree produced by CalendarParser#every.
	enterEvery(ctx) {
	}

	// Exit a parse tree produced by CalendarParser#every.
	exitEvery(ctx) {
	}


	// Enter a parse tree produced by CalendarParser#period.
	enterPeriod(ctx) {
	}

	// Exit a parse tree produced by CalendarParser#period.
	exitPeriod(ctx) {
		this.Obj.period = ctx.NUMBER().getText();
	}


	// Enter a parse tree produced by CalendarParser#week_day.
	enterWeek_day(ctx) {
	}

	// Exit a parse tree produced by CalendarParser#week_day.
	exitWeek_day(ctx) {
		this.Obj.period = ctx.getText();
	}


	// Enter a parse tree produced by CalendarParser#beginning.
	enterBeginning(ctx) {
	}

	// Exit a parse tree produced by CalendarParser#beginning.
	exitBeginning(ctx) {
	}


	// Enter a parse tree produced by CalendarParser#name.
	enterName(ctx) {
	}

	// Exit a parse tree produced by CalendarParser#name.
	exitName(ctx) {
		this.Obj.name = ctx.getText();
	}


	// Enter a parse tree produced by CalendarParser#date.
	enterDate(ctx) {
	}

	// Exit a parse tree produced by CalendarParser#date.
	exitDate(ctx) {
		this.Obj.date = ctx.getText();
	}


	// Enter a parse tree produced by CalendarParser#day.
	enterDay(ctx) {
	}

	// Exit a parse tree produced by CalendarParser#day.
	exitDay(ctx) {
	}


	// Enter a parse tree produced by CalendarParser#month.
	enterMonth(ctx) {
	}

	// Exit a parse tree produced by CalendarParser#month.
	exitMonth(ctx) {
	}


	// Enter a parse tree produced by CalendarParser#year.
	enterYear(ctx) {
	}

	// Exit a parse tree produced by CalendarParser#year.
	exitYear(ctx) {
	}


	// Enter a parse tree produced by CalendarParser#time.
	enterTime(ctx) {
	}

	// Exit a parse tree produced by CalendarParser#time.
	exitTime(ctx) {
		this.Obj.time = ctx.getText()
	}


	// Enter a parse tree produced by CalendarParser#hour.
	enterHour(ctx) {
	}

	// Exit a parse tree produced by CalendarParser#hour.
	exitHour(ctx) {
	}


	// Enter a parse tree produced by CalendarParser#minute.
	enterMinute(ctx) {
	}

	// Exit a parse tree produced by CalendarParser#minute.
	exitMinute(ctx) {
	}



}