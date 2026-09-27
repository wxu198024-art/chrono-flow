import { redirect } from 'next/navigation';

export default function DictionaryIndexPage() {
  // 当用户访问 /dictionary 时，自动重定向到 Level 1 原点锚块
  redirect('/dictionary/primordial-anchor');
}