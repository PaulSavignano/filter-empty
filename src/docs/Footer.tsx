import React from 'react';
import Box from '@material-ui/core/Box';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import CodeIcon from '@material-ui/icons/Code';
import PlayIcon from '@material-ui/icons/PlayArrow';

import IconButton from './common/IconButton';

const useStyles = makeStyles((theme) =>
  createStyles({
    Typography: {
      '& > *': {
        margin: theme.spacing(1),
      },
      alignItems: 'center',
      display: 'flex',
      flexFlow: 'row nowrap',
      textDecoration: 'none',
    },
    brand: {
      alignItems: 'center',
      display: 'flex',
      flexFlow: 'row nowrap',
    },
    brandIcon: {
      fontSize: '1.3rem',
      marginRight: theme.spacing(0.5),
    },
    nav: {
      alignItems: 'center',
      display: 'flex',
      flexFlow: 'row nowrap',
    },
  })
);

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <Box
      alignItems="center"
      bgcolor="primary.main"
      boxShadow={4}
      color="common.white"
      component="footer"
      display="flex"
      flexDirection="column"
      padding={4}
    >
      <div className={classes.nav}>
        <IconButton title="Demo" to="/demo">
          <PlayIcon />
        </IconButton>
        <IconButton title="Api" to="/api">
          <CodeIcon />
        </IconButton>
      </div>
      <Typography className={classes.Typography} color="inherit" component={Link} to="/">
        ©
        <span className={classes.brand}>
          <QuestionAnswerIcon className={classes.brandIcon} />
          Trivia
        </span>
        {`${new Date().getFullYear()}.`}
      </Typography>
    </Box>
  );
};

export default Footer;
