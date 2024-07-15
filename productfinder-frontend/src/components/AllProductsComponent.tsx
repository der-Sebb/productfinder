import '../styles/ProductShowBox.css';
import '../styles/App.css';
import { useProductContext } from './ProductContext';
import ProductComponent from './ProductComponent';
import { Product } from '../interfaces/types';

function AllProductsComponent() {
    const { products } = useProductContext();

    return (
        <div>
            <label className='productShowTitle'>Product list:</label>
            <div>
                {products.map((product: Product) => (
                    <ProductComponent name={product.name} description={product.description}></ProductComponent>
                ))}
            </div>
        </div>
    );
}

export default AllProductsComponent;
