/**
 * @description render paragraph elem
 * @author wangfupeng
 */

import { Element as SlateElement } from 'slate'
import { jsx, VNode } from 'snabbdom'
import { IDomEditor } from '@wangeditor/core'

/**
 * 参数elemNode 对应的就是在 types中定义的数据结构对象
 * 通过此方法，把数据结构渲染为vdom，通过 vue2 中 使用相同的 snabbdom.js库
 * render paragraph elem
 * @param elemNode slate elem
 * @param children children
 * @param editor editor
 * @returns vnode
 */
function renderParagraph(
  elemNode: SlateElement,
  children: VNode[] | null,
  editor: IDomEditor
): VNode {
  //创建一个虚拟dom，具体参考snabbdom
  const vnode = <p>{children}</p>
  return vnode
}

export const renderParagraphConf = {
  type: 'paragraph',
  renderElem: renderParagraph,
}
