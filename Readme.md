This branch contains the custom build of Analytics.js for Close.io.

### How to add/remove integrations

 - Add/remove the relevant lines from `component.json` and `lib/integrations.js` - keep them in sync. Make sure the `.json` is valid JSON (no comments, etc.).
 - Run `make analytics.js` to compile.

### One-time setup:

`npm install -g component`

