export function string2node(s: string, type?: string) {
  const div = document.createElement('div');
  div.innerHTML = s;
  const fragment = document.createDocumentFragment();
  const length: number = div.childNodes.length;
  const childNodes: any[] = [...div.childNodes];
  // type === 'completionSelect' && console.log(childNodes.length);
  let i = 0;
  while (i < length) {
    const element: any = childNodes[i];
    fragment.append(element);
    i++;
  }
  const nodeList: Node[] = [...fragment.childNodes];
  return nodeList;
}
export function latexToDomString(latexStr: string) {
  return window.katex.renderToString(latexStr.replace(/&nbsp;/g, '').replace(/[\r\n]/g, '').replace(/\s\s/g, ''), {
    throwOnError: false
  });
}
