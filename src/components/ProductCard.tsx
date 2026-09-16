import { View, Text, Image, StyleSheet } from 'react-native'

import type { 
    ProductCardProps
} from '../types/product'

export default function ProductCard({
    product
}: ProductCardProps) {
    return (
        <View style={styles.card}>
            <Image source={{ uri: product.thumbnail }} style={styles.image} />

            <View style={styles.info}>
                <Text style={styles.title} numberOfLines={2}>
                    {product.title}
                </Text>

                <Text style={styles.price}>
                    ${product.price.toFixed(2)}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        padding: 12,
        marginHorizontal: 16,
        marginVertical: 6,
        borderWidth: 1,
        borderRadius: 8,
    },

    image: {
        width: 80,
        height: 80,
        borderRadius: 6,
    },

    info: {
        flex: 1,
        marginLeft: 12,
        justifyContent: 'center',
    },

    title: {
        fontSize: 16,
        fontWeight: '500',
    },

    price: {
        marginTop: 8,
        fontSize: 15,
    },
});