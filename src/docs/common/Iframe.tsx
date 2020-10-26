import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const Pre: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} elevation={4}>
      <iframe
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
        src={children as string}
        style={{ border: 0, borderRadius: 4, height: 500, overflow: 'hidden', width: '100%' }}
        title="filter-empty typescript"
      />
    </Paper>
  );
};

export default Pre;
