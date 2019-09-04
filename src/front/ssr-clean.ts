import {
  SSR_STYLE_ROOT_ID,
} from '../common/';

const ssrHtmlNodes = [
  {
    selector: `head style#${ SSR_STYLE_ROOT_ID }`,
    parentNode: 'head',
  },
];

export const ssrClean= (htmlNodes: { selector: string, parentNode: string }[] = ssrHtmlNodes): void => {
  htmlNodes.forEach( ({ selector, parentNode }): void => {
    const $element = document.querySelector(selector);
    const $parentNode = document.querySelector(parentNode);

    if ($element && $parentNode) {
      $parentNode.removeChild($element);
    }
  });
};