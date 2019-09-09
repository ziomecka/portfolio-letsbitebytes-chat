export const buildQueryParams = (url: string, params: unknown): string => (
  `${ url }?${
    Object.entries(params as Record<string, string>)
      .map(([ key, value ]) => `${ key }=${ value || undefined }`).join('&')
  }`
);
