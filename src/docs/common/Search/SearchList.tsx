import { makeStyles } from '@material-ui/core/styles';
import React, { useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import componentMap from '../../componentMap';
import Main from '../Main';
import HightlightHtml from './HighlightHtml';
import HighlightText from './HighlightText';
import SearchContext from './SearchContext';

const useStyles = makeStyles({
  comp: {
    flex: '1 1 100%',
  },
  h2: {
    flex: '1 1 100%',
  },
  section: {
    cursor: 'pointer',
  },
});

const SearchList: React.FC = () => {
  const { q, results, setSearchClose } = useContext(SearchContext);
  const history = useHistory();
  const classes = useStyles();
  const onClick = useCallback(
    (route) => {
      setSearchClose();
      history.push(route);
    },
    [history, setSearchClose]
  );
  if (!results) return null;
  return (
    <Main>
      {results.map(({ components, route }, index) => {
        return (
          <section className={classes.section} key={index} onClick={(): void => onClick(route)}>
            {components.map(({ children, component }) => {
              const Comp = componentMap[component];
              if (component === 'SyntaxHighligher') {
                return (
                  <HightlightHtml className={classes.comp} highlightText={q} key={index}>
                    <Comp>{children}</Comp>
                  </HightlightHtml>
                );
              }
              return (
                <Comp className={classes.comp} key={index}>
                  <HighlightText highlightText={q} text={children as string} />
                </Comp>
              );
            })}
          </section>
        );
      })}
    </Main>
  );
};

export default SearchList;
