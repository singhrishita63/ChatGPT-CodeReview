const { Headers, Request, Response } = require('node-fetch');
const fetch = require('node-fetch').default;

const global = /** @type {any} */ (globalThis);

if (!global.fetch) {
  global.fetch = fetch;
  global.Headers = Headers;
  global.Request = Request;
  global.Response = Response;
}
