import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { Product } from '../interfaces/types';

interface ProductContextType {
    products: Product[];
    foundProducts: Product[];
    fetchProducts: () => void;
    addProduct: (product: Product) => void;
    searchProducts: (searchText: string, selectedValue: number) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [foundProducts, setFoundProducts] = useState<Product[]>([]);

    const fetchProducts = async () => {
        try {
            const response = await axios.get<Product[]>('/api/allProducts');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const addProduct = async (product: Product) => {
        try {
            await axios.post('/api/product', product);
            fetchProducts();
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const searchProducts = async (searchText: string, selectedValue: number) => {
        try {
            setFoundProducts([]);
            const params = { searchText: searchText, resultNumber: selectedValue }
            const response = await axios.get('/api/product', { params });
            setFoundProducts(response.data);
        } catch (error) {
            console.error('Error fetching the message', error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <ProductContext.Provider value={{ products, foundProducts, fetchProducts, addProduct, searchProducts }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProductContext = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProductContext must be used within a ProductProvider');
    }
    return context;
};