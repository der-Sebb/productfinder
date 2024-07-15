import '../styles/ProductShowBox.css';
import '../styles/App.css';
import { Product } from '../interfaces/types';
import { useState } from 'react';

function ProductComponent(product: Product) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="product">
            <div
                className="productAccordion"
                onClick={toggleAccordion}
            >
                <h2 className="productName">{product.name}</h2>
                <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && (
                <div className="productDescription">
                    <p>{product.description}</p>
                </div>
            )}
        </div>
    );
}

export default ProductComponent;