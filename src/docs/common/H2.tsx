import { Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import clsx from 'clsx';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import getSlug from './getSlug';
import LinkIcon from './LinkIcon';

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

const H2: React.FC<{ className?: string; to?: string }> = ({ children, className, to: rootTo }) => {
  const classes = useStyles();
  const [isHovering, setHovering] = useState(false);
  const slug = rootTo ? rootTo : children && typeof children === 'string' && getSlug(children);
  const to = rootTo || `#${slug}`;
  return (
    <Typography
      className={clsx(classes.typography, className)}
      onMouseEnter={(): void => setHovering(true)}
      onMouseLeave={(): void => setHovering(false)}
      variant="h2"
      {...(slug && { id: slug })}
    >
      <Link to={to}>{children}</Link>
      {isHovering ? <LinkIcon /> : null}
    </Typography>
  );
};

export default H2;
