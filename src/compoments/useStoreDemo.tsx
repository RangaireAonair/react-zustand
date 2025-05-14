import { storeWithStore } from '@/store/useStoreHandle';
import { useEffect, useState, memo } from 'react';

import SubscribeStore from '@/store/subscribeWithSelector';
import './index.css';
// import {shallow} from "zustand/vanilla/shallow";
export default memo(function UseStoreDemo() {
  const price = storeWithStore.usePrice();
  const count = storeWithStore.useCount();
  const addPrice = storeWithStore.useSetPrice();
  const addCount = storeWithStore.useSetCount();

  const [bgColor, setBgColor] = useState<'lightblue' | 'lightpink'>('lightblue');
  useEffect(() => {
    //region subscribe的回调函数使用方式
    const unsub = SubscribeStore.subscribe((curr) => {
      if (curr.position.y > 0.5 && curr.position.x > 0.5) {
        setBgColor('lightpink');
      } else {
        setBgColor('lightblue');
      }
    });
    return () => unsub();
    //endregion

    //region subscribe的 两个回调函数方式, 可以指定`subscribe`指定的state
    // const unsub = SubscribeStore.subscribe(state=> state.position, (curr)=>{
    //     if(curr.y > 0.5 && curr.x > 0.5){
    //         setBgColor("lightpink");
    //     }else{
    //         setBgColor("lightblue");
    //     }
    // }, {
    //     equalityFn: shallow,
    //     fireImmediately: true,
    // })
    //  return () => unsub();
    //endregion
  });
  return (
    <div className="left" style={{ backgroundColor: bgColor }}>
      <h1>UseStore Demo</h1>
      <span> {Math.random()}</span>
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
});
