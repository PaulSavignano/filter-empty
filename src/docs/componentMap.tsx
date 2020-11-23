import React from 'react';

import Badges from './common/Badges';
import Button from './common/Button';
import Code from './common/Code';
import H1 from './common/H1';
import H2 from './common/H2';
import H3 from './common/H3';
import HeroIcon from './common/HeroIcon';
import HomePageHero from './common/HomePageHero';
import Iframe from './common/Iframe';
import SyntaxHighlighter from './common/SyntaxHighlighter';

interface ComponentProps {
  className?: string;
  style?: React.CSSProperties;
  to?: string;
}
interface ComponentMap {
  [key: string]: React.FC<ComponentProps> | string;
}

const componentMap: ComponentMap = {
  Article: 'article',
  Badges: Badges,
  Button: Button,
  Code: Code,
  H1: H1,
  H2: H2,
  H3: H3,
  HeroIcon: HeroIcon,
  HomePageHero,
  Iframe: Iframe,
  Section: 'section',
  SyntaxHighlighter,
  article: 'article',
  section: 'section',
};

export default componentMap;
