# styled-css

This package simply exports a tagged template literal to use [styled-components]() like css syntax for react native inline styles.

For example:

```js
import styled from 'styled-components/native';
import css from 'styled-css/native';

const Wrapper = styled.ScrollView.attrs({
  contentContainerStyle: css`
    align-items: center;
    justify-content: center;
    padding-top: ${(p) => p.theme.margin}px;
  `,
})`
  flex: 1;
  background-color: ${(p) => p.theme.colors.background};
`;
```
