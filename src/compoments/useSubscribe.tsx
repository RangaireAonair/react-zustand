import { useSetPosition, usePosition } from '@/store/subscribeWithSelector';
import './index.css';
import { memo } from 'react';
export default memo(function UseSubscribe() {
  const position = usePosition();

  const setFn = useSetPosition();
  const addCount = () => {
    setFn({ x: Math.random(), y: Math.random() });
  };

  return (
    <div className="left">
      <h1>UseSubscribe Demo</h1>
      <p>
          <label>Math.random: <span>{Math.random().toFixed(2)}</span></label>
          <br/>
        <label>
          Position X: <span>{position.x.toFixed(2)}</span>
        </label>
        <br />
        <label>
          Position Y: <span>{position.y.toFixed(2)}</span>
        </label>
      </p>
      <button onClick={addCount}>个数增加+1</button>
    </div>
  );
});
