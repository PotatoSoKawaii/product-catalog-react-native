import { View, FlatList, StyleSheet } from 'react-native';

import ProductCard from '../components/ProductCard';
import ProductSearch from '../components/ProductSearch';

import { useProducts } from '../hooks/useProducts';

export default function ProductListScreen() {
    const { 
        products,
        search,

        setSearch,
        loadMoreProducts,
    } = useProducts()

    return (
        <View style={styles.container}>
            <ProductSearch value={search} onChangeText={setSearch}/>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <ProductCard product={item}/>
                    )
                }}
                ItemSeparatorComponent={() => <View style={{ height: 12 }}/>}
                onEndReached={loadMoreProducts}
                onEndReachedThreshold={0.5}
                contentContainerStyle={styles.container}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 6
    },
    list: {
        paddingVertical: 10,
        paddingHorizontal: 16
    }
});