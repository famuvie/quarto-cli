/*
 * path.ts
 *
 * Copyright (C) 2020-2024 Posit Software, PBC
 */

export {
  SEPARATOR as SEP,
  SEPARATOR_PATTERN as SEP_PATTERN,
} from "path/constants";

export { basename } from "path/basename";
export { extname } from "path/extname";
export { dirname } from "path/dirname";
export { fromFileUrl } from "path/from-file-url";
export { globToRegExp } from "path/glob-to-regexp";
export { isAbsolute } from "path/is-absolute";
export { join } from "path/join";
export { relative } from "path/relative";
export { resolve } from "path/resolve";
export { normalize } from "path/normalize";
export { toFileUrl } from "path/to-file-url";
export { isGlob } from "path/is-glob";

import { normalize } from "path/posix/normalize";
export const posix = { normalize };
