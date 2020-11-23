import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    code: {
      color: theme.palette.common.white,
      fontSize: 'inherit',
    },
    pre: {
      fontSize: 'inherit',
    },
  })
);

const Pre: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <pre className={classes.pre}>
      <code className={classes.code}>{children}</code>
    </pre>
  );
};

export default Pre;
