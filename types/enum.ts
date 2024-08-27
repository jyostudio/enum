/**
 * 枚举类
 */
declare class Enum {
  /**
   * 描述
   */
  get description(): String;

  /**
   * 枚举值转数值
   */
  get valNumber(): Number;

  /**
   * 枚举值转字符串
   */
  get valString(): String;

  /**
   * 枚举值转布尔值
   */
  get valBoolean(): Boolean;

  /**
   * 枚举值转对象
   */
  get valObject(): Object;

  /**
   * 初始化 Enum 实例
   */
  constructor();

  /**
   * 初始化 Enum 实例
   * @param value - 枚举对象
   */
  constructor(value: Enum);

  /**
   * 初始化 Enum 实例
   * @param value - 枚举值
   */
  constructor(value: any);

  /**
   * 初始化 Enum 实例
   * @param value - 枚举对象
   * @param description - 枚举描述
   */
  constructor(value: Enum, description: String);

  /**
   * 初始化 Enum 实例
   * @param value - 枚举值
   * @param description - 枚举描述
   */
  constructor(value: any, description: String);

  [Symbol.iterator](): IterableIterator<any>;

  /**
   * 获取所有枚举
   */
  static getAll(): Enum[];

  /**
   * 根据数值获取枚举
   * @param value - 枚举值
   * @returns 枚举
   */
  static getByValue(value: Number): Enum | null;

  /**
   * 根据字符串获取枚举
   * @param value - 枚举值
   * @returns 枚举
   */
  static getByValue(value: String): Enum | null;

  /**
   * 根据布尔值获取枚举
   * @param value - 枚举值
   * @returns 枚举
   */
  static getByValue(value: Boolean): Enum | null;

  /**
   * 根据枚举获取枚举
   * @param value - 枚举值
   * @returns 枚举
   */
  static getByValue(value: Enum): Enum | null;

  /**
   * 根据对象获取枚举
   * @param value - 枚举值
   * @returns 枚举
   */
  static getByValue(value: Object): Enum | null;

  /**
   * 根据描述获取枚举
   * @param value - 描述
   * @returns 枚举
   */
  static getByDescription(value: String): Enum | null;

  /**
   * 设置枚举表
   * @param map - 枚举表
   */
  static set(map: Object);

  /**
   * 获取枚举值
   * @returns 枚举值
   */
  valueOf(): any;
}
