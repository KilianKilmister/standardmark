// @ts-check

'use strict'

const {
  addErrorDetailIf, listItemMarkerRe,
  rangeFromRegExp, unorderedListStyleFor
} = require('../helpers/helpers')
const { flattenedLists } = require('./cache')

module.exports = {
  names: ['MD004s', 'ul-style'],
  description: 'Unordered list style',
  tags: ['bullet', 'ul'],
  function: function MD004 (params, onError) {
    const style = String('dash')
    flattenedLists().forEach((list) => {
      if (list.unordered) {
        list.items.forEach((item) => {
          const itemStyle = unorderedListStyleFor(item)
          addErrorDetailIf(onError, item.lineNumber,
            style, itemStyle, null, null,
            rangeFromRegExp(item.line, listItemMarkerRe))
        })
      }
    })
  }
}
