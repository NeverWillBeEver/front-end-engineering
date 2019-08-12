const unescape = (str: string, dom: any) => {
  dom.innerHTML = str;
  return dom.innerText || dom.textContent;
};
const fromCodePoint = (str: any) => {
  return String.fromCodePoint(str);
};

const characterChange = (str: any) => {
  let elem: any = document.createElement('div');
  const str1 = unescape((str || '').replace(/&nbsp;/g, ' '), elem);
  const str2 = str1.replace(/&#(\d+);/g, (e: any, $1: any) => fromCodePoint($1));
  elem = null;
  return str2;
};


const regbackList = [
  /zmcolor="(#[^"]{3,6})"/g,
  /zmalign="([a-zA-Z]+)"/g,
  /<zmindent><\/zmindent>/g,
  /<zmblank[^>]*>[^<zm]*<\/zmblank>/g,
  /<zmsubline[^>]*>[^<zm]*<\/zmsubline>/g,
  /<img[^>]+file:[^>]+>/g,
];

const backfromZmStandPrev = (str: any) => {
  if (!str) {
    return '';
  }
  const newStr: any = str.replace(regbackList[0], 'style="color: $1;"')
    .replace(regbackList[1], 'style="text-align: $1;"')
    .replace(regbackList[2], '<zmindent></zmindent>')
    .replace(regbackList[3], '<zmblank>空类1</zmblank>')
    .replace(regbackList[4], '<zmsubline>空类2</zmsubline>')
    .replace(regbackList[5], '');
  return newStr.replace(/<p[^>]*>(<br[^>]*>)?<\/p>\s*$/, '');
};

const renderToKatex = (str: any) => {
  const str1 = str.replace(/<zmlatex(\scontenteditable="false")?>([^<zm]*(<zmlatex>[^</z]+<\/zmlatex>)[^</zm]*)<\/zmlatex>/g, (e: any, $1: any, $2: any) => `<zmlatex>${$2.replace(/<zmlatex(\scontenteditable="false")?>([^</zmlatex>]+)<\/zmlatex>/g, (res: any, i$1: any, i$2: any) => i$2)}</zmlatex>`);
  const str2 = str1.replace(/(<zmlatex(\scontenteditable="false")?>)|(<\/zmlatex>)/g, '\\$').replace(/\\\$([^\$]+)\\\$/g, (ev: any, $1: any) => {
    let formulaPaste = '';
    try {
      formulaPaste = window.katex.renderToString(characterChange($1).replace(/(\u007e|\u301c)/g, (e: any, i$1: any) => `\\text{${i$1}}`).replace(/\s?([\u4e00-\u9fa5]+)/g, (e: any, y$1: any) => `\\text{${y$1}}`));
    } catch (err) {
      formulaPaste = $1;
    }
    return formulaPaste;
  });
  return str2;
};

export default renderToKatex;
