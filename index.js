var shite = !('onhashchange' in window)

module.exports = function (handler, interval) {
  interval = isNaN(interval) ? 100 : interval
  var hash = window.location.hash
  var poll = null

  resume()

  return {
    resume: resume,
    pause: pause
  }

  function resume () {
    if (!shite) return add(handler)
    poll = setInterval(check, interval)
  }

  function pause () {
    shite ? clearInterval(poll) : remove(handler)
  }

  function check () {
    if (window.location.hash !== hash) {
      hash = window.location.hash
      handler()
    }
  }
}

function add (handler) {
  !!window.addEventListener ?  
    addEventListener('hashchange', handler, false) :
    attachEvent('onhashchange', handler)
}

function remove (handler) {
  !!window.removeEventListener ?  
    removeEventListener('hashchange', handler)  :
    detachEvent('onhashchange', handler)
}
