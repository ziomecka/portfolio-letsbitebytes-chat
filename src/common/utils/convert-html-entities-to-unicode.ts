const entitiesToUnicode = new Map([
  [ '&#38;', '\u0026' ], // &
  [ '&#x3C;', '\u003C' ], // <
  [ '&#x3E;', '\u003E' ], // >
  [ '&#34;', '\u0022' ],
  [ '&#39;', '\u0027' ], // '
  [ '&#47;', '\u002F' ], // /
  [ '&#x27;', '\u0027' ], // '
  [ '&#x22;', '\u0022' ], // "
]);

export const convertHtmlEntitiesToUnicode
= (str: string, table: Map<string, string> = entitiesToUnicode): string => {
  let newStr = str;

  // todo - write function to avoid using the map
  Array.from(table.keys()).forEach(key => {
    newStr = newStr.replace(new RegExp(key, 'gi'), table.get(key));
  });

  return newStr;

};
