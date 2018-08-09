/* @flow */

import { namespaceMap } from 'web/util/index'

export function createElement (tagName: string, vnode: VNode): Element {
  console.log('createElement', tagName, vnode)
  const elm = document.createElement(tagName)
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple')
  }
  return elm
}

export function createElementNS (namespace: string, tagName: string): Element {
  console.log('createElementNS', namespace, tagName)
  return document.createElementNS(namespaceMap[namespace], tagName)
}

export function createTextNode (text: string): Text {
  console.log('createTextNode', text)
  return document.createTextNode(text)
}

export function createComment (text: string): Comment {
  console.log('createComment', text)
  return document.createComment(text)
}

export function insertBefore (parentNode: Node, newNode: Node, referenceNode: Node) {
  console.log('insertBefore', parentNode, newNode, referenceNode)
  parentNode.insertBefore(newNode, referenceNode)
}

export function removeChild (node: Node, child: Node) {
  console.log('removeChild', node, child)
  node.removeChild(child)
}

export function appendChild (node: Node, child: Node) {
  console.log('appendChild', node, child)
  node.appendChild(child)
}

export function parentNode (node: Node): ?Node {
  console.log('parentNode', node)
  return node.parentNode
}

export function nextSibling (node: Node): ?Node {
  console.log('nextSibling', node)
  return node.nextSibling
}

export function tagName (node: Element): string {
  console.log('tagName', node)
  return node.tagName
}

export function setTextContent (node: Node, text: string) {
  console.log('setTextContent', node, text)
  node.textContent = text
}

export function setAttribute (node: Element, key: string, val: string) {
  console.log('setAttribute', node, key, val)
  node.setAttribute(key, val)
}
