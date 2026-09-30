export type Locale = 'zh-CN' | 'zh-TW' | 'ja' | 'en';

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
  
  // 允许读取字符串、数组、对象等任意结构，支持 .map() 遍历，彻底解决类型报错
  [key: string]: any;
}
