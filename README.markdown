Stand-alone, CommonJS compliant library to aid basic DOM operations.

Install
=======
From NPM:
```
$ npm install domutils
```

Or, from Github:
```
$ curl https://github.com/azer/domutils/raw/master/lib/domutils.js -o domutils.js
```

Usage
=====
On a CommonJS compliant environment (JSBuild, Browserify, RequireJS etc.)

```javascript
> var domutils = require('domutils');
> domutils.attr(domutils.select('form.login'), 'method', 'POST');
```

On a classic browser environment:

```html
<script src="domutils.js"></script>
```
```javascript
> domutils.on(window, 'DOMContentLoaded', doSomething);
```


Available Methods
=================
* add
* addListener
* attr
* children
* create
* on (alias for addListener)
* removeListener
* select
* selectAll

Development
===========
status: under development
todo:

  * Extend Documentation
  * Switch to better testing suite
  * Complete lacking tests
