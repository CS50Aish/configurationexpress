# configurationexpress
Projects on Configuration Express

labuser@ubuntu2204:~/Desktop/configurationexpress$ npm init -y
Wrote to /home/labuser/Desktop/configurationexpress/package.json:

{
  "name": "configurationexpress",
  "version": "1.0.0",
  "description": "Projects on Configuration Express",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


labuser@ubuntu2204:~/Desktop/configurationexpress$ touch index.js

labuser@ubuntu2204:~/Desktop/configurationexpress$ npm install express

added 64 packages, and audited 65 packages in 2s

12 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

labuser@ubuntu2204:~/Desktop/configurationexpress$ node index.js 
undefined
<ref *1> [Function: app] {
  _events: [Object: null prototype] { mount: [Function: onmount] },
  _eventsCount: 1,
  _maxListeners: undefined,
  setMaxListeners: [Function: setMaxListeners],
  getMaxListeners: [Function: getMaxListeners],
  emit: [Function: emit],
  addListener: [Function: addListener],
  on: [Function: addListener],
  prependListener: [Function: prependListener],
  once: [Function: once],
  prependOnceListener: [Function: prependOnceListener],
  removeListener: [Function: removeListener],
  off: [Function: removeListener],
  removeAllListeners: [Function: removeAllListeners],
  listeners: [Function: listeners],
  rawListeners: [Function: rawListeners],
  listenerCount: [Function: listenerCount],
  eventNames: [Function: eventNames],
  init: [Function: init],
  defaultConfiguration: [Function: defaultConfiguration],
  lazyrouter: [Function: lazyrouter],
  handle: [Function: handle],
  use: [Function: use],
  route: [Function: route],
  engine: [Function: engine],
  param: [Function: param],
  set: [Function: set],
  path: [Function: path],
  enabled: [Function: enabled],
  disabled: [Function: disabled],
  enable: [Function: enable],
  disable: [Function: disable],
  acl: [Function (anonymous)],
  bind: [Function (anonymous)],
  checkout: [Function (anonymous)],
  connect: [Function (anonymous)],
  copy: [Function (anonymous)],
  delete: [Function (anonymous)],
  get: [Function (anonymous)],
  head: [Function (anonymous)],
  link: [Function (anonymous)],
  lock: [Function (anonymous)],
  'm-search': [Function (anonymous)],
  merge: [Function (anonymous)],
  mkactivity: [Function (anonymous)],
  mkcalendar: [Function (anonymous)],
  mkcol: [Function (anonymous)],
  move: [Function (anonymous)],
  notify: [Function (anonymous)],
  options: [Function (anonymous)],
  patch: [Function (anonymous)],
  post: [Function (anonymous)],
  propfind: [Function (anonymous)],
  proppatch: [Function (anonymous)],
  purge: [Function (anonymous)],
  put: [Function (anonymous)],
  rebind: [Function (anonymous)],
  report: [Function (anonymous)],
  search: [Function (anonymous)],
  source: [Function (anonymous)],
  subscribe: [Function (anonymous)],
  trace: [Function (anonymous)],
  unbind: [Function (anonymous)],
  unlink: [Function (anonymous)],
  unlock: [Function (anonymous)],
  unsubscribe: [Function (anonymous)],
  all: [Function: all],
  del: [Function (anonymous)],
  render: [Function: render],
  listen: [Function: listen],
  request: IncomingMessage { app: [Circular *1] },
  response: ServerResponse { app: [Circular *1] },
  cache: {},
  engines: {},
  settings: {
    'x-powered-by': true,
    etag: 'weak',
    'etag fn': [Function: generateETag],
    env: 'development',
    'query parser': 'extended',
    'query parser fn': [Function: parseExtendedQueryString],
    'subdomain offset': 2,
    'trust proxy': false,
    'trust proxy fn': [Function: trustNone],
    view: [Function: View],
    views: '/home/labuser/Desktop/configurationexpress/views',
    'jsonp callback name': 'callback',
    title: 'Configuration Commands'
  },
  locals: [Object: null prototype] {
    settings: {
      'x-powered-by': true,
      etag: 'weak',
      'etag fn': [Function: generateETag],
      env: 'development',
      'query parser': 'extended',
      'query parser fn': [Function: parseExtendedQueryString],
      'subdomain offset': 2,
      'trust proxy': false,
      'trust proxy fn': [Function: trustNone],
      view: [Function: View],
      views: '/home/labuser/Desktop/configurationexpress/views',
      'jsonp callback name': 'callback',
      title: 'Configuration Commands'
    }
  },
  mountpath: '/'
}
Configuration Commands
true
Disable function => false

labuser@ubuntu2204:~/Desktop/configurationexpress$ node index.js 
undefined
<ref *1> [Function: app] {
  _events: [Object: null prototype] { mount: [Function: onmount] },
  _eventsCount: 1,
  _maxListeners: undefined,
  setMaxListeners: [Function: setMaxListeners],
  getMaxListeners: [Function: getMaxListeners],
  emit: [Function: emit],
  addListener: [Function: addListener],
  on: [Function: addListener],
  prependListener: [Function: prependListener],
  once: [Function: once],
  prependOnceListener: [Function: prependOnceListener],
  removeListener: [Function: removeListener],
  off: [Function: removeListener],
  removeAllListeners: [Function: removeAllListeners],
  listeners: [Function: listeners],
  rawListeners: [Function: rawListeners],
  listenerCount: [Function: listenerCount],
  eventNames: [Function: eventNames],
  init: [Function: init],
  defaultConfiguration: [Function: defaultConfiguration],
  lazyrouter: [Function: lazyrouter],
  handle: [Function: handle],
  use: [Function: use],
  route: [Function: route],
  engine: [Function: engine],
  param: [Function: param],
  set: [Function: set],
  path: [Function: path],
  enabled: [Function: enabled],
  disabled: [Function: disabled],
  enable: [Function: enable],
  disable: [Function: disable],
  acl: [Function (anonymous)],
  bind: [Function (anonymous)],
  checkout: [Function (anonymous)],
  connect: [Function (anonymous)],
  copy: [Function (anonymous)],
  delete: [Function (anonymous)],
  get: [Function (anonymous)],
  head: [Function (anonymous)],
  link: [Function (anonymous)],
  lock: [Function (anonymous)],
  'm-search': [Function (anonymous)],
  merge: [Function (anonymous)],
  mkactivity: [Function (anonymous)],
  mkcalendar: [Function (anonymous)],
  mkcol: [Function (anonymous)],
  move: [Function (anonymous)],
  notify: [Function (anonymous)],
  options: [Function (anonymous)],
  patch: [Function (anonymous)],
  post: [Function (anonymous)],
  propfind: [Function (anonymous)],
  proppatch: [Function (anonymous)],
  purge: [Function (anonymous)],
  put: [Function (anonymous)],
  rebind: [Function (anonymous)],
  report: [Function (anonymous)],
  search: [Function (anonymous)],
  source: [Function (anonymous)],
  subscribe: [Function (anonymous)],
  trace: [Function (anonymous)],
  unbind: [Function (anonymous)],
  unlink: [Function (anonymous)],
  unlock: [Function (anonymous)],
  unsubscribe: [Function (anonymous)],
  all: [Function: all],
  del: [Function (anonymous)],
  render: [Function: render],
  listen: [Function: listen],
  request: IncomingMessage { app: [Circular *1] },
  response: ServerResponse { app: [Circular *1] },
  cache: {},
  engines: {},
  settings: {
    'x-powered-by': true,
    etag: 'weak',
    'etag fn': [Function: generateETag],
    env: 'development',
    'query parser': 'extended',
    'query parser fn': [Function: parseExtendedQueryString],
    'subdomain offset': 2,
    'trust proxy': false,
    'trust proxy fn': [Function: trustNone],
    view: [Function: View],
    views: '/home/labuser/Desktop/configurationexpress/views',
    'jsonp callback name': 'callback',
    title: 'Configuration Commands'
  },
  locals: [Object: null prototype] {
    settings: {
      'x-powered-by': true,
      etag: 'weak',
      'etag fn': [Function: generateETag],
      env: 'development',
      'query parser': 'extended',
      'query parser fn': [Function: parseExtendedQueryString],
      'subdomain offset': 2,
      'trust proxy': false,
      'trust proxy fn': [Function: trustNone],
      view: [Function: View],
      views: '/home/labuser/Desktop/configurationexpress/views',
      'jsonp callback name': 'callback',
      title: 'Configuration Commands'
    }
  },
  mountpath: '/'
}
Configuration Commands
true
Disable function => false
true
false
false

labuser@ubuntu2204:~/Desktop/configurationexpress$ mkdir expmidproj
labuser@ubuntu2204:~/Desktop/configurationexpress$ cd expmidproj/
labuser@ubuntu2204:~/Desktop/configurationexpress/expmidproj$ npm init 
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (expmidproj) 
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: Aishwarya Waghmare
license: (ISC) 
About to write to /home/labuser/Desktop/configurationexpress/expmidproj/package.json:

{
  "name": "expmidproj",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Aishwarya Waghmare",
  "license": "ISC"
}

labuser@ubuntu2204:~/Desktop/configurationexpress/expmidproj$ node index.js 
Listening to port 3001
Hello there
Router Level Middleware

Is this OK? (yes) 
labuser@ubuntu2204:~/Desktop/configurationexpress/expmidproj$ touch index.js

labuser@ubuntu2204:~/Desktop/configurationexpress/expmidproj$ node index.js 
Listening to port 3000
Hello there
Hello there

labuser@ubuntu2204:~/Desktop/configurationexpress/expmidproj$ node index.js 
Listening to port 3000
Hello there
Hello error handling middleware
ReferenceError: err is not defined
    at /home/labuser/Desktop/configurationexpress/expmidproj/index.js:29:10
    at Layer.handle [as handle_request] (/home/labuser/Desktop/configurationexpress/node_modules/express/lib/router/layer.js:95:5)
    at next (/home/labuser/Desktop/configurationexpress/node_modules/express/lib/router/route.js:149:13)
    at Route.dispatch (/home/labuser/Desktop/configurationexpress/node_modules/express/lib/router/route.js:119:3)
    at Layer.handle [as handle_request] (/home/labuser/Desktop/configurationexpress/node_modules/express/lib/router/layer.js:95:5)
    at /home/labuser/Desktop/configurationexpress/node_modules/express/lib/router/index.js:284:15
    at Function.process_params (/home/labuser/Desktop/configurationexpress/node_modules/express/lib/router/index.js:346:12)
    at next (/home/labuser/Desktop/configurationexpress/node_modules/express/lib/router/index.js:280:10)
    at expressInit (/home/labuser/Desktop/configurationexpress/node_modules/express/lib/middleware/init.js:40:5)
    at Layer.handle [as handle_request] (/home/labuser/Desktop/configurationexpress/node_modules/express/lib/router/layer.js:95:5)
Router Level Middleware

labuser@ubuntu2204:~/Desktop/configurationexpress/expmidproj$ node index.js 
Listening to port 3000
Hello error handling middleware
Error: This is an error
    at /home/labuser/Desktop/configurationexpress/expmidproj/index.js:29:17
    at Layer.handle [as handle_request] (/home/labuser/Desktop/configurationexpress/node_modules/express/lib/router/layer.js:95:5)
    at next (/home/labuser/Desktop/configurationexpress/node_modules/express/lib/router/route.js:149:13)
    at Route.dispatch (/home/labuser/Desktop/configurationexpress/node_modules/express/lib/router/route.js:119:3)
    at Layer.handle [as handle_request] (/home/labuser/Desktop/configurationexpress/node_modules/express/lib/router/layer.js:95:5)
    at /home/labuser/Desktop/configurationexpress/node_modules/express/lib/router/index.js:284:15
    at Function.process_params (/home/labuser/Desktop/configurationexpress/node_modules/express/lib/router/index.js:346:12)
    at next (/home/labuser/Desktop/configurationexpress/node_modules/express/lib/router/index.js:280:10)
    at expressInit (/home/labuser/Desktop/configurationexpress/node_modules/express/lib/middleware/init.js:40:5)
    at Layer.handle [as handle_request] (/home/labuser/Desktop/configurationexpress/node_modules/express/lib/router/layer.js:95:5)
Router Level Middleware

labuser@ubuntu2204:~/Desktop/configurationexpress/expmidproj$ npm install --save cookie-parser

added 3 packages, and audited 4 packages in 2s

found 0 vulnerabilities

labuser@ubuntu2204:~/Desktop/configurationexpress/expmidproj$ node index.js 
Loading the third party middleware function
Listening on port 3000
Router Level Middleware
Hello error handling middleware
Error: This is an error

labuser@ubuntu2204:~/Desktop/configurationexpress/expmidproj$ cd ..
labuser@ubuntu2204:~/Desktop/configurationexpress$ mkdir reqhandproj
labuser@ubuntu2204:~/Desktop/configurationexpress$ cd reqhandproj/
labuser@ubuntu2204:~/Desktop/configurationexpress/reqhandproj$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (reqhandproj) 
version: (1.0.0) 
description: Project for request handling
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: Aishwarya Waghmare
license: (ISC) 
About to write to /home/labuser/Desktop/configurationexpress/reqhandproj/package.json:

{
  "name": "reqhandproj",
  "version": "1.0.0",
  "description": "Project for request handling",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Aishwarya Waghmare",
  "license": "ISC"
}


Is this OK? (yes) 
labuser@ubuntu2204:~/Desktop/configurationexpress/reqhandproj$ npm init -y
Wrote to /home/labuser/Desktop/configurationexpress/reqhandproj/package.json:

{
  "name": "reqhandproj",
  "version": "1.0.0",
  "description": "Project for request handling",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Aishwarya Waghmare",
  "license": "ISC",
  "keywords": []
}


labuser@ubuntu2204:~/Desktop/configurationexpress/reqhandproj$ touch index.js

http://localhost:3000/request-query?title=Query%20Request%20is%20Success

{ title: 'Query Request is Success' }

labuser@ubuntu2204:~/Desktop/configurationexpress/reqhandproj$ node index.js 
Listening on port 3000
{ title: 'Query Request is Success' }

labuser@ubuntu2204:~/Desktop/configurationexpress/reqhandproj$ node index.js 
Listening on port 3000
Request Headers => [object Object]
Request Headers => [object Object]
Request Headers => [object Object]
Before => false
After => true

labuser@ubuntu2204:~/Desktop/configurationexpress/reqhandproj$ node index.js 
Listening on port 3000
Request Headers => [object Object]
Request Headers => [object Object]
Request Headers => [object Object]
Before => false
After => true
Request Headers => [object Object]
Request Headers => [object Object]
Request Headers => [object Object]
Before => false
After => true
Request Headers => [object Object]
Request Headers => [object Object]
Request Headers => [object Object]
Before => false
After => true
favicon.ico