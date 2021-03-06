// @ts-check

'use strict'

const { addErrorContext, bareUrlRe, filterTokens } = require('../helpers')

module.exports = {
  names: ['MD034', 'no-bare-urls'],
  description: 'Bare URL used',
  tags: ['links', 'url'],
  function: function MD034 (params, onError) {
    filterTokens(params, 'inline', (token) => {
      let inLink = false
      token.children.forEach((child) => {
        const { content, line, lineNumber, type } = child
        let match = null
        if (type === 'link_open') {
          inLink = true
        } else if (type === 'link_close') {
          inLink = false
        } else if ((type === 'text') && !inLink) {
          while ((match = bareUrlRe.exec(content)) !== null) {
            const [bareUrl] = match
            const index = line.indexOf(content)
            const range = (index === -1) ? null : [
              line.indexOf(content) + match.index + 1,
              bareUrl.length
            ]
            const fixInfo = range ? {
              editColumn: range[0],
              deleteCount: range[1],
              insertText: `<${bareUrl}>`
            } : null
            addErrorContext(
              onError,
              lineNumber,
              bareUrl,
              null,
              null,
              range,
              fixInfo
            )
          }
        }
      })
    })
  }
}
