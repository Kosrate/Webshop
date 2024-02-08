import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/apiService';

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
}

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const fetchedProducts = await getProducts();
            setProducts(fetchedProducts);
        };

        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Products</h2>
            <div>
                {products.map(product => (
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>${product.price}</p>
                        <img src={product.imageUrl} alt={product.name} style={{ width: '100px', height: '100px' }} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
