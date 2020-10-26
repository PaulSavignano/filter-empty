import React from 'react';
import Box, { BoxProps } from '@material-ui/core/Box';

const Section: React.FC<BoxProps> = ({
  component = 'section',
  flexDirection = 'column',
  alignItems = 'flex-start',
  ...rest
}) => (
  <Box
    {...rest}
    alignItems={alignItems}
    component={component}
    display="flex"
    flexDirection={flexDirection}
    paddingY={1}
  />
);

export default Section;
