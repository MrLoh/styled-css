const transform = require('css-to-react-native').default;

const css = (strings, ...expressions) => {
  // evaluate expressions in template literal
  const cssString = strings
    .map((str, i) => {
      let exp = expressions.length > i ? expressions[i] : '';
      return str + exp;
    })
    .join('');
  // create react native styles
  return transform(
    cssString
      .split(';')
      .map((rule) =>
        rule
          .split(':')
          .map((value) => value.trim())
          .filter((value) => value)
      )
      .filter((rule) => rule.length > 0)
  );
};

module.exports = css;
