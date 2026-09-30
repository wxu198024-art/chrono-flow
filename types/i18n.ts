export type Locale = 'zh-CN' | 'zh-TW' | 'ja' | 'en';

// 带有索引签名的字典接口：既支持类型提示，又绝不拦截未知属性
export interface Dictionary {
  brand?: string;
  subtitle?: string;
  todayRhythm?: string;
  themeDark?: string;
  themeLight?: string;
  dictionary?: string;
  terms?: string;
  privacy?: string;
  copyright?: string;
  
  // 允许读取任意字符串 key，彻底根治 Property 'xxx' does not exist 报错
  [key: string]: string | undefined;
}