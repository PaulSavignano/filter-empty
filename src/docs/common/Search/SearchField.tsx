import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Clear from '@material-ui/icons/Clear';
import IconSearch from '@material-ui/icons/Search';
import React, { useCallback, useContext, useRef } from 'react';

import SearchContext from './SearchContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    SearchField: {
      color: theme.palette.common.white,
      display: 'flex',
      flex: '1 1 auto',
      flexFlow: 'row nowrap',
      marginLeft: -20,
    },
    icon: {
      color: 'rgb(255,255,255)',
    },
    input: {
      ...theme.typography.body1,
      flex: '1 1 auto',
    },
  })
);

const SearchField: React.FC = () => {
  const { q, setSearchOpen, setSearchQ, setSearchResults2 } = useContext(SearchContext);
  const classes = useStyles();
  const timeoutId = useRef<NodeJS.Timeout | null>(null);
  const onChange = useCallback(
    (e) => {
      timeoutId && timeoutId.current && clearTimeout(timeoutId.current);
      timeoutId.current = null;
      setSearchQ(e.target.value);
      const nextTimeoutId = setTimeout(() => {
        timeoutId && timeoutId.current && clearTimeout(timeoutId.current);
        timeoutId.current = null;
        setSearchResults2();
      }, 1000);
      timeoutId.current = nextTimeoutId;
    },
    [setSearchQ, setSearchResults2]
  );
  return (
    <span className={classes.SearchField}>
      <IconButton>
        <IconSearch className={classes.icon} />
      </IconButton>
      <Input
        autoFocus={true}
        className={classes.input}
        disableUnderline={true}
        inputProps={{ className: classes.icon }}
        onChange={onChange}
        placeholder="Search"
        value={q}
      />
      <IconButton onClick={(): void => setSearchOpen(false)}>
        <Clear className={classes.icon} />
      </IconButton>
    </span>
  );
};

export default SearchField;
