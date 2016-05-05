# hashwatch

This module lets you listen for hashchange events in all browsers, even those that don’t emit the `hashchange` event.

** The [tests](#running-the-tests) should pass in all browsers, even IE 6 and friends! **

## Install

```sh
$ npm install hashwatch
```

## Usage

```js
var watch = require('hashwatch')(handler)

function handler () {
  console.log('The hash is now ' + location.hash)
  console.log('so let’s stop listening for a bit…')
  watch.pause()

  setTimeout(function () {
    console.log('Okay, let’s pick things back up…')
    watch.resume()
  }, 1000)
}
```

### Page weight

`require('hashwatch')`

| compression         |    size |
| :------------------ | ------: |
| hashwatch.js        | 1.37 kB |
| hashwatch.min.js    |   980 B |
| hashwatch.min.js.gz |   480 B |


### Running the tests

Until [testling](https://ci.testling.com/) comes back (or is replaced by something elegant) you can run the tests yourself in any browser:

```sh
$ git clone git@github.com:michaelrhodes/hashwatch
$ cd hashwatch
$ npm install
$ npm test
```

#### License

[MIT](http://opensource.org/licenses/MIT)
