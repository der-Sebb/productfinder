import '../styles/ProductShowBox.css';
import '../styles/App.css';
import AllProductsComponent from './AllProductsComponent';
import FoundProductComponent from './FoundProductComponent';

function ShowProductComponent() {

    return (
        <div className='productShowBox'>
            <div className='productBox'>
                <AllProductsComponent></AllProductsComponent>
            </div>
            <div className='productBox'>
                <FoundProductComponent></FoundProductComponent>
            </div>
        </div>)
}

export default ShowProductComponent;