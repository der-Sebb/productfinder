import './App.css';
import AddProductComponent from './components/AddProductComponent';
import SearchProductComponent from './components/SearchProductComponent';
import ProductShowComponent from './components/ProductShowComponent';
import { ProductProvider } from './components/ProductContext';

function App() {

  return (
    <ProductProvider>
      <div className='flex flex-col items-center min-h-screen bg-emerald-200'>
        <h1 className='text-4xl font-bold text-gray-800'>Productfinder</h1>
        <div className='flex flex-row'>
          <AddProductComponent></AddProductComponent>
          <SearchProductComponent></SearchProductComponent>
        </div>
        <ProductShowComponent></ProductShowComponent>
      </div>
    </ProductProvider>
  );
}

export default App;
