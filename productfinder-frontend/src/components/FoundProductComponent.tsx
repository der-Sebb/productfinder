import '../styles/ProductShowBox.css';
import '../styles/App.css';
import { useProductContext } from './ProductContext';
import ProductComponent from './ProductComponent';

function FoundProductComponent() {
    const { foundProducts } = useProductContext();

    return (
        <div>
            <label className='productShowTitle'>Relevant products:</label>
            <ul>
                {foundProducts.map((product) => (
                    <li key={product.name}>
                        <ProductComponent name={product.name} description={product.description}></ProductComponent>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FoundProductComponent;