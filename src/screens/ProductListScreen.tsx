import { FlatList, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { getProducts } from '../api/productsApi';

import type { 
    Product 
} from '../types/product';

import ProductCard from '../components/ProductCard';

const PAGE_SIZE = 20; // make default limit of 20 data for one pagination

export default function ProductListScreen() {
    const [products, setProducts] = useState<Product[]>([]);
    const [skip, setSkip] = useState(0);

    async function loadMoreProducts() {
        const nextSkip = skip + PAGE_SIZE;

        const data = await getProducts({
            limit: PAGE_SIZE,
            skip: nextSkip
        })

        setProducts((currentProducts) => {
            // merge current data with new data
            return [
                ...currentProducts,
                ...data.products
            ]
        })

        setSkip(nextSkip);
    }

    useEffect(() => {
        getProducts({
            limit: PAGE_SIZE,
            skip: 0
        }).then((data) => {
            setProducts(data.products)
        })
    }, [])

    return (
        <FlatList
            data={products}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
                return (
                    <ProductCard product={item}/>
                )
            }}
            onEndReached={loadMoreProducts}
            onEndReachedThreshold={0.5}
            contentContainerStyle={styles.container}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 6
    }
});