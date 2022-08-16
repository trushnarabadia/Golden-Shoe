import productData from './productData';

function App() {
  return (
    <div>
      <header>
        <a href="/">Golden Shoe</a>
      </header>
      <main>
        <h1>Products List</h1>
        <div className='products'>
        {productData.products.map((product) => (
          <div className='product' key={product.slug}>
            <img src={product.image} alt={product.name}/>
            <div className='prodinfo'>
            <p>{product.name}</p>
            <p>{product.price}</p>
            </div>
          </div>
        ))}
        </div>
      </main>
    </div>
  )
}

export default App;
