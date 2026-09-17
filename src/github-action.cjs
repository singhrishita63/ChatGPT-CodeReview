require('./fetch-polyfill.cjs');
const adapter = require('@probot/adapter-github-actions');
const { robot } = require('./bot');
require('./log');

adapter.run(robot);
