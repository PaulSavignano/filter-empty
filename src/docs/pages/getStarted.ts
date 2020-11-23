import pkg from '../../../package.json';
import filterEmpty from '../../lib';
import { example1 } from '../common/examples';

const getStarted = [{
  component: 'Section',
  children: [{
    component: 'Article',
    children: [{
      children: 'Getting Started',
      component: 'H1',
    }, {
      children: `npm i -S ${pkg.name}`,
      component: 'Code',
    }]
  }]
}, { 
  component: 'Section',
  children: [{
    component: 'Article',
    children: [{
      children: 'Before',
      component: 'H2',
    }, {
      children: JSON.stringify(example1, null, 2),
      component: 'SyntaxHighlighter',
      style: { width: '100%' },
    }, {
      children: 'After',
      component: 'H2',
    }, {
      children: JSON.stringify(filterEmpty(example1), null, 2),
      component: 'SyntaxHighlighter',
      style: { width: '100%' },
    }]
  }],
}]

export default getStarted;
