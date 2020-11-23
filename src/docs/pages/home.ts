import { example1 } from '../common/examples';
import filterEmpty from '../../lib';

const home = [{
  component: 'Section',
  children: [{
    component: 'HomePageHero',
  }]
}, {
  component: 'Section',
  children: [{
    component: 'Article',
    style: { flex: '1 1 300px', flexFlow: 'column', padding: 8 },
    children: [{
      component: 'H2',
      children: 'Before',
    }, {
      children: JSON.stringify(example1, null, 2),
      component: 'SyntaxHighlighter',
      style: { width: '100%' },
    }]
  }, {
    component: 'Article',
    style: { flex: '1 1 300px', flexFlow: 'column', padding: 8 },
    children: [{
      children: 'After',
      component: 'H2',
    }, {
      children: JSON.stringify(filterEmpty(example1), null, 2),
      component: 'SyntaxHighlighter',
      style: { width: '100%' },
    }]
  }]
}];

export default home;
