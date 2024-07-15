import './styles/App.css';
import AddProductComponent from './components/AddProductComponent';
import SearchProductComponent from './components/SearchProductComponent';
import ShowProductComponent from './components/ShowProductComponent';
import { ProductProvider } from './components/ProductContext';

function App() {
  const defaultMessage: string = 'Productfinder'

  return (
    <div className="flexCenter">
      <header>
        <h1 className="headerTitle">{defaultMessage}</h1>
      </header>
      <ProductProvider>
        <div className="functionBoxContainer">
          <AddProductComponent></AddProductComponent>
          <SearchProductComponent></SearchProductComponent>
        </div>
        <ShowProductComponent></ShowProductComponent>
      </ProductProvider>
    </div>
  );
}

export default App;
