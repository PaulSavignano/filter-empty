import Box, { BoxProps } from '@material-ui/core/Box';
import React from 'react';

const H1: React.FC<BoxProps> = ({
  component = 'h1',
  fontFamily = 'h3.fontFamily',
  fontSize = 'h3.fontSize',
  fontStyle = 'h3.fontStyle',
  fontWeight = 'h3.fontWeight',
  letterSpacing = 'h3.letterSpacing',
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

export default H1;
