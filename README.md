# Clean semver [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/clean-semver/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/clean-semver)

Clean a semver-compatible version.

[![NPM Badge](https://nodei.co/npm/clean-semver.png)](https://npmjs.com/package/clean-semver)

## Install

```sh
npm install clean-semver
```

## Usage

```js
const cleanSemver = require("clean-semver");

cleanSemver(" v1.0aaa    -");
//=> '1.0.0'
```

## API

### cleanSemver(version)

#### version

Type: `string`

The version to clean.
