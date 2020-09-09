<h1 align="center">Filter-Empty</h1>

<div align="center">

Filter empty values from objects and/or arrays.

[![NPM Version](https://img.shields.io/npm/v/filter-empty.svg?style=flat)](https://www.npmjs.com/package/filter-empty)
[![NPM Downloads](https://img.shields.io/npm/dm/filter-empty.svg?style=flat)](https://npmcharts.com/compare/filter-empty?minimal=true)
[![CircleCI](https://img.shields.io/circleci/build/github/PaulSavignano/filter-empty/master.svg)](https://circleci.com/gh/PaulSavignano/filter-empty/tree/master)
[![codecov.io](https://codecov.io/gh/PaulSavignano/filter-empty/branch/master/graph/badge.svg)](https://codecov.io/gh/PaulSavignano/filter-empty)
![ci](https://github.com/actions/filter-empty/workflows/ci/badge.svg)
[![BundleSize](https://img.shields.io/bundlephobia/minzip/filter-empty.svg)](https://bundlephobia.com/result?p=filter-empty)
[![Dependencies](https://david-dm.org/PaulSavignano/filter-empty/master/status.svg)](https://david-dm.org/PaulSavignano/filter-empty/master)
[![DevDependencies](https://david-dm.org/PaulSavignano/filter-empty/master/dev-status.svg)](https://david-dm.org/PaulSavignano/filter-empty/master?type=dev)
[![PeerDependencies](https://david-dm.org/PaulSavignano/filter-empty/master/peer-status.svg)](https://david-dm.org/PaulSavignano/filter-empty/master?type=peer)
[![Patreon](https://img.shields.io/badge/patreon-support%20the%20author-blue.svg)](https://www.patreon.com/PaulSavignano)

</div>

Filter-Empty is a JavaScript library for removing empty values.

- **Simple:** Api only requires an object and or array.
- **Powerful:** Recursive iteration finds and removes deeply nested props.
- **Performant:** No weight from external dependencies.
  <br />

## Installation

```
npm install filter-empty
```

## Usage

Here is an example to get you started:

```jsx
import filterEmpty from 'filter-empty'

const objToFilter = {
  level1: {
    level2: {
      level3: {
        key1: 'This value is ok',
        key2: null,
      },
    },
  },
}

const filtered = filterEmpty(objToFilter)

// result
// {
//   level1: {
//     level2: {
//       level3: {
//         key1: 'This value is ok'
//       }
//     }
//   }
// }
```

## Examples

[Codesandbox](https://codesandbox.io/s/filter-empty-mtlwh?fontsize=14)

## Contributing

- see CONTRIBUTING.md
