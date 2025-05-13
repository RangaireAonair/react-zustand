import { PriceStore } from '@/store/price';

import '../index.css';
export default function Right() {
  const { addCount, addPrice } = PriceStore();
  return (
    <div className="right">
      <h1>客户组件</h1>
      <button onClick={addCount}>个数增加+1</button>
      <button onClick={addPrice}>单价增加+1</button>
    </div>
  );
}
