import React, { useCallback, useState } from 'react';
import Button from '@material-ui/core/Button';
import FilterIcon from '@material-ui/icons/FilterList';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import filterEmpty from '../../lib';
import H1 from '../common/H1';
import H3 from '../common/H3';
import Main from '../common/Main';
import Section from '../common/Section';
import Pre from '../common/Pre';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(2),
    },
    icon: {
      fontSize: theme.spacing(25),
      stroke: theme.palette.common.white,
      strokeWidth: 1.8,
    },
  })
);

function HomePage() {
  const classes = useStyles();
  const [textFieldValue, setTextFieldValue] = useState('');
  const [filteredValue, setFilteredValue] = useState(null);
  const handleClick = useCallback(() => {
    const filtered = filterEmpty(textFieldValue);
    setFilteredValue(filtered);
  }, [textFieldValue]);
  return (
    <Main justifyContent="center">
      <Section alignItems="center">
        <FilterIcon className={classes.icon} />
        <H1 textAlign="center">Demo</H1>
        <H3 textAlign="center">Enter an object to be filtered</H3>
        <TextField
          id="object-value"
          label="Multiline"
          multiline
          onChange={(e): void => setTextFieldValue(e.target.value)}
          rowsMax={4}
          value={textFieldValue}
          variant="filled"
        />
        <Button className={classes.button} onClick={handleClick}>
          Submit
        </Button>
        <Pre>{filteredValue}</Pre>
      </Section>
    </Main>
  );
}

export default HomePage;
