import { useState } from 'react';
import '../styles/ProductFunctionBox.css';
import '../styles/App.css';
import { useProductContext } from './ProductContext';

function SearchProductComponent() {
    const { searchProducts } = useProductContext();
    const [searchText, setSearchText] = useState<string>('');
    const [selectedValue, setSelectedValue] = useState<number>(1);
    const options: number[] = [1, 2, 3, 5, 10];

    const search = async () => {
        searchProducts(searchText, selectedValue);
    };

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(Number(event.target.value));
    };

    return (
        <div className='productFunctionBox'>
            <label htmlFor='searchInput' className='txt'>Search text:</label>
            <input id='searchInput' className='input' value={searchText} onChange={(e) => setSearchText(e.target.value)}></input>
            <label htmlFor='searchSelect' className='txt'>How many results:</label>
            <div id='searchSelect' className='flex justify-center'>
                <div className='m-2 w-11/12 inline-block'>
                    <select className='resultSelection' value={selectedValue} onChange={handleSelect}>
                        {options.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className='centerDiv'>
                <button className='btn' onClick={search}>Search</button>
            </div>
        </div>)
}

export default SearchProductComponent;