const test = require("ava")
const cleanSemver = require(".")

test("main", t => {
	t.is(cleanSemver(" v1.0aaa    -"), "1.0.0")
})
