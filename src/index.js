import Plugin from '@swup/plugin';

export default class MetaTagsPlugin extends Plugin {
  name = 'MetaTagsPlugin'

  constructor() {
    super()
  }

  mount() {
    this.swup.on('contentReplaced', this.getReplaceHead)
  }

  unmount() {
		this.swup.off('contentReplaced', this.getReplaceHead)
  }

  getReplaceHead = () => {
    let head = this.currentHead()
    let newHead = this.newHead()

    const headTags = [
      'meta',
      'link[itemprop]',
      'link[rel="prev"]',
      'link[rel="next"]',
      'link[rel="canonical"]',
      'link[rel="alternate"]',
      'link[rel="shortlink"]'
    ].join(',')

    this.removeCurrent(head, headTags)
    this.addNew(head, newHead, headTags)

    this.cleanup(newHead)
  }

  currentHead = () => {
    return document.head
  }

  newHead = () => {
    const rawHead = this.swup.cache
      .getCurrentPage()
      .originalContent.replace('<head', '<div id="swupHead"')
      .replace('</head>', '</div>')

    let head = document.createElement('div')
    head.innerHTML = rawHead

    return head
  }

  removeCurrent = (head, headTags) => {
    const tags = head.querySelectorAll(headTags)
    for (let i = 0; i < tags.length; i++) {
      head.removeChild(tags[i])
    }
  }

  addNew = (head, newHead, headTags) => {
    const tags = newHead.querySelectorAll(headTags)
    for (let i = 0; i < tags.length; i++) {
      head.appendChild(tags[i])
    }
  }

  cleanup = (newHead) => {
    newHead.innerHTML = ''
    newHead = null
  }
}
