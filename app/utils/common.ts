export default class Common {
  static getParameterByName = (name: string, url: string) => {
    const defaultUri = '/';
    // eslint-disable-next-line no-param-reassign
    if (!url) url = window.location.href;
    // eslint-disable-next-line no-param-reassign,no-useless-escape
    name = name.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
    const results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    const uri = decodeURIComponent(results[2].replace(/\+/g, ' '));
    const exceptUri = ['/', '/login'];
    if (exceptUri.includes(uri)) {
      return defaultUri;
    }
    return uri;
  };

  static totalPropReplacer = (key: string, value: any) => {
    if (key !== "total") { return value; }
  }

  static numberWithCommas = (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  static trimObject = (obj: any) => {
    return Object.keys(obj).reduce((acc:any, curr)=> {
      if (typeof obj[curr] == 'string') {
        acc[curr] = obj[curr].trim();
      } else {
        acc[curr] = obj[curr];
      }
      
      return acc;
    }, {});
  }
}
