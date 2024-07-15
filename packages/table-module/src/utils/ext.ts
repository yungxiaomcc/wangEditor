




/**
 * 
 * 
 * 根据extra info 字符串内容 拼接 tag前部分内容
*/
export function getExtraInfoPrefixTag(elem_tag: string, extra_info_str: string) {

  const extra_info_json = JSON.parse(extra_info_str)

  let tag_str = `<${elem_tag}`
  for (const [key, value] of Object.entries(extra_info_json)) {
    tag_str += ` ${key}="${value}"`
  }

  return tag_str

}







/**
 * 
 * 提取elem中所有元素的属性
*/
export function getElementAttributes(element) {
  let attributes = element.attributes;
  let attributesObject = {};

  for (let i = 0; i < attributes.length; i++) {
    let attr = attributes[i];
    attributesObject[attr.name] = attr.value;
  }

  return attributesObject;
}


/**
 * 
 * 提取element 中的extrinfo 内容
*/

export function getElementExtraInfo(element) {
  return JSON.stringify(getElementAttributes(element))
}

