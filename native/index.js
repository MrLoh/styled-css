import transform from 'css-to-react-native';

const css = (strings, ...expressions) => (props) => {
  // evaluate expressions in template literal
  const cssString = strings
    .map((str, i) => {
      let exp = expressions.length > i ? expressions[i] : '';
      exp = typeof exp === 'function' ? exp(props) : exp;
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

export default css;
