import assert from 'node:assert/strict';
import {readFileSync,existsSync,readdirSync} from 'node:fs';
import {resolve} from 'node:path';
let pages=0,links=0;
for(const file of readdirSync('dist').filter(f=>f.endsWith('.html'))){const html=readFileSync('dist/'+file,'utf8');pages++;assert(html.includes('lang="en"'),file+' requires a language');assert(html.includes('name="viewport"'),file+' requires viewport');const ids=[...html.matchAll(/\sid="([^"]+)"/g)].map(m=>m[1]);assert.equal(ids.length,new Set(ids).size,file+' has duplicate IDs');
for(const [,href] of html.matchAll(/(?:href|src)="([^"]+)"/g)){if(/^(https?:|mailto:|tel:|data:)/.test(href)||href==='#')continue;const [pathWithQuery,hash]=href.split('#'),path=pathWithQuery.split('?')[0],target=path?resolve('dist',path.replace(/^\//,'')):resolve('dist',file);assert(existsSync(target),file+' broken target '+href);if(hash){const targetHtml=readFileSync(target,'utf8');assert(targetHtml.includes('id="'+hash+'"'),file+' missing anchor '+href)}links++}
if(file!=='404.html'){assert(html.includes('aria-current="page"'),file+' missing current nav');assert(html.includes('id="main"'),file+' missing main');}
}
console.log('Passed: '+pages+' pages, '+links+' local links/assets/anchors, unique IDs and navigation landmarks.');

