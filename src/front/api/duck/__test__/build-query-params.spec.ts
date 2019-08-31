import { buildQueryParams } from '../build-query-params';

const url = 'https://some.url.foo';

const scenarios = [
  {
    queryParams: {
    },
    result: `${ url }`,
  },
  {
    queryParams: {
      login: 'foo'
    },
    result: `${ url }?login=foo`,
  },
  {
    queryParams: {
      foo: 123,
      bar: '',
    },
    result: `${ url }?foo=123&bar=`,
  },
  {
    queryParams: {
      bar: 'foo%bar&',
    },
    result: `${ url }?bar=foo%25bar%26`,
  },
];

describe('build query params', () => {
  it('returns correct url', () => {
    scenarios.forEach( scenario => {
      expect(buildQueryParams(url, scenario.queryParams)).toEqual(scenario.result);
    });
  });
});