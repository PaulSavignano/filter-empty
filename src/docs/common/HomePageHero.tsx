import Button from '@material-ui/core/Button';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { Link } from 'react-router-dom';

import pkg from '../../../package.json';
import BrandIcon from '../BrandIcon';
import Badges from '../common/Badges';
import H1 from '../common/H1';
import H3 from '../common/H3';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(2),
    },
    icon: {
      fontSize: theme.spacing(25),
      stroke: theme.palette.common.white,
      strokeWidth: 1.6,
    },
    root: {
      alignItems: 'center',
      display: 'flex',
      flex: '1 1 100%',
      flexFlow: 'column',
      justifyContent: 'center',
      padding: 8,
    },
  })
);

function HomePageHero(): React.ReactElement {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BrandIcon className={classes.icon} />
      <H1 textAlign="center">{pkg.name}</H1>
      <H3 textAlign="center">{pkg.description}</H3>
      <Button
        className={classes.button}
        color="primary"
        component={Link}
        to="/getting-started"
        variant="contained"
      >
        Get Started
      </Button>
      <Badges />
    </div>
  );
}

export default HomePageHero;
