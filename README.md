<h1 align="center">filter-empty</h1>

<div align="center">

Filter empty values from objects and/or arrays.

[![NPM Version](https://img.shields.io/npm/v/filter-empty.svg?style=flat)](https://www.npmjs.com/package/filter-empty)
[![NPM Downloads](https://img.shields.io/npm/dm/filter-empty.svg?style=flat)](https://npmcharts.com/compare/filter-empty?minimal=true)
[![codecov.io](https://codecov.io/gh/PaulSavignano/filter-empty/branch/master/graph/badge.svg)](https://codecov.io/gh/PaulSavignano/filter-empty)
![build](https://github.com/PaulSavignano/filter-empty/workflows/release/badge.svg)
[![BundleSize](https://img.shields.io/bundlephobia/minzip/filter-empty.svg)](https://bundlephobia.com/result?p=filter-empty)
[![Dependencies](https://david-dm.org/PaulSavignano/filter-empty/master/status.svg)](https://david-dm.org/PaulSavignano/filter-empty/master)
[![DevDependencies](https://david-dm.org/PaulSavignano/filter-empty/master/dev-status.svg)](https://david-dm.org/PaulSavignano/filter-empty/master?type=dev)
[![PeerDependencies](https://david-dm.org/PaulSavignano/filter-empty/master/peer-status.svg)](https://david-dm.org/PaulSavignano/filter-empty/master?type=peer)
[![Patreon](https://img.shields.io/badge/patreon-support%20the%20author-blue.svg)](https://www.patreon.com/PaulSavignano)

</div>
</br>

## Getting started

```
npm install -S filter-empty
```

Once installed, import and start filtering objects.

```jsx
import filterEmpty from 'filter-empty'

const objToFilter = {
  level1: {
    level2: {
      level3: {
        key1: 'This value is ok',
        key2: null,
        key3: ['', null, 'This is also ok'],
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
//         key3: ['This is also ok']
//       }
//     }
//   }
// }
```

## Examples

[Codesandbox](https://codesandbox.io/s/filter-empty-mtlwh?fontsize=14)

[Codesandbox Typescript](https://codesandbox.io/s/filter-empty-typescript-cplo8?fontsize=14)

## Motivation

Working with graphql and its great type safty results in null values for some props. Sometime in consuming these props on the client it's better to remove the empty props rather than implementing conditionals.

## Features

- Filters empty values from objects and arrays.
- Creates new mutation free objects
- Recurses nested props.
- [![BundleSize](https://img.shields.io/bundlephobia/minzip/filter-empty.svg)](https://bundlephobia.com/result?p=filter-empty) [![BundleSize](https://img.shields.io/bundlephobia/min/filter-empty.svg)](https://bundlephobia.com/result?p=filter-empty).

## Benefits

- New objects free of null, undefined, empty arrays, and empty strings.
- Removal of empty nested props.
- Light, fast, and dependency free lib.

## Contributing

1. Fork the repository.

2. Clone the fork to your local machine and add upstream remote:

```sh
git clone https://github.com/<your username>/filter-empty.git
cd filter-empty
git remote add upstream https://github.com/PaulSavignano/filter-empty.git
```

3. Synchronize your local `next` branch with the upstream one:

```sh
git checkout next
git pull upstream next
```

4. Install the dependencies:

```sh
npm install
```

5. Create a new branch:

```sh
git checkout -b my-branch
```

6. Make changes, commit and push to your fork:

```sh
git push -u origin HEAD
```

7. Go to [the repository](https://github.com/PaulSavignano/filter-empty) and make a Pull Request.
