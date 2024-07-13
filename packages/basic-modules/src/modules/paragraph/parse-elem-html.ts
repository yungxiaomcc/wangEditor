/**
 * @description parse html
 * @author wangfupeng
 */

import { Descendant, Text } from 'slate'
import { IDomEditor } from '@wangeditor/core'
import { ParagraphElement } from './custom-types'
import $, { DOMElement } from '../../utils/dom'

/**
 *
 * 从富文本html 到数据模型
 * elem： 富文本html生成的dom Elemenet
 * 返回： 数据模型对象
 */
function parseParagraphHtml(
  elem: DOMElement,
  children: Descendant[],
  editor: IDomEditor
): ParagraphElement {
  const $elem = $(elem)

  // 通过 dom elem, 提取其中的属性

  children = children.filter(child => {
    if (Text.isText(child)) return true
    if (editor.isInline(child)) return true
    return false
  })

  // 无 children ，则用纯文本
  if (children.length === 0) {
    children = [{ text: $elem.text().replace(/\s+/gm, ' ') }]
  }

  return {
    type: 'paragraph',
    extra_info: JSON.stringify(elem.attributes),
    // @ts-ignore
    children,
  }
}

// selector 用来过滤元素，只识别过滤后的元素
export const parseParagraphHtmlConf = {
  selector: 'p:not([data-w-e-type])', // data-w-e-type 属性，留给自定义元素，保证扩展性
  parseElemHtml: parseParagraphHtml,
}
