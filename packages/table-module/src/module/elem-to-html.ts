/**
 * @description to html
 * @author wangfupeng
 */

import { Element } from 'slate'
import { TableCellElement, TableRowElement, TableElement } from './custom-types'
import { getExtraInfoPrefixTag } from '../utils/ext'

function tableToHtml(elemNode: Element, childrenHtml: string): string {
  const { width = 'auto', extra_info = '{}' } = elemNode as TableElement

  let tag_str = getExtraInfoPrefixTag('table', extra_info)

  tag_str += `style="width: ${width};"><tbody>${childrenHtml}</tbody></table>`

  return tag_str

  //return `<table style="width: ${width};"><tbody>${childrenHtml}</tbody></table>`
}

function tableRowToHtml(elem: Element, childrenHtml: string): string {
  const { extra_info = '{}' } = elem as TableRowElement

  let tag_str = getExtraInfoPrefixTag('tr', extra_info)

  tag_str += `>${childrenHtml}</tr>`

  return tag_str

  //return `<tr>${childrenHtml}</tr>`
}

function tableCellToHtml(cellNode: Element, childrenHtml: string): string {
  const {
    colSpan = 1,
    rowSpan = 1,
    isHeader = false,
    width = 'auto',
    extra_info = '{}',
  } = cellNode as TableCellElement
  const tag = isHeader ? 'th' : 'td'


  let tag_str = getExtraInfoPrefixTag(tag, extra_info)

  tag_str += ` colSpan="${colSpan}" rowSpan="${rowSpan}" width="${width}">${childrenHtml}</${tag}>`

  return tag_str

  // return `<${tag} colSpan="${colSpan}" rowSpan="${rowSpan}" width="${width}">${childrenHtml}</${tag}>`
}

export const tableToHtmlConf = {
  type: 'table',
  elemToHtml: tableToHtml,
}

export const tableRowToHtmlConf = {
  type: 'table-row',
  elemToHtml: tableRowToHtml,
}

export const tableCellToHtmlConf = {
  type: 'table-cell',
  elemToHtml: tableCellToHtml,
}
