## JSONP Wrapper

Wrap things in JSONP.

## Installation

Requires [node](http://nodejs.org/ "Node JS") and [npm](http://npmjs.org/ "NPM - Node Package Manager"). Then:

```
git clone http://drobbins@github.com/drobbins/jsonp_wrapper.git jsonp_wrapper
cd jsonp_wrapper
npm install request
node server.js
```

## Use

Include script tags like this:

```
<script type="text/javascript" src="http://localhost:1337/jsonpwrapper?query_objects></script>
```

Where query objects can be:
* ``callback`` The function that will be called with the results
* ``url`` The url of the web service you wish to query
* ``type`` Allows you to set the Accept: header for the query
