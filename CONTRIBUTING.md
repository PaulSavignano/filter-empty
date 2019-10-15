## Contributing
Thank you for helping make this project even better and being a part of our community. Here are a few guidelines to help with contributions.

## Submitting a Pull Request
Pull requests are appreciated and welcomed!  Before working on a large change please open an issue first to discuss it with the maintainers.

Please keep your pull requests small. A small and specific PR has the best chance of getting accepted. If you have more than one feature or bug fix it's best to submit a PR for each.

Label each PR with either the component, module, or method name [ComponentName].

When adding new features or modifying existing ones please try and include tests to confirm the behaviour.

#### Branch Structure
Master represents the latest stable version of the app.  The development branch includes the latest features but may present errors at times as it is actively developed.

## Getting started

Please create a new branch from an up to date master on your fork. (Note, urgent hotfixes should be branched off the latest stable release rather than master)

1. Fork the Material-UI repository on Github
2. Clone your fork to your local machine `git clone git@github.com:<yourname>/filter-empty.git`
3. Create a branch `git checkout -b my-topic-branch`
4. Make your changes, lint, then push to to GitHub with `git push --set-upstream origin my-topic-branch`.
5. Visit GitHub and make your pull request.

If you have an existing local repository, please update it before you start, to minimise the chance of merge conflicts.
```sh
git remote add upstream git@github.com:PaulSavignano/filter-empty.git
git checkout master
git pull upstream master
git checkout -b my-topic-branch
yarn
```

### Coding style

Please follow the coding style of the current code base. This project uses eslint and prettier and includes copies of these settings in the rc files.

## License

By contributing your code to this GitHub repository, you agree to license your contribution under the MIT license.