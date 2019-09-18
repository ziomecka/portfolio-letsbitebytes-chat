const {
  LOGIN_REGEXP,
  PASSWORD_REGEXP,
} = require('../constants');

describe.only('Login regexp', () => {
  const scenarios = [
    {
      value: '',
      result: false,
    },
    {
      value: 'd',
      result: false,
    },
    {
      value: 'dddddd',
      result: true,
    },
    {
      value: 'ddddddd',
      result: true,
    },
    {
      value: 'dddddddddd',
      result: true,
    },
    {
      value: 'ddddddddddd',
      result: false,
    },
    {
      value: 'd2dddd',
      result: true,
    },
    {
      value: '2ddddd',
      result: false,
    },
    {
      value: 'd22222',
      result: true,
    },
  ];

  for (const { value, result } of scenarios) {
    it(`returns ${ result } for ${ value }`, () => {
      expect(LOGIN_REGEXP.test(value)).toBe(result);
    });
  };
});

describe.only('Password regexp', () => {
  const scenarios = [
    {
      value: '',
      result: false,
    },
    {
      value: 'd',
      result: false,
    },
    {
      value: 'd2dddd',
      result: false,
    },
    {
      value: '!d2dd',
      result: false,
    },
    {
      value: '!d2ddd',
      result: true,
    },
    {
      value: 'd!d2dddd',
      result: true,
    },
    {
      value: 'dd2dddd!',
      result: true,
    },
    {
      value: 'dd2dddd!ddd',
      result: false,
    },
  ];

  for (const { value, result } of scenarios) {
    it(`returns ${ result } for ${ value }`, () => {
      expect(PASSWORD_REGEXP.test(value)).toBe(result);
    });
  };
});
