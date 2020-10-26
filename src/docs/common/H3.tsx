import React from 'react';
import Box, { BoxProps } from '@material-ui/core/Box';

const H3: React.FC<BoxProps> = ({
  component = 'h3',
  fontFamily = 'h5.fontFamily',
  fontSize = 'h5.fontSize',
  fontStyle = 'h5.fontStyle',
  fontWeight = 'h5.fontWeight',
  letterSpacing = 'h5.letterSpacing',
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

export default H3;
