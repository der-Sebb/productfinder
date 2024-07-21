import { useProductContext } from './ProductContext';
import ProductListComponent from './ProductListComponent';

function ProductShowComponent() {
    const { products } = useProductContext();
    const { foundProducts } = useProductContext();

    return (
        <div className='flex flex-row bg-slate-100 rounded-lg m-2 w-6/12 max-h-fit min-w-96'>
            <ProductListComponent products={products} title='All products:'></ProductListComponent>
            <ProductListComponent products={foundProducts} title='Relevant products:'></ProductListComponent>
        </div>)

}

export default ProductShowComponent;