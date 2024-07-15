import { useState } from 'react';
import '../styles/ProductFunctionBox.css';
import '../styles/App.css';
import { Product } from '../interfaces/types';
import { useProductContext } from './ProductContext';

function AddProductComponent() {
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const { addProduct } = useProductContext();

    const saveProduct = async () => {
        const newProduct: Product = { name: name, description: description };
        addProduct(newProduct);
        setName('');
        setDescription('');
    };

    return (
        <div className='productFunctionBox'>
            <label htmlFor='nameInput' className='txt'>Product name:</label>
            <input id='nameInput' className='input' value={name} onChange={(e) => setName(e.target.value)}></input>
            <label htmlFor='descriptionInput' className='txt'>Description:</label>
            <input id='descriptionInput' className='input' value={description} onChange={(e) => setDescription(e.target.value)}></input>
            <div className='centerDiv'>
                <button className='btn' onClick={saveProduct}>Save</button>
            </div>
        </div>)
}

export default AddProductComponent;