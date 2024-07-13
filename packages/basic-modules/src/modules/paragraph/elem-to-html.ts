/**
 * @description to html
 * @author wangfupeng
 */

import { Element } from 'slate'
import { ParagraphElement } from './custom-types'

/**
 * 从数据模型  到 富文本html
 * @param elem  数据模型对象
 * @param childrenHtml
 * @returns
 */
function pToHtml(elem: Element, childrenHtml: string): string {
  if (childrenHtml === '') {
    return '<p><br></p>'
  }

  const { extra_info = '{}' } = elem as ParagraphElement

  const extra_info_json = JSON.parse(extra_info)

  let tag_str = '<p'
  for (const [key, value] of Object.entries(extra_info_json)) {
    tag_str += ` ${key}="${value}"`
  }

  tag_str += `>${childrenHtml}</p>`

  return tag_str
  //return `<p extra_info="${extra_info}">${childrenHtml}</p>`
}

export const pToHtmlConf = {
  type: 'paragraph',
  elemToHtml: pToHtml,
}
