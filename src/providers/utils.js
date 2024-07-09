export const mergeCls = (...args) => args.join(' ');

export const mergePseudoCls = (selector, strArray) => strArray.map(item => `${selector}:${item}`).join(' ');