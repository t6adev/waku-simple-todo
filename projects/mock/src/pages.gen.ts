// deno-fmt-ignore-file
// biome-ignore format: generated types do not need formatting
// prettier-ignore
import type { PathsForPages, GetConfigResponse } from 'waku/router';

// prettier-ignore
import type { getConfig as Index_getConfig } from './pages/index.js';
// prettier-ignore
import type { getConfig as TodoIndex_getConfig } from './pages/todo/index.js';
// prettier-ignore
import type { getConfig as TodoNewIndex_getConfig } from './pages/todo/new/index.js';

// prettier-ignore
type Page =
| ({ path: '/' } & GetConfigResponse<typeof Index_getConfig>)
| ({ path: '/todo' } & GetConfigResponse<typeof TodoIndex_getConfig>)
| ({ path: '/todo/new' } & GetConfigResponse<typeof TodoNewIndex_getConfig>);

// prettier-ignore
declare module 'waku/router' {
  interface RouteConfig {
    paths: PathsForPages<Page>;
  }
  interface CreatePagesConfig {
    pages: Page;
  }
}
  