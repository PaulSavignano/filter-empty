import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import pkg from '../../../package.json';

const badges = [
  {
    alt: 'npm version',
    href: `https://www.npmjs.com/package/${pkg.name}`,
    src: `https://img.shields.io/npm/v/${pkg.name}.svg?style=flat`,
  },
  {
    alt: 'npm downloads',
    href: `https://npmcharts.com/compare/${pkg.name}?minimal=true`,
    src: `https://img.shields.io/npm/dm/${pkg.name}.svg?style=flat1`,
  },
  {
    alt: 'code coverage',
    href: `https://codecov.io/gh/PaulSavignano/${pkg.name}`,
    src: `https://codecov.io/gh/PaulSavignano/${pkg.name}/branch/master/graph/badge.svg`,
  },
  {
    alt: 'release build',
    href: `https://github.com/PaulSavignano/${pkg.name}/actions`,
    src: `https://github.com/PaulSavignano/${pkg.name}/workflows/release/badge.svg`,
  },
  {
    alt: 'master build',
    href: `https://github.com/PaulSavignano/${pkg.name}/actions`,
    src: `https://github.com/PaulSavignano/${pkg.name}/workflows/master/badge.svg`,
  },
  {
    alt: 'bundle size',
    href: `https://bundlephobia.com/result?p=${pkg.name}`,
    src: `https://img.shields.io/bundlephobia/minzip/${pkg.name}.svg`,
  },
  {
    alt: 'dependencies',
    href: `https://david-dm.org/PaulSavignano/${pkg.name}/master`,
    src: `https://david-dm.org/PaulSavignano/${pkg.name}/master/status.svg`,
  },
  {
    alt: 'dev dependencies',
    href: `https://david-dm.org/PaulSavignano/${pkg.name}/master?type=dev`,
    src: `https://david-dm.org/PaulSavignano/${pkg.name}/master/dev-status.svg`,
  },
  {
    alt: 'peer dependencies',
    href: `https://david-dm.org/PaulSavignano/${pkg.name}/master?type=peer`,
    src: `https://david-dm.org/PaulSavignano/${pkg.name}/master/peer-status.svg`,
  },
  {
    alt: 'patreon support',
    href: 'https://www.patreon.com/PaulSavignano',
    src: 'https://img.shields.io/badge/patreon-support%20the%20author-blue.svg',
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    badge: {
      margin: theme.spacing(0.25),
    },
    badges: {
      alignItems: 'center',
      display: 'flex',
      flexFlow: 'row wrap',
      justifyContent: 'center',
      margin: theme.spacing(0.75),
    },
  })
);

function Badges(): React.ReactElement {
  const classes = useStyles();
  return (
    <div className={classes.badges}>
      {badges.map((b) => (
        <a className={classes.badge} href={b.href} key={b.src}>
          <img alt={b.alt} src={b.src} />
        </a>
      ))}
    </div>
  );
}

export default Badges;
