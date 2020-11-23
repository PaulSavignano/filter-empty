import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    icon: {
      fontSize: theme.spacing(25),
      stroke: theme.palette.common.white,
      strokeWidth: 1.6,
    },
  })
);

const HeroIcon: React.FC = ({ children }) => {
  const classes = useStyles();
  const Icon = children as React.FC<{ className: string }>;
  return (
    <>
      <Icon className={classes.icon} />
    </>
  );
};

export default HeroIcon;
