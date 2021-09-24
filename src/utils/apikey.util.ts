export class ApiKeyUtil {
  private static KEY_VALUE: string

  constructor() {}

  static getKeyValue() {
    return this.KEY_VALUE
  }

  static setKeyValue(value: string) {
    this.KEY_VALUE = value
  }
}
