







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

