export class Validator {
  validate = (value: any, rules: any) => {
    const self = this;
    let msg = null;
    let endMessage = '';
    rules.forEach((rule: any) => {
      msg = self[rule](value);
      if (msg) {
        endMessage = msg;
      }
    });
    return endMessage;
  };

  /**
   * check if value is string
   * @param value
   * @returns {string}
   */
  isString = (value: any) => {
    if (typeof value === 'string') {
      return '';
    }
    return 'isNotString';
  };

  /**
   * Check if value is empty
   * @param value
   * @returns {string}
   */
  isNotEmpty = (value: any) => {
    if (value !== '' && value !== null && typeof value !== 'undefined') {
      return '';
    }
    return 'isNotEmpty';
  };

  /**
   * Check if value i integer
   * @param value
   * @returns {string}
   */
  isInt = (value: any) => {
    if (!Number.isNaN(value)) {
      return '';
    }
    return 'isNotInt';
  };

  /**
   * Check if value i integer in select box
   * @param value
   * @returns {string}
   */
  isIntSelect = (value: any) => {
    if (!Number.isNaN(value)) {
      return '';
    }
    return 'isNotSelected';
  };

  /**
   *
   * @param value
   * @returns {string}
   */
  isPositive = (value: any) => {
    if (value > 0) {
      return '';
    }
    return 'isNotPositive';
  };

  /** check if value is in email format
   * @param value
   * @returns {string}
   */
  isEmail = (value: any) => {
    const re =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(value).toLowerCase())) {
      return '';
    }
    return 'isNotEmail';
  };

  /**
   * check if password is strong
   * @param value
   * @returns {string}
   */
  isStrongPassword = (value: any) => {
    const re =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,20}$/;
    if (re.test(value)) {
      return '';
    }
    return 'isNotStrongPassword';
  };

  /**
   * check if value is true
   * @param value
   * @returns {string}
   */
  isTrue = (value: any) => {
    if (value) {
      return '';
    }
    return 'isNotTrue';
  };

  /**
   * check if value is in lower case
   * @param value
   * @returns {string}
   */
  isLowerCase = (value: string) => {
    if (value === value.toLowerCase()) {
      return '';
    }
    return 'isNotLowerCase';
  };

  /**
   * check if value is in uppercase
   * @param value
   * @returns {string}
   */
  isUpperCase = (value: string) => {
    if (value === value.toUpperCase()) {
      return '';
    }
    return 'isNotUpperCase';
  };

  /**
   * check if value is valid ethereum address
   * @param value
   * @returns {string}
   */
  isAddress = (value: any) => {
    if (!/^(0x)?[0-9a-f]{40}$/i.test(value)) {
      // check if it has the basic requirements of an address
      return 'isNotAddress!';
    }
    if (
      /^(0x)?[0-9a-f]{40}$/.test(value) ||
      /^(0x)?[0-9A-F]{40}$/.test(value)
    ) {
      // If it's all small caps or all all caps, return true
      return '';
    }
    return '';
  };
}
