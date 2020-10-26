import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import LinkIcon from './LinkIcon';
import getSlug from './getSlug';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    typography: {
      '& > svg': {
        marginLeft: theme.spacing(1),
      },
      alignItems: 'center',
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'center',
      margin: theme.spacing(0.75),
    },
  })
);

const H2: React.FC = ({ children }) => {
  const classes = useStyles();
  const [isHovering, setHovering] = useState(false);
  const to = children && typeof children === 'string' ? `#${getSlug(children)}` : '#';
  return (
    <Typography
      className={classes.typography}
      onMouseEnter={(): void => setHovering(true)}
      onMouseLeave={(): void => setHovering(false)}
      variant="h2"
    >
      <Link to={to}>{children}</Link>
      {isHovering ? <LinkIcon /> : null}
    </Typography>
  );
};

export default H2;
