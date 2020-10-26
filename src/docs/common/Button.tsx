import React from 'react';
import MuiButton from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(2),
    },
  })
);

const Button: React.FC<{ to?: string }> = ({ children, to }) => {
  const classes = useStyles();
  const toProps = to
    ? {
        component: Link,
        to,
      }
    : {};
  return (
    <MuiButton {...toProps} className={classes.button} color="primary" variant="contained">
      {children}
    </MuiButton>
  );
};

export default Button;
