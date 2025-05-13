import './App.css';
import Left from '@/compoments/shangjia';
import Right from '@/compoments/customer';
import { PriceStore } from '@/store/price';
function App() {
  const { count, getTotal, price } = PriceStore();
  return (
    <>
      <div className="container">
        <h1>Zustand Demo</h1>
        <div className="result">
          <div className="price">
            个数:<span>{count}</span>
          </div>
          <div className="price">
            单价:<span>{price}</span>
          </div>
          <div className="price">
            总价格:<span>{getTotal()}</span>
          </div>
        </div>

        <div className="wraps">
          <Left />
          <Right />
        </div>
      </div>
    </>
  );
}

export default App;
