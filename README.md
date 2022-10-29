# About the Challenge

## JUMP2DIGITAL

### CARD PRICE CHALLENGE

[Figma resource](https://www.figma.com/file/8DTsCBsanZ0OEoLdiY1qzW/front_creator?node-id=4%3A194)

## Stack Tech

- vite
- react
- tailwindcss
- headles ui

## Documentation just for development purposes.

### How to create a vite project inside a folder already made.

`npm create vite@lates ./`

### How to incorporate tailwind to vite

Install tailwindcss and its peer dependencies via npm, and then run the init command to generate both tailwind.config.cjs and postcss.config.cjs.

```shell
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Follow the GUIDE 😜

[Tailwind Guide for Vite](https://tailwindcss.com/docs/guides/vite)

### Eslint 😈

[dev.to](https://dev.to/equiman/vite-powerful-react-project-g4m)

```
npm install -D eslint
npx eslint --init
```

You should disable this rule by extending react/jsx-runtime in your eslint config (add "plugin:react/jsx-runtime" to "extends"), if you are using the new JSX transform from React 17.
` extends: ['plugin:react/recommended', 'standard', 'plugin:react/jsx-runtime'],`

And my personal [rules](https://eslint.org/docs/latest/rules/space-before-function-paren):

``` javacript
  rules: {
    'no-console': 'warn',
    'react/prop-types': 'off',
    'react/self-closing-comp': 'warn',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ]
  },
```
### Headless UI
`npm install @headlessui/react`

