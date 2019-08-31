// TODO encode special charachters
export const buildQueryParams = (url: string, params: unknown): string => {
  const queries = Object.entries(params as Record<string, string>);

  return queries.length
    ? `${ url }?${ queries.map(([ key, value ]) => `${ encodeURIComponent(key) }=${ encodeURIComponent(value) }`).join('&') }`
    : url;
};