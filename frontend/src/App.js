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
          
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
