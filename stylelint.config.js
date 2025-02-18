module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    'selector-class-pattern': '^.[a-z]+(-[a-z0-9]+)?$',
    'no-empty-source': null,
    'color-function-notation': 'legacy',
    'shorthand-property-no-redundant-values': null,
    'length-zero-no-unit': null,
    'alpha-value-notation': 'number',
    'font-family-name-quotes': 'always-where-recommended',
    'comment-empty-line-before': null,
    'rule-empty-line-before': null,
    'declaration-block-no-shorthand-property-overrides': null,
  },
};
