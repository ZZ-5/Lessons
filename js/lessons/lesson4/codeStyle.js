"user strict";
// Шпаргалка: https://learn.javascript.ru/coding-style
// Общие правила по стилю кода,

// 1. Фигурные скобки на каждый блок, даже если можно их опустить
// 2. Точка с запятой в конце строки (можно и без)
// 3. Отступы: пробелы или табуляция

// Пример:
// let sayHi = function func(who) {
//   if (who) {
//     alert(`Hello, ${who}`);
//   } else {
//     func("Guest");
//   }
// };

// 4. Названия файлов: snakeCase
// 5. названия переменных и функций: snakeCase
// 6. Названия React компонентов:  CamelCase
// 7. Названия папок для React компонентов: CamelCase
// 8. Названия классов: CamelCase

// Линтеры - инструменты, которые автоматически анализируют твой код и указывают на ошибки при его написании

// eslint: анализирует js, подсказывает ошибки. Конфигурация правил задается в файле .eslintrc.[json/js/yml] https://eslint.org/
// tslint: анализирует ts, подсказывает ошибки. Конфигурация правил задается в файле tslint.[json/yml] https://palantir.github.io/tslint/

// Инструменты форматирования
// prettier - умеет форматировать ваш код в соответствии с заданной конфигурации. "Подстраивается" по правила eslist и форматирует код в соответствии с ними

// Комментирование -

// - однострочное

// многострочное:

/*
asdfasdfasdf
asdfasdfasdfasdfadsf
adfadf
*/