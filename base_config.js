const importPlugin = require('eslint-plugin-import')
const jsxA11y = require('eslint-plugin-jsx-a11y')
const prettier = require('eslint-plugin-prettier')
const react = require('eslint-plugin-react')
const typescript = require('@typescript-eslint/eslint-plugin')
const reactHooks = require('eslint-plugin-react-hooks')

module.exports = {
    languageOptions: {
        parser: '@typescript-eslint/parser',
    },
    plugins: {
      typescript,
      import: importPlugin,
      react,
      reactHooks,
      prettier,
      jsxA11y,
    },
    rules: {
        "prettier/prettier": [
            "error",
            {
                "trailingComma": "es5",
                "useTabs": true,
                "semi": true,
                "singleQuote": false,
                "jsxSingleQuote": false 
            }
        ],
        "eol-last": "error",
        "newline-before-return": "error",
        // React Hooks
        "reactHooks/rules-of-hooks": "error",
        "reactHooks/exhaustive-deps": "warn",
        // React a11y
        "jsxA11y/alt-text": "error",
        "jsxA11y/anchor-has-content": "error",
        "jsxA11y/anchor-is-valid": "error",
        "jsxA11y/aria-activedescendant-has-tabindex": "error",
        "jsxA11y/aria-props": "error",
        "jsxA11y/aria-proptypes": "error",
        "jsxA11y/aria-role": "error",
        "jsxA11y/aria-unsupported-elements": "error",
        "jsxA11y/autocomplete-valid": "error",
        "jsxA11y/click-events-have-key-events": "error",
        "jsxA11y/heading-has-content": "error",
        "jsxA11y/html-has-lang": "error",
        "jsxA11y/iframe-has-title": "error",
        "jsxA11y/img-redundant-alt": "error",
        "jsxA11y/interactive-supports-focus": "error",
        "jsxA11y/label-has-associated-control": "error",
        "jsxA11y/media-has-caption": "error",
        "jsxA11y/mouse-events-have-key-events": "error",
        "jsxA11y/no-access-key": "error",
        "jsxA11y/no-autofocus": "error",
        "jsxA11y/no-distracting-elements": "error",
        "jsxA11y/no-interactive-element-to-noninteractive-role": "error",
        "jsxA11y/no-noninteractive-element-interactions": "error",
        "jsxA11y/no-noninteractive-element-to-interactive-role": "error",
        "jsxA11y/no-noninteractive-tabindex": "error",
        "jsxA11y/no-onchange": "error",
        "jsxA11y/no-redundant-roles": "error",
        "jsxA11y/no-static-element-interactions": "error",
        "jsxA11y/role-has-required-aria-props": "error",
        "jsxA11y/role-supports-aria-props": "error",
        "jsxA11y/scope": "error",
        "jsxA11y/tabindex-no-positive": "error",
        // typescript
        "typescript/no-explicit-any": "error",
        "typescript/no-unnecessary-condition": "error",
    },
};
