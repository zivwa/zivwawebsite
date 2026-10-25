import http from 'node:http';
import {createReadStream,existsSync,statSync} from 'node:fs';
import {resolve,extname,sep} from 'node:path';
const root=resolve('dist'),port=Number(process.env.PORT||4173);
const types={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json; charset=utf-8','.jpg':'image/jpeg','.png':'image/png','.svg':'image/svg+xml','.txt':'text/plain'};
http.createServer((req,res)=>{let path;try{path=decodeURIComponent(new URL(req.url,'http://localhost').pathname)}catch{res.writeHead(400).end('Bad request');return}const target=resolve(root,'.'+path+(path.endsWith('/')?'index.html':''));if(!target.startsWith(root+sep)){res.writeHead(403).end();return}if(!existsSync(target)||!statSync(target).isFile()){res.writeHead(404,{'content-type':types['.html']});createReadStream(resolve(root,'404.html')).pipe(res);return}res.writeHead(200,{'content-type':types[extname(target)]||'application/octet-stream','cache-control':'no-cache'});createReadStream(target).pipe(res)}).listen(port,'127.0.0.1',()=>console.log('Local: http://127.0.0.1:'+port));

