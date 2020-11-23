import CodeIcon from '@material-ui/icons/Code';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

interface Nav {
  [key: string]: {
    icon: React.FC;
    name: string;
    path: string;
  };
}

const nav: Nav = {
  api: {
    icon: PlayArrowIcon,
    name: 'api',
    path: '/api',
  },
  demo: {
    icon: CodeIcon,
    name: 'demos',
    path: '/demos',
  },
};

export default nav;
