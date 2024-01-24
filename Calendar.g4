/*
 * Пример текста на вход:
 * Запланируй 'Название события' 21.03.2024 в 15:30
 * Запланируй 'Название события' 21.03.2024
 * Запланируй 'Название события' каждые 3 дня
 * Запланируй 'Название события' каждый понедельник
 */

grammar Calendar;

/*
 * Parser Rules
 */

calendar            : line+ EOF ;

line                : beginning name WHITESPACE (single_event | periodical_event) NEWLINE?;

single_event        : date WHITESPACE? (AT time)?;

periodical_event    : every WHITESPACE (period | week_day) WHITESPACE? (AT time)?;

every               : КАЖДЫЙ | КАЖДУЮ | КАЖДОЕ | КАЖДЫЕ;

period              : NUMBER WHITESPACE DAYS;

week_day            : MONDAY | TUESDAY | WEDNESDAY | THURSDAY | FRIDAY | SATURDAY | SUNDAY ;

beginning           : ЗАПЛАНИРУЙ WHITESPACE;

name                : '\'' (NUMBER | WORD | WHITESPACE)+ '\'';

date                : day '.' month '.' year;

day                 : NUMBER;

month               : NUMBER;

year                : NUMBER;

time                : hour ':' minute WHITESPACE?;

hour                : NUMBER;

minute              : NUMBER;

AT                  : В WHITESPACE;

/*
 * Lexer Rules
 */

fragment З          : ('З'|'з') ;
fragment А          : ('А'|'а') ;
fragment П          : ('П'|'п') ;
fragment Л          : ('Л'|'л') ;
fragment Н          : ('Н'|'н') ;
fragment И          : ('И'|'и') ;
fragment Р          : ('Р'|'р') ;
fragment У          : ('У'|'у') ;
fragment Й          : ('Й'|'й') ;
fragment В          : ('В'|'в') ;
fragment К          : ('К'|'к') ;
fragment Ж          : ('Ж'|'ж') ;
fragment Д          : ('Д'|'д') ;
fragment Ю          : ('Ю'|'ю') ;
fragment О          : ('О'|'о') ;
fragment Е          : ('Е'|'е') ;
fragment Ы          : ('Ы'|'ы') ;
fragment Ь          : ('Ь'|'ь') ;
fragment Т          : ('Т'|'т') ;
fragment С          : ('С'|'с') ;
fragment Ч          : ('Ч'|'ч') ;
fragment Г          : ('Г'|'г') ;
fragment Я          : ('Я'|'я') ;
fragment Ц          : ('Ц'|'ц') ;
fragment Б          : ('Б'|'б') ;

fragment LOWERCASE  : [a-zа-яё] ;
fragment UPPERCASE  : [A-ZА-ЯЁ] ;

fragment DIGIT      : [0-9] ;

ЗАПЛАНИРУЙ          : З А П Л А Н И Р У Й ;

КАЖДЫЙ              : К А Ж Д Ы Й ;

КАЖДУЮ              : К А Ж Д У Ю ;

КАЖДОЕ              : К А Ж Д О Е ;

КАЖДЫЕ              : К А Ж Д Ы Е ;

NUMBER              : DIGIT+ ([,] DIGIT+)? ;

MONDAY              : П О Н Е Д Е Л Ь Н И К ;

TUESDAY             : В Т О Р Н И К ;

WEDNESDAY           : С Р Е Д У | С Р Е Д А ;

THURSDAY            : Ч Е Т В Е Р Г ;

FRIDAY              : П Я Т Н И Ц У | П Я Т Н И Ц А ;

SATURDAY            : С У Б Б О Т У | С У Б Б О Т А ;

SUNDAY              : В О С К Р Е С Е Н Ь Е ;

DAYS                : Д Е Н Ь | Д Н Я | Д Н Е Й ;

WORD                : (LOWERCASE | UPPERCASE | '_')+ ;

WHITESPACE          : (' ' | '\t') ;

NEWLINE             : ('\r'? '\n' | '\r')+ ;

TEXT                : ('['|'(') ~[\])]+ (']'|')');