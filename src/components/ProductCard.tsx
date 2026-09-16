import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native';

import type { 
    ProductCardProps,
    HomeStackParamList
} from '../types/product'

import type {
     NativeStackNavigationProp 
} from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<HomeStackParamList>;

import ProductRating from './ProductRating';

export default function ProductCard({
    product
}: ProductCardProps) {
    const navigation = useNavigation<NavigationProp>();

    function onProductPress() {
        navigation.navigate("ProductDetail", {
            productId: product.id
        })
    }

    return (
        <Pressable onPress={onProductPress} style={styles.card}>
            <Image source={{ uri: product.thumbnail }} style={styles.image} />

            <View style={styles.info}>
                <Text style={styles.title} numberOfLines={2}>
                    {product.title}
                </Text>

                <Text style={styles.price}>
                    ${product.price.toFixed(2)}
                </Text>

                <ProductRating rating={product.rating}/>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        padding: 12,
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
        flexDirection: 'column',
        gap: 4
    },

    title: {
        fontSize: 16,
        fontWeight: '500',
    },

    price: {
        fontSize: 15,
    },
});