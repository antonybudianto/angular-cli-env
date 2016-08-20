# angular-cli-env

Angular CLI Env Addon

Inspired by [Twelve-Factor App](https://12factor.net/config)

This addon can generate a constant file from `env.json` so that your environment variable is scalable. For now it only supports generating TypeScript constant exporting file.

## Prerequisites

This addon has the following prerequisites:

- Node.js 4.x
- Angular project created via [angular-cli](https://github.com/angular/angular-cli)

## Installation & Setup

Run this inside your Angular CLI project:

```sh
npm install --save-dev angular-cli-env
```

## Usage

### Initialize

First, you need to initialize things needed for env generation by running:

```sh
ng env:init
```

It'll generate 2 files:
- env.json (Your environment variables live here, can be **git-ignored** as you like )
- config/env.template.ts (The template used to generate the constant file)

You only need to this **once**.

### Generate

Next, you can generate the constant file by running:

```sh
ng env
```

It'll generate the constant file at `src/app/shared/env.ts`, and this file can be **git-ignored** as you like.

You can also custom the path and name using `--path` and `--name` flags.

## Authors

- [Antony Budianto](http://twitter.com/antonybudianto)
- Based on [angular-cli-github-pages](https://github.com/IgorMinar/angular-cli-github-pages)

## License

[Licensed under the MIT license](http://www.opensource.org/licenses/mit-license.php)
