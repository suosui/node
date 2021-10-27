// Copyright 2021 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --harmony-temporal

// This file is similar to function-exist but w/o era or eraYear
// The following are generated by
// proposal-temporal/spec$ egrep "<h1>" *.html|egrep ">Temporal\.|>get"|egrep "get|\(" | \
//   cut -d'>' -f2|cut -d'<' -f 1 |egrep -v "era" |egrep -v "\. \. \." |sort -u

const funcs = [

  "get Temporal.Calendar.prototype.id",
  "get Temporal.Duration.prototype.blank",
  "get Temporal.Duration.prototype.days",
  "get Temporal.Duration.prototype.hours",
  "get Temporal.Duration.prototype.microseconds",
  "get Temporal.Duration.prototype.milliseconds",
  "get Temporal.Duration.prototype.minutes",
  "get Temporal.Duration.prototype.months",
  "get Temporal.Duration.prototype.nanoseconds",
  "get Temporal.Duration.prototype.seconds",
  "get Temporal.Duration.prototype.sign",
  "get Temporal.Duration.prototype.weeks",
  "get Temporal.Duration.prototype.years",
  "get Temporal.Instant.prototype.epochMicroseconds",
  "get Temporal.Instant.prototype.epochMilliseconds",
  "get Temporal.Instant.prototype.epochNanoseconds",
  "get Temporal.Instant.prototype.epochSeconds",
  "get Temporal.PlainDate.prototype.calendar",
  "get Temporal.PlainDate.prototype.day",
  "get Temporal.PlainDate.prototype.dayOfWeek",
  "get Temporal.PlainDate.prototype.dayOfYear",
  "get Temporal.PlainDate.prototype.daysInMonth",
  "get Temporal.PlainDate.prototype.daysInWeek",
  "get Temporal.PlainDate.prototype.daysInYear",
  "get Temporal.PlainDate.prototype.inLeapYear",
  "get Temporal.PlainDate.prototype.month",
  "get Temporal.PlainDate.prototype.monthCode",
  "get Temporal.PlainDate.prototype.monthsInYear",
  "get Temporal.PlainDate.prototype.weekOfYear",
  "get Temporal.PlainDate.prototype.year",
  "get Temporal.PlainDateTime.prototype.calendar",
  "get Temporal.PlainDateTime.prototype.day",
  "get Temporal.PlainDateTime.prototype.dayOfWeek",
  "get Temporal.PlainDateTime.prototype.dayOfYear",
  "get Temporal.PlainDateTime.prototype.daysInMonth",
  "get Temporal.PlainDateTime.prototype.daysInWeek",
  "get Temporal.PlainDateTime.prototype.daysInYear",
  "get Temporal.PlainDateTime.prototype.hour",
  "get Temporal.PlainDateTime.prototype.inLeapYear",
  "get Temporal.PlainDateTime.prototype.microsecond",
  "get Temporal.PlainDateTime.prototype.millisecond",
  "get Temporal.PlainDateTime.prototype.minute",
  "get Temporal.PlainDateTime.prototype.month",
  "get Temporal.PlainDateTime.prototype.monthCode",
  "get Temporal.PlainDateTime.prototype.monthsInYear",
  "get Temporal.PlainDateTime.prototype.nanosecond",
  "get Temporal.PlainDateTime.prototype.second",
  "get Temporal.PlainDateTime.prototype.weekOfYear",
  "get Temporal.PlainDateTime.prototype.year",
  "get Temporal.PlainMonthDay.prototype.calendar",
  "get Temporal.PlainMonthDay.prototype.day",
  "get Temporal.PlainMonthDay.prototype.monthCode",
  "get Temporal.PlainTime.prototype.calendar",
  "get Temporal.PlainTime.prototype.hour",
  "get Temporal.PlainTime.prototype.microsecond",
  "get Temporal.PlainTime.prototype.millisecond",
  "get Temporal.PlainTime.prototype.minute",
  "get Temporal.PlainTime.prototype.nanosecond",
  "get Temporal.PlainTime.prototype.second",
  "get Temporal.PlainYearMonth.prototype.calendar",
  "get Temporal.PlainYearMonth.prototype.daysInMonth",
  "get Temporal.PlainYearMonth.prototype.daysInYear",
  "get Temporal.PlainYearMonth.prototype.inLeapYear",
  "get Temporal.PlainYearMonth.prototype.month",
  "get Temporal.PlainYearMonth.prototype.monthCode",
  "get Temporal.PlainYearMonth.prototype.monthsInYear",
  "get Temporal.PlainYearMonth.prototype.year",
  "get Temporal.TimeZone.prototype.id",
  "get Temporal.ZonedDateTime.prototype.calendar",
  "get Temporal.ZonedDateTime.prototype.day",
  "get Temporal.ZonedDateTime.prototype.dayOfWeek",
  "get Temporal.ZonedDateTime.prototype.dayOfYear",
  "get Temporal.ZonedDateTime.prototype.daysInMonth",
  "get Temporal.ZonedDateTime.prototype.daysInWeek",
  "get Temporal.ZonedDateTime.prototype.daysInYear",
  "get Temporal.ZonedDateTime.prototype.epochMicroseconds",
  "get Temporal.ZonedDateTime.prototype.epochMilliseconds",
  "get Temporal.ZonedDateTime.prototype.epochNanoseconds",
  "get Temporal.ZonedDateTime.prototype.epochSeconds",
  "get Temporal.ZonedDateTime.prototype.hour",
  "get Temporal.ZonedDateTime.prototype.hoursInDay",
  "get Temporal.ZonedDateTime.prototype.inLeapYear",
  "get Temporal.ZonedDateTime.prototype.microsecond",
  "get Temporal.ZonedDateTime.prototype.millisecond",
  "get Temporal.ZonedDateTime.prototype.minute",
  "get Temporal.ZonedDateTime.prototype.month",
  "get Temporal.ZonedDateTime.prototype.monthCode",
  "get Temporal.ZonedDateTime.prototype.monthsInYear",
  "get Temporal.ZonedDateTime.prototype.nanosecond",
  "get Temporal.ZonedDateTime.prototype.offset",
  "get Temporal.ZonedDateTime.prototype.offsetNanoseconds",
  "get Temporal.ZonedDateTime.prototype.second",
  "get Temporal.ZonedDateTime.prototype.timeZone",
  "get Temporal.ZonedDateTime.prototype.weekOfYear",
  "get Temporal.ZonedDateTime.prototype.year",
  "Temporal.Calendar.from ( _item_ )",
  "Temporal.Calendar ( _id_ )",
  "Temporal.Calendar.prototype.dateAdd ( _date_, _duration_ [ , _options_ ] )",
  "Temporal.Calendar.prototype.dateFromFields ( _fields_ [ , _options_ ] )",
  "Temporal.Calendar.prototype.dateUntil ( _one_, _two_ [ , _options_ ] )",
  "Temporal.Calendar.prototype.dayOfWeek ( _dateOrDateTime_ )",
  "Temporal.Calendar.prototype.dayOfWeek ( _temporalDateLike_ )",
  "Temporal.Calendar.prototype.dayOfYear ( _temporalDateLike_ )",
  "Temporal.Calendar.prototype.daysInMonth ( _temporalDateLike_ )",
  "Temporal.Calendar.prototype.daysInWeek ( _temporalDateLike_ )",
  "Temporal.Calendar.prototype.daysInYear ( _temporalDateLike_ )",
  "Temporal.Calendar.prototype.day ( _temporalDateLike_ )",
  "Temporal.Calendar.prototype.fields ( _fields_ )",
  "Temporal.Calendar.prototype.inLeapYear ( _temporalDateLike_ )",
  "Temporal.Calendar.prototype.mergeFields ( _fields_, _additionalFields_ )",
  "Temporal.Calendar.prototype.monthCode ( _temporalDateLike_ )",
  "Temporal.Calendar.prototype.monthDayFromFields ( _fields_ [ , _options_ ] )",
  "Temporal.Calendar.prototype.monthsInYear ( _temporalDateLike_ )",
  "Temporal.Calendar.prototype.month ( _temporalDateLike_ )",
  "Temporal.Calendar.prototype.toJSON ( )",
  "Temporal.Calendar.prototype.toString ( )",
  "Temporal.Calendar.prototype.weekOfYear ( _temporalDateLike_ )",
  "Temporal.Calendar.prototype.yearMonthFromFields ( _fields_ [ , _options_ ] )",
  "Temporal.Calendar.prototype.year ( _temporalDateLike_ )",
  "Temporal.Duration.compare ( _one_, _two_ [ , _options_ ] )",
  "Temporal.Duration.from ( _item_ )",
  "Temporal.Duration.prototype.abs ( )",
  "Temporal.Duration.prototype.add ( _other_ [ , _options_ ] )",
  "Temporal.Duration.prototype.negated ( )",
  "Temporal.Duration.prototype.round ( _options_ )",
  "Temporal.Duration.prototype.subtract ( _other_ [ , _options_ ] )",
  "Temporal.Duration.prototype.toJSON ( )",
  "Temporal.Duration.prototype.toLocaleString ( [ _locales_ [ , _options_ ] ] )",
  "Temporal.Duration.prototype.toString ( [ _options_ ] )",
  "Temporal.Duration.prototype.total ( _options_ )",
  "Temporal.Duration.prototype.valueOf ( )",
  "Temporal.Duration.prototype.with ( _temporalDurationLike_ )",
  "Temporal.Duration ( [ _years_ [ , _months_ [ , _weeks_ [ , _days_ [ , _hours_ [ , _minutes_ [ , _seconds_ [ , _milliseconds_ [ , _microseconds_ [ , _nanoseconds_ ] ] ] ] ] ] ] ] ] ] )",
  "Temporal.Instant.compare ( _one_, _two_ )",
  "Temporal.Instant ( _epochNanoseconds_ )",
  "Temporal.Instant.fromEpochMicroseconds ( _epochMicroseconds_ )",
  "Temporal.Instant.fromEpochMilliseconds ( _epochMilliseconds_ )",
  "Temporal.Instant.fromEpochNanoseconds ( _epochNanoseconds_ )",
  "Temporal.Instant.fromEpochSeconds ( _epochSeconds_ )",
  "Temporal.Instant.from ( _item_ )",
  "Temporal.Instant.prototype.add ( _temporalDurationLike_ )",
  "Temporal.Instant.prototype.equals ( _other_ )",
  "Temporal.Instant.prototype.round ( _options_ )",
  "Temporal.Instant.prototype.since ( _other_ [ , _options_ ] )",
  "Temporal.Instant.prototype.subtract ( _temporalDurationLike_ )",
  "Temporal.Instant.prototype.toJSON ( )",
  "Temporal.Instant.prototype.toLocaleString ( [ _locales_ [ , _options_ ] ] )",
  "Temporal.Instant.prototype.toString ( [ _options_ ] )",
  "Temporal.Instant.prototype.toZonedDateTimeISO ( _item_ )",
  "Temporal.Instant.prototype.toZonedDateTime ( _item_ )",
  "Temporal.Instant.prototype.until ( _other_ [ , _options_ ] )",
  "Temporal.Instant.prototype.valueOf ( )",
  "Temporal.Now.instant ( )",
  "Temporal.Now.plainDate ( _calendar_ [ , _temporalTimeZoneLike_ ] )",
  "Temporal.Now.plainDateISO ( [ _temporalTimeZoneLike_ ] )",
  "Temporal.Now.plainDateTime ( _calendar_ [ , _temporalTimeZoneLike_ ] )",
  "Temporal.Now.plainDateTimeISO ( [ _temporalTimeZoneLike_ ] )",
  "Temporal.Now.plainTimeISO ( [ _temporalTimeZoneLike_ ] )",
  "Temporal.Now.timeZone ( )",
  "Temporal.Now.zonedDateTime ( _calendar_ [ , _temporalTimeZoneLike_ ] )",
  "Temporal.Now.zonedDateTimeISO ( [ _temporalTimeZoneLike_ ] )",
  "Temporal.PlainDate.compare ( _one_, _two_ )",
  "Temporal.PlainDate.from ( _item_ [ , _options_ ] )",
  "Temporal.PlainDate ( _isoYear_, _isoMonth_, _isoDay_ [ , _calendarLike_ ] )",
  "Temporal.PlainDate.prototype.add ( _temporalDurationLike_ [ , _options_ ] )",
  "Temporal.PlainDate.prototype.equals ( _other_ )",
  "Temporal.PlainDate.prototype.getISOFields ( )",
  "Temporal.PlainDate.prototype.since ( _other_ [ , _options_ ] )",
  "Temporal.PlainDate.prototype.subtract ( _temporalDurationLike_ [ , _options_ ] )",
  "Temporal.PlainDate.prototype.toJSON ( )",
  "Temporal.PlainDate.prototype.toLocaleString ( [ _locales_ [ , _options_ ] ] )",
  "Temporal.PlainDate.prototype.toPlainDateTime ( [ _temporalTime_ ] )",
  "Temporal.PlainDate.prototype.toPlainMonthDay ( )",
  "Temporal.PlainDate.prototype.toPlainYearMonth ( )",
  "Temporal.PlainDate.prototype.toString ( [ _options_ ] )",
  "Temporal.PlainDate.prototype.toZonedDateTime ( _item_ )",
  "Temporal.PlainDate.prototype.until ( _other_ [ , _options_ ] )",
  "Temporal.PlainDate.prototype.valueOf ( )",
  "Temporal.PlainDate.prototype.withCalendar ( _calendar_ )",
  "Temporal.PlainDate.prototype.with ( _temporalDateLike_ [ , _options_ ] )",
  "Temporal.PlainDateTime.compare ( _one_, _two_ )",
  "Temporal.PlainDateTime.from ( _item_ [ , _options_ ] )",
  "Temporal.PlainDateTime ( _isoYear_, _isoMonth_, _isoDay_ [ , _hour_ [ , _minute_ [ , _second_ [ , _millisecond_ [ , _microsecond_ [ , _nanosecond_ [ , _calendarLike_ ] ] ] ] ] ] ] )",
  "Temporal.PlainDateTime.prototype.add ( _temporalDurationLike_ [ , _options_ ] )",
  "Temporal.PlainDateTime.prototype.equals ( _other_ )",
  "Temporal.PlainDateTime.prototype.getISOFields ( )",
  "Temporal.PlainDateTime.prototype.round ( _options_ )",
  "Temporal.PlainDateTime.prototype.since ( _other_ [ , _options_ ] )",
  "Temporal.PlainDateTime.prototype.subtract ( _temporalDurationLike_ [ , _options_ ] )",
  "Temporal.PlainDateTime.prototype.toJSON ( )",
  "Temporal.PlainDateTime.prototype.toLocaleString ( [ _locales_ [ , _options_ ] ] )",
  "Temporal.PlainDateTime.prototype.toPlainDate ( )",
  "Temporal.PlainDateTime.prototype.toPlainMonthDay ( )",
  "Temporal.PlainDateTime.prototype.toPlainTime ( )",
  "Temporal.PlainDateTime.prototype.toPlainYearMonth ( )",
  "Temporal.PlainDateTime.prototype.toString ( [ _options_ ] )",
  "Temporal.PlainDateTime.prototype.toZonedDateTime ( _temporalTimeZoneLike_ [ , _options_ ] )",
  "Temporal.PlainDateTime.prototype.until ( _other_ [ , _options_ ] )",
  "Temporal.PlainDateTime.prototype.valueOf ( )",
  "Temporal.PlainDateTime.prototype.withCalendar ( _calendar_ )",
  "Temporal.PlainDateTime.prototype.withPlainDate ( _plainDateLike_ )",
  "Temporal.PlainDateTime.prototype.withPlainTime ( [ _plainTimeLike_ ] )",
  "Temporal.PlainDateTime.prototype.with ( _temporalDateTimeLike_ [ , _options_ ] )",
  "Temporal.PlainMonthDay.from ( _item_ [ , _options_ ] )",
  "Temporal.PlainMonthDay ( _isoMonth_, _isoDay_ [ , _calendarLike_ [ , _referenceISOYear_ ] ] )",
  "Temporal.PlainMonthDay.prototype.equals ( _other_ )",
  "Temporal.PlainMonthDay.prototype.getISOFields ( )",
  "Temporal.PlainMonthDay.prototype.toJSON ( )",
  "Temporal.PlainMonthDay.prototype.toLocaleString ( [ _locales_ [ , _options_ ] ] )",
  "Temporal.PlainMonthDay.prototype.toPlainDate ( _item_ )",
  "Temporal.PlainMonthDay.prototype.toString ( [ _options_ ] )",
  "Temporal.PlainMonthDay.prototype.valueOf ( )",
  "Temporal.PlainMonthDay.prototype.with ( _temporalMonthDayLike_ [ , _options_ ] )",
  "Temporal.PlainTime.compare ( _one_, _two_ )",
  "Temporal.PlainTime.from ( _item_ [ , _options_ ] )",
  "Temporal.PlainTime ( [ _hour_ [ , _minute_ [ , _second_ [ , _millisecond_ [ , _microsecond_ [ , _nanosecond_ ] ] ] ] ] ] )",
  "Temporal.PlainTime.prototype.add ( _temporalDurationLike_ )",
  "Temporal.PlainTime.prototype.equals ( _other_ )",
  "Temporal.PlainTime.prototype.getISOFields ( )",
  "Temporal.PlainTime.prototype.round ( _options_ )",
  "Temporal.PlainTime.prototype.since ( _other_ [ , _options_ ] )",
  "Temporal.PlainTime.prototype.subtract ( _temporalDurationLike_ )",
  "Temporal.PlainTime.prototype.toJSON ( )",
  "Temporal.PlainTime.prototype.toLocaleString ( [ _locales_ [ , _options_ ] ] )",
  "Temporal.PlainTime.prototype.toPlainDateTime ( _temporalDate_ )",
  "Temporal.PlainTime.prototype.toString ( [ _options_ ] )",
  "Temporal.PlainTime.prototype.toZonedDateTime ( _item_ )",
  "Temporal.PlainTime.prototype.until ( _other_ [ , _options_ ] )",
  "Temporal.PlainTime.prototype.valueOf ( )",
  "Temporal.PlainTime.prototype.with ( _temporalTimeLike_ [ , _options_ ] )",
  "Temporal.PlainYearMonth.compare ( _one_, _two_ )",
  "Temporal.PlainYearMonth.from ( _item_ [ , _options_ ] )",
  "Temporal.PlainYearMonth ( _isoYear_, _isoMonth_ [ , _calendarLike_ [ , _referenceISODay_ ] ] )",
  "Temporal.PlainYearMonth.prototype.add ( _temporalDurationLike_ [ , _options_ ] )",
  "Temporal.PlainYearMonth.prototype.equals ( _other_ )",
  "Temporal.PlainYearMonth.prototype.getISOFields ( )",
  "Temporal.PlainYearMonth.prototype.since ( _other_ [ , _options_ ] )",
  "Temporal.PlainYearMonth.prototype.subtract ( _temporalDurationLike_ [ , _options_ ] )",
  "Temporal.PlainYearMonth.prototype.toJSON ( )",
  "Temporal.PlainYearMonth.prototype.toLocaleString ( [ _locales_ [ , _options_ ] ] )",
  "Temporal.PlainYearMonth.prototype.toPlainDate ( _item_ )",
  "Temporal.PlainYearMonth.prototype.toString ( [ _options_ ] )",
  "Temporal.PlainYearMonth.prototype.until ( _other_ [ , _options_ ] )",
  "Temporal.PlainYearMonth.prototype.valueOf ( )",
  "Temporal.PlainYearMonth.prototype.with ( _temporalYearMonthLike_ [ , _options_ ] )",
  "Temporal.TimeZone.from ( _item_ )",
  "Temporal.TimeZone ( _identifier_ )",
  "Temporal.TimeZone.prototype.getInstantFor ( _dateTime_ [ , _options_ ] )",
  "Temporal.TimeZone.prototype.getNextTransition ( _startingPoint_ )",
  "Temporal.TimeZone.prototype.getOffsetNanosecondsFor ( _instant_ )",
  "Temporal.TimeZone.prototype.getOffsetStringFor ( _instant_ )",
  "Temporal.TimeZone.prototype.getPlainDateTimeFor ( _instant_ [ , _calendarLike_ ] )",
  "Temporal.TimeZone.prototype.getPossibleInstantsFor ( _dateTime_ )",
  "Temporal.TimeZone.prototype.getPreviousTransition ( _startingPoint_ )",
  "Temporal.TimeZone.prototype.toJSON ( )",
  "Temporal.TimeZone.prototype.toString ( )",
  "Temporal.ZonedDateTime.compare ( _one_, _two_ )",
  "Temporal.ZonedDateTime ( _epochNanoseconds_, _timeZoneLike_ [ , _calendarLike_ ] )",
  "Temporal.ZonedDateTime.from ( _item_ [ , _options_ ] )",
  "Temporal.ZonedDateTime.prototype.add ( _temporalDurationLike_ [ , _options_ ] )",
  "Temporal.ZonedDateTime.prototype.equals ( _other_ )",
  "Temporal.ZonedDateTime.prototype.getISOFields ( )",
  "Temporal.ZonedDateTime.prototype.round ( _options_ )",
  "Temporal.ZonedDateTime.prototype.since ( _other_ [ , _options_ ] )",
  "Temporal.ZonedDateTime.prototype.startOfDay ( )",
  "Temporal.ZonedDateTime.prototype.subtract ( _temporalDurationLike_ [ , _options_ ] )",
  "Temporal.ZonedDateTime.prototype.toInstant ( )",
  "Temporal.ZonedDateTime.prototype.toJSON ( )",
  "Temporal.ZonedDateTime.prototype.toLocaleString ( [ _locales_ [ , _options_ ] ] )",
  "Temporal.ZonedDateTime.prototype.toPlainDate ( )",
  "Temporal.ZonedDateTime.prototype.toPlainDateTime ( )",
  "Temporal.ZonedDateTime.prototype.toPlainMonthDay ( )",
  "Temporal.ZonedDateTime.prototype.toPlainTime ( )",
  "Temporal.ZonedDateTime.prototype.toPlainYearMonth ( )",
  "Temporal.ZonedDateTime.prototype.toString ( [ _options_ ] )",
  "Temporal.ZonedDateTime.prototype.until ( _other_ [ , _options_ ] )",
  "Temporal.ZonedDateTime.prototype.valueOf ( )",
  "Temporal.ZonedDateTime.prototype.withCalendar ( _calendarLike_ )",
  "Temporal.ZonedDateTime.prototype.withPlainDate ( _plainDateLike_ )",
  "Temporal.ZonedDateTime.prototype.withPlainTime ( [ _plainTimeLike_ ] )",
  "Temporal.ZonedDateTime.prototype.with ( _temporalZonedDateTimeLike_ [ , _options_ ] )",
  "Temporal.ZonedDateTime.prototype.withTimeZone ( _timeZoneLike_ )",
];

// Find out the minimum number of arguments of that function
function numberOfArgs(tokens) {
  let argc = 0;
  for (i = 2; i < tokens.length; i++) {
    if (tokens[i] == "["  || tokens[i] == ")") {
      return argc;
    }
    if (tokens[i] != ",") {
      argc++;
    }
  }
}
funcs.forEach(function(line) {
  let tokens = line.split(" ");
  if (tokens[0] == "get") {
    let lastDot = tokens[1].lastIndexOf(".");
    let prototype = eval(tokens[1].substring(0, lastDot));
    let property = tokens[1].substring(lastDot + 1);
    let desc = Object.getOwnPropertyDescriptor(prototype, property);
    assertNotEquals(desc, undefined, "Getter should be defined:" + line);
    assertEquals(desc.set, undefined, "Setter should NOT be defined:" + line);
  } else {
    let obj = eval(tokens[0]);
    // Verify the method is defined
    assertNotEquals(obj, undefined,
        "Method should be defined:" + line);

    // Verify the number of minimum arguments.
    assertEquals(obj.length, numberOfArgs(tokens),
        "Method should be defined with " + numberOfArgs(tokens) +
        " arguments but got " + obj.length + " arguments:\n" +line);
  }
});
