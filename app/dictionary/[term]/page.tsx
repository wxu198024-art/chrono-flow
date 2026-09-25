import React from 'react';

export default function DictionaryTermPage({ params }: { params: { term: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">词条详情: {params.term}</h1>
      <p className="text-gray-400">词条解析加载中或未设置内容...</p>
    </div>
  );
}
