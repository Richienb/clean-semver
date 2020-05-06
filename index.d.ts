/**
 * Clean a semver-compatible version.
 * @param version The version to clean.
 * @example
 * ```
 * const cleanSemver = require("clean-semver");
 *
 * cleanSemver(" v1.0aaa    -");
 * //=> '1.0.0'
 * ```
*/
declare function cleanSemver(version: string): string

export = cleanSemver
