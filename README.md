# angular-cli-env
[![npm version](https://badge.fury.io/js/angular-cli-env.svg)](https://badge.fury.io/js/angular-cli-env)

Angular CLI Env Addon

Inspired by [Twelve-Factor App](https://12factor.net/config)

This addon can generate a constant file from `env.json` so that your environment variable is scalable. For now it only supports generating TypeScript constant exporting file.

For more [details](https://github.com/antonybudianto/angular-cli-env/wiki/About)

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
- `env.json` (Your environment variables live here, can be **git-ignored** as you like )
- `src/app/shared/app-env.interface.ts` (Your environment variable interface for static type, must be checked to source control)

You only need to this **once**.

### Generate

Next, you can generate the constant file by running:

```sh
ng env
```

It'll generate the constant file at `src/app/shared/env.ts`, and this file can be **git-ignored** as you like.

By default, it will generate a constant file with static type `AppEnv`.
If you prefer to use dynamic type, you can add `--typeless` flag when generating.

You can also custom the path and name using `--path` and `--name` flags.

> When changing path, you need to adjust your app interface's path accordingly

### Access the env in code

Just import the generated file in your app, for example:
```ts
import { Component } from '@angular/core';
import { ENV } from './shared/env';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor() {
    console.log(ENV.TITLE);
  }
}

```

## Authors

- [Antony Budianto](http://twitter.com/antonybudianto)
- Based on [angular-cli-github-pages](https://github.com/IgorMinar/angular-cli-github-pages)

## License

[Licensed under the MIT license](http://www.opensource.org/licenses/mit-license.php)
