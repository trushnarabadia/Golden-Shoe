import productData from './productData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <a href="/">Golden Shoe</a>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <h1>Products List</h1>
          <div className="products">
            {productData.products.map((product) => (
              <div className="product" key={product.slug}>
                <a href={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name} />
                </a>
                <div className="prodinfo">
                  <p>{product.name}</p>
                  <p>
                    <strong>£{product.price}</strong>
                  </p>
                  <button>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
