import FilterIcon from '@material-ui/icons/FilterList';
import { BoxProps } from '@material-ui/core/Box';

import pkg from '../../package.json';

export interface ComponentType {
  children?: React.FC | string;
  component: string;
  src?: string;
  to?: string;
}

interface Section extends BoxProps {
  components: ComponentType[];
}

export interface RoutesType {
  [key: string]: {
    sections: Section[];
  };
}

export const routes: RoutesType = {
  '/': {
    sections: [
      {
        alignItems: 'center',
        components: [
          { children: FilterIcon, component: 'HeroIcon' },
          { children: pkg.name, component: 'H1' },
          { children: pkg.description, component: 'H3' },
          { component: 'Badges' },
          { children: 'Get Started', component: 'Button', to: '/get-started' },
        ],
        margin: 'auto',
      },
    ],
  },
  '/get-started': {
    sections: [
      {
        components: [
          { children: 'Getting Started', component: 'H1' },
          { children: `npm i -S ${pkg.name}`, component: 'Code' },
        ],
      },
      {
        components: [
          { children: 'Code Sandboxes', component: 'H2' },
          {
            component: 'Iframe',
            src:
              'https://codesandbox.io/embed/filter-empty-typescript-cplo8?fontsize=14&hidenavigation=1&theme=dark',
          },
        ],
      },
    ],
  },
};

export default routes;
