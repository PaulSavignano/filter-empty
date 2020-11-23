import Box, { BoxProps } from '@material-ui/core/Box';
import React from 'react';

const P: React.FC<BoxProps> = ({
  component = 'p',
  fontFamily = 'p.fontFamily',
  fontSize = 'p.fontSize',
  fontStyle = 'p.fontStyle',
  fontWeight = 'p.fontWeight',
  letterSpacing = 'p.letterSpacing',
  margin = 1,
  ...rest
}) => (
  <Box
    {...rest}
    component={component}
    fontFamily={fontFamily}
    fontSize={fontSize}
    fontStyle={fontStyle}
    fontWeight={fontWeight}
    letterSpacing={letterSpacing}
    margin={margin}
  />
);

export default P;
