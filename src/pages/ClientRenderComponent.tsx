'use client'
import { useEffect, useState } from 'react';
export default function ClientRenderComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // 在组件挂载后进行数据获取
    fetchData();
  }, []);

  const fetchData = async () => {
    // 发起异步请求或执行其他数据获取操作
    // 这里以使用 fetch 函数为例
    const response = await fetch('/api/data');
    const result = await response.json();

    setData(result); // 更新组件 state
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* 渲染数据 */}
      <h1>{data}</h1>
      <p>{data}</p>
    </div>
  );
}
