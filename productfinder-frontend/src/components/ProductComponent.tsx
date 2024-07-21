import '../App.css';
import { Product } from '../interfaces/types';
import { useState } from 'react';

function ProductComponent(product: Product) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border border-gray-300 rounded shadow m-4">
            <div
                className="bg-gray-200 p-4 cursor-pointer flex justify-between items-center"
                onClick={toggleAccordion}
            >
                <h2 className="text-lg font-medium">{product.name}</h2>
                <span>{isOpen ? '-' : '+'}</span>
            </div>
            {isOpen && (
                <div className="p-4">
                    <p>{product.description}</p>
                </div>
            )}
        </div>
    );
}

export default ProductComponent;