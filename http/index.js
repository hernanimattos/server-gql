import axios from 'axios';

class HTTP {
  static urlParser(url, param, adic) {
    const urlParse = Object.keys(param).map((e) => `${e}=${param[e]}`).join('?');
    return `${url}?${urlParse}?${adic || ''}`;
  }

  static get(params) {
    axios(...params);
  }
}


export default new HTTP();
