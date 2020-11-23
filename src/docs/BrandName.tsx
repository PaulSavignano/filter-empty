import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

import pkg from '../../package.json';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    brandContainer: {
      alignItems: 'center',
      color: theme.palette.common.white,
      display: 'flex',
      flexFlow: 'row nowrap',
      textDecoration: 'none',
    },
  })
);

function BrandName(): React.ReactElement {
  const classes = useStyles();
  return (
    <Typography color="inherit" noWrap variant="h6">
      <Link className={classes.brandContainer} to="/">
        {pkg.name}
      </Link>
    </Typography>
  );
}

export default BrandName;
