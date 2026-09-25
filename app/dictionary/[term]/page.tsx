import React from 'react';

// Next.js 动态路由页面组件
export default function DictionaryTermPage({ params }: { params: { term: string } }) {
  // 解码 URL 中的词条参数（例如 "wuxing" 或 "ziwei"）
  const decodedTerm = decodeURIComponent(params.term || '');

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-4 capitalize">
        词条解析: {decodedTerm}
      </h1>
      <div className="p-6 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm">
        <p className="text-gray-300 leading-relaxed">
          正在为您诊断该时空/命理词条的内容...
        </p>
      </div>
    </div>
  );
}
