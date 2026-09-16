import { StyleSheet, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';
import { getProducts } from '../api/productsApi';

import type { 
    Product 
} from '../types/product';

import ProductCard from '../components/ProductCard';

export default function ProductListScreen() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getProducts({
            limit: 20,
            skip: 0
        }).then((data) => {
            setProducts(data.products)
        })
    }, [])

    return (
        <ScrollView style={styles.container}>            
            {products.map((product) => {
                return (
                    <ProductCard key={product.id} product={product}/>
                )
            })}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
    },
});