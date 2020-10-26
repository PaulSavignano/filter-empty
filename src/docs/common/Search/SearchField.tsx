import React, { useCallback, useContext, useRef } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Clear from '@material-ui/icons/Clear';
import IconSearch from '@material-ui/icons/Search';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

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
  const { setSearchOpen, setSearchQ, setSearchResults, q } = useContext(SearchContext);
  const classes = useStyles();
  const timeoutId = useRef<NodeJS.Timeout | null>(null);
  const onChange = useCallback(
    (e) => {
      timeoutId && timeoutId.current && clearTimeout(timeoutId.current);
      setSearchQ(e.target.value);
      const nextTimeoutId = setTimeout(() => {
        timeoutId && timeoutId.current && clearTimeout(timeoutId.current);
        timeoutId.current = null;
        setSearchResults();
      }, 1000);
      timeoutId.current = nextTimeoutId;
    },
    [setSearchQ, setSearchResults]
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
