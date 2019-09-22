import { buildUrl } from '../build-url';

const url = 'https://some.url.foo';

const scenarios = [
  {
    queryParams: {
    },
    result: `${ url }`,
  },
  {
    queryParams: {
      login: 'foo',
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
  {
    queryParams: {
      poo: '<script>foo</script>',
    },
    result: `${ url }?poo=%3Cscript%3Efoo%3C%2Fscript%3E`,
  },
];

describe('build query params', () => {
  it('returns correct url', () => {
    scenarios.forEach(scenario => {
      expect(buildUrl(url, scenario.queryParams)).toEqual(scenario.result);
    });
  });
});
