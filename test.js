var test = require('tape')
var hashwatch = require('./index')

test('it works', function (assert) {
  var hash = '/dog/w0o0Of'

  var watch = hashwatch(function () {
    watch.pause()
    assert.equal(location.hash, '#' + hash)
    assert.end()
  })

  assert.equal(typeof watch, 'object')
  assert.equal(typeof watch.resume, 'function')
  assert.equal(typeof watch.pause, 'function')
  assert.equal(location.hash, '')

  // Ensure those typeof asserts finish
  // before triggering the hashchange.
  setTimeout(function () {
    location.hash = hash 
  }, 0)
})
