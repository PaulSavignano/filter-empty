import H1 from './common/H1';
import H2 from './common/H2';
import H3 from './common/H3';
import Code from './common/Code';
import Iframe from './common/Iframe';
import HeroIcon from './common/HeroIcon';
import Button from './common/Button';
import Badges from './common/Badges';

interface ComponentMap {
  [key: string]: React.FC;
}

const componentMap: ComponentMap = {
  Badges: Badges,
  Button: Button,
  Code: Code,
  H1: H1,
  H2: H2,
  H3: H3,
  HeroIcon: HeroIcon,
  Iframe: Iframe,
};

export default componentMap;
