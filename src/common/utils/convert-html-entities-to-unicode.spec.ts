const { convertHtmlEntitiesToUnicode } = require('./convert-html-entities-to-unicode');

describe('convertHtmlEntitiesToUnicode utility', () => {
  it('', () => {
    const scenarios = [
      {
        str: 'abc',
        result: 'abc',
      },
      {
        str: '&#x27;',
        result: '\u0027',
      },
      {
        str: 'foo&#x3C;poo',
        result: 'foo\u003Cpoo',
      },
    ];

    scenarios.forEach(({ str, result }) => {
      expect(convertHtmlEntitiesToUnicode(str)).toEqual(result);
    });
  });
});
