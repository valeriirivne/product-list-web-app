import './App.css';
import SHOP_DATA from './shop-data';
import { ProductCard } from './components/product-card/product-card.component';

function App() {
  return (
    <div className="App">
      <div className="title">Ukrainian Best SHOP</div>
      <div className="products">
        {SHOP_DATA.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

export default App;
