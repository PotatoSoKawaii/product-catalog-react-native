import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import { getProducts } from '../api/productsApi';

import type { 
    Product 
} from '../types/product';

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
        <View style={styles.container}>
            <Text>Products</Text>
            
            {products.map((product) => {
                return (
                    <Text key={product.id}>
                        {product.title}
                    </Text>
                )
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: '500',
    },
});