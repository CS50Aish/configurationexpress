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