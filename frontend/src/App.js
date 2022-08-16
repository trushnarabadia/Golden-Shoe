import productData from './productData';

function App() {
  return (
    <div>
      <header>
        <a href="/">Golden Shoe</a>
      </header>
      <main>
        <h1>Products List</h1>
        {productData.products.map((product) => (
          <div>
            <img src={product.image} alt={product.name}/>
            <p>{product.name}</p>
            <p>{product.price}</p>
          </div>
        ))}
      </main>
    </div>
  )
}

export default App;
