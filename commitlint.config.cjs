// commitlint.config.js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // create new fetchers
        'fix', //  fix bug
        'docs', // add the documentation like the jsDoc, comments , storybook
        'style', // chang the style (tailwind , css, cva )
        'refactor', // change  the code without any change in the logic
        'perf', // optimize in the code
        'test', // add or change in the tests
        'chore', // updating the package or installing the new packages
        'revert', // revert to the previous changes
        'ci', // change in the pipeline of the CI-CD
      ],
    ],
    // the commit message should not be more that 100 chars
    'header-max-length': [2, 'always', 100],
  },
};
