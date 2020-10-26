import React from 'react';
import Box, { BoxProps } from '@material-ui/core/Box';
import Fade from '@material-ui/core/Fade';

const Main: React.FC<BoxProps> = ({
  children,
  component = 'main',
  flexDirection = 'column',
  ...rest
}) => (
  <Fade in>
    <Box
      {...rest}
      component={component}
      display="flex"
      flexDirection={flexDirection}
      marginLeft="auto"
      marginRight="auto"
      role="main"
    >
      {children}
    </Box>
  </Fade>
);

export default Main;
