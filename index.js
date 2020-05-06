"use strict"

const semver = require("semver")

module.exports = version => {
	if (typeof version !== "string") {
		throw new TypeError(`Expected a string, got ${typeof version}`)
	}

	return semver.valid(semver.coerce(version))
}
