import * as __SNOWPACK_ENV__ from './_snowpack/env.js';

export const version = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_VERSION || "unset_version";
export const sha = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_GIT_SHA || "unset_sha";
export const title = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_TITLE || "Boilerplate";
export const basename = __SNOWPACK_ENV__.SNOWPACK_PUBLIC_URL;
const ghUrl = "https://github.com/nexys-system/boilerplate_snowpack_bootstrap";
export const github = {sha: `${ghUrl}/commit/${sha}`, url: ghUrl};
