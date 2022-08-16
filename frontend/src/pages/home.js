import productData from '../productData';

function Home() {
  return (
    <div>
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
    </div>
  );
}

export default Home;
