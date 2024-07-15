/**
 * @description to html
 * @author wangfupeng
 */

import { Element } from 'slate'

import { Text } from 'slate'
import { getExtraInfoPrefixTag } from '../../utils/ext'


interface HeaderElmT {

  type: string
  extra_info: string
  children: Text[]
}

function genToHtmlFn(level: number) {

  function headerToHtml(elem: Element, childrenHtml: string): string {


    const { extra_info = '{}' } = elem as HeaderElmT
    let tag_str = getExtraInfoPrefixTag(`h${level}`, extra_info)

    return `${tag_str}> ${childrenHtml}</h${level}>`
  }
  return headerToHtml
}

export const header1ToHtmlConf = {
  type: 'header1',
  elemToHtml: genToHtmlFn(1),
}

export const header2ToHtmlConf = {
  type: 'header2',
  elemToHtml: genToHtmlFn(2),
}

export const header3ToHtmlConf = {
  type: 'header3',
  elemToHtml: genToHtmlFn(3),
}

export const header4ToHtmlConf = {
  type: 'header4',
  elemToHtml: genToHtmlFn(4),
}

export const header5ToHtmlConf = {
  type: 'header5',
  elemToHtml: genToHtmlFn(5),
}
