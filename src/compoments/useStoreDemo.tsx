import { storeWithStore } from '@/store/useStoreHandle';
import './index.css';
export default function UseStoreDemo() {
  const price = storeWithStore.usePrice();
  const count = storeWithStore.useCount();
  const addPrice = storeWithStore.useSetPrice();
  const addCount = storeWithStore.useSetCount();

  return (
    <div className="left">
      <h1>UseStore Demo</h1>
      <p>
        <label>
          Price Store: <span>{price}</span>
        </label>
        <br />
        <label>
          Count Store: <span>{count}</span>
        </label>
      </p>
      <button onClick={addCount}>个数增加+1</button>
      <button onClick={addPrice}>单价增加+1</button>
    </div>
  );
}
