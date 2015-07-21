var keykey = require('keykey')

var WHITESPACE_X = /\s+/g

function vaccuum(string) {
  return string.replace(WHITESPACE_X, '')
}

function reduce(object, each) {
  var subObject = {}
  Object.keys(object).forEach(each.bind(each, subObject, object))
  return subObject
}

function pick(object, keys) {
  var kk = keykey(keys)
  return reduce(object, function (subObject, object, key) {
    key in kk && (subObject[key] = object[key])
  })
}

function first(list) {
  return list[0]
}

function remove(string, toRemove) {
  return string.replace(toRemove,'')
}

function argspace(delimiter, strippedComponent) {
  var argsSansProgAndFile = process.argv.slice(2),
      firstArg = first(argsSansProgAndFile),
      toStrip = delimiter + strippedComponent,
      strippedFirstArg = remove(firstArg, toStrip),
      components = strippedFirstArg.split(delimiter)

  return components
}

module.exports = {
  vaccuum:  vaccuum,
  remove:   remove,
  reduce:   reduce,
  pick:     pick,
  first:    first,
  argspace: argspace
}
