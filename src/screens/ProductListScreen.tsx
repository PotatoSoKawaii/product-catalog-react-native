import { Text, View, FlatList, StyleSheet, Button } from 'react-native';

import ProductCard from '../components/ProductCard';
import ProductSearch from '../components/ProductSearch';

import { useProducts } from '../hooks/useProducts';

export default function ProductListScreen() {
    const { 
        products,
        search,
        isPending,
        isError,
        error,
        isRefetching,

        setSearch,
        loadMoreProducts,
        refetch
    } = useProducts()

    return (
        <View style={styles.list_container}>
            <ProductSearch value={search} onChangeText={setSearch}/>
            
            {isPending && (
                <View style={styles.content}>
                    <Text>Loading...</Text>
                </View>
            )}

            {isError && (
                <View style={styles.content}>
                    <Text>{error?.message || 'Error'}</Text>

                    <Button title='Retry' onPress={() => refetch()}/>
                </View>
            )}

            {!isPending && !isError && products.length === 0 && (
                <View style={styles.content}>
                    <Text>No data</Text>
                </View>
            )}

            {!isPending && !isError && products.length > 0 && (
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
                    contentContainerStyle={styles.list}

                    refreshing={isRefetching}
                    onRefresh={refetch}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 16
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6
    },
    list_container: {
        flex: 1,
        gap: 6
    },
    list: {
        paddingVertical: 10,
        paddingHorizontal: 16
    }
});