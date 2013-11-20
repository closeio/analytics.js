This branch contains the custom build of Analytics.js for Close.io.

The key difference is that it points (in `component.json` to `elasticsales/analytics.js-integrations` rather than the `segmentio` version.

1. See [elasticsales/analytics.js-integrations](https://github.com/elasticsales/analytics.js-integrations) for details on how to add/remove integrations.
1. Since we're not using version numbers for each Close.io change, clean components and rebuild using the command below, after making changes in the integrations repo. 
1. `make clean && make && make analytics.js`

### One-time setup:

`npm install -g component`
