"use strict"

const semver = require("semver")

module.exports = (version) => semver.valid(semver.coerce(version))
