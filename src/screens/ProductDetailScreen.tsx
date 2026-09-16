
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';

import { getProduct } from '../api/productsApi';

import type { 
    Product 
} from '../types/product';

type ProductDetailScreenProps = {
    route: {
        params: {
            productId: number
        }
    }
}

import ProductRating from '../components/ProductRating';

export default function ProductDetailScreen({ 
    route 
}: ProductDetailScreenProps) {
    const { productId } = route.params;
    
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        getProduct({ productId })
        .then((data) => {
            setProduct(data)
        })
    }, [productId])

    if (!product) {
        return (
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        )
    }

    return (
        <ScrollView style={styles.detail}>
            <ScrollView horizontal style={styles.images}>
                {product.images.map((image) => {
                    return (
                        <Image key={image} source={{ uri: image }} style={styles.image}/>
                    )
                })}
            </ScrollView>

            <Text style={styles.title}>
                {product.title}
            </Text>

            <Text style={styles.price}>
                ${product.price.toFixed(2)}
            </Text>

            <ProductRating rating={product.rating}/>

            <Text style={styles.description}>
                {product.description}
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        padding: 16
    },

    detail: {
        flex: 1,
        padding: 16
    },

    images: {
        marginVertical: 20
    },

    title: {
        fontSize: 20,
        fontWeight: '500',
    },

    price: {
        fontSize: 16,
    },

    description: {
        fontSize: 16,
        marginTop: 10
    },

    image: {
        width: 350,
        height: 200,
        resizeMode: 'contain'
    }
});