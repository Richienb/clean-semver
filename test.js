import test from "ava"
import cleanSemver from "."

test("main", (t) => {
    t.is(cleanSemver(" v1.0aaa    -"), "1.0.0")
})
