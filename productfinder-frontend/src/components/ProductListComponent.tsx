import { Product, ProductProps } from '../interfaces/types';
import ProductComponent from './ProductComponent';

function ProductListComponent(productProps: ProductProps) {

    return (
        <div className='flex flex-col flex-1'>
            <label className='text-center block font-bold text-gray-800'>{productProps.title}</label>
            <ul>
                {productProps.products.map((product) => (
                    <li key={product.name}>
                        <ProductComponent name={product.name} description={product.description}></ProductComponent>
                    </li>
                ))}
            </ul>
        </div>)
}

export default ProductListComponent;