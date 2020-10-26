import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import Main from '../Main';
import Section from '../Section';
import SearchContext from './SearchContext';
import componentMap from '../../componentMap';
import HighlightText from './HighlightText2';

const SearchList: React.FC = () => {
  const { results, q } = useContext(SearchContext);
  const history = useHistory();
  if (!results) return null;
  return (
    <Main>
      {results.map(({ component, children, route, ...rest }, index) => {
        const Component = componentMap[component];
        return (
          <Section key={index} onClick={(): void => history.push(route)}>
            <Component {...rest}>
              <HighlightText highlightText={q} text={children as string} />
            </Component>
          </Section>
        );
      })}
    </Main>
  );
};

export default SearchList;
