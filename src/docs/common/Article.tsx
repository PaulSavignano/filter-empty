import React from 'react';
import Box, { BoxProps } from '@material-ui/core/Box';

const Article: React.FC<BoxProps> = ({ flexDirection = 'column', ...rest }) => (
  <Box {...rest} component="article" display="flex" flexDirection={flexDirection} />
);

export default Article;
