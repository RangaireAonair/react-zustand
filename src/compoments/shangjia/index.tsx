import { useEffect } from 'react';
import { PriceStore } from '@/store/price';

import '../index.css';
export default function Left() {
  const { addCount, addPrice, getFetchData } = PriceStore();

  useEffect(() => {
    getFetchData();
  });
  return (
    <div className="left">
      <h1>商家组件</h1>
      <button onClick={addCount}>个数增加+1</button>
      <button onClick={addPrice}>单价增加+1</button>
    </div>
  );
}
