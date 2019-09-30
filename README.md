QThemeMixin
===

<img src="https://img.shields.io/npm/v/q-theme-mixin.svg?label=QThemeMixin">


QThemeMixin is a Vue Mix-in library for components created with Quasar Framework. It is only for components that use a `render` function. It does not work with template formats found with SFC (single file components).

# Features

Allows you to define themes to be used (check out [QCalendar](https://github.com/quasarframework/app-extension-qcalendar)) in conjunction with [QColorizeMixin](https://github.com/hawkeye64/q-colorize-mixin).

# Install
To add this mix-in to your Quasar application, run the following (in your Quasar app folder):

```bash
yarn add q-theme-mixin

# or

npm install q-theme-mixin
```

# Uninstall
To remove this mix-in from your Quasar application, run the following (in your Quasar app folder):

```bash
yarn remove q-theme-mixin

# or

npm remove q-theme-mixin
```

# Documentation and Examples
Examples with code can be found [here](https://hawkeye64.github.io/q-theme-mixin/examples).

# Demo Project (source)
Source for the demo application can be found [here](https://github.com/hawkeye64/q-theme-mixin/tree/master/demo).

# Setup
```bash
$ yarn
```

# Developing
```bash
$ cd ui

# start dev in SPA mode
$ yarn dev
```

# Building package
```bash
$ cd ui

$ yarn build
```

# Building Demo
```bash
# first time prep
$ cd ui
$ yarn link
$ cd ../demo
$ yarn link "q-theme-mixin"

# for interactive - browser opens automatically
$ quasar dev

# for build - goes to docs folder
$ yarn build-demo
```

# Donate
If you appreciate the work that went into this, please consider [donating to Quasar](https://donate.quasar.dev).

# License
MIT (c) Jeff Galbraith <jeff@quasar.dev>
