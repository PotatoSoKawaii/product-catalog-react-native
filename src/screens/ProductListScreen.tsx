import { View, FlatList, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { getProducts, searchProducts } from '../api/productsApi';

import type { 
    Product 
} from '../types/product';

import ProductCard from '../components/ProductCard';
import ProductSearch from '../components/ProductSearch';

import { useDebounce } from '../hooks/useDebounce';

const PAGE_SIZE = 20; // make default limit of 20 data for one pagination

export default function ProductListScreen() {
    const [products, setProducts] = useState<Product[]>([]);
    const [skip, setSkip] = useState(0);
    const [search, setSearch] = useState('');

    const debounceSearch = useDebounce({ 
        value: search,
        delay: 200
    })

    async function loadMoreProducts() {
        const nextSkip = skip + PAGE_SIZE;

        // load more products based on search value
        if (debounceSearch.trim()) {
            const data = await searchProducts({
                query: debounceSearch,
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

            setSkip(nextSkip)
            return;
        }

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

    // fetch products on load
    useEffect(() => {
        getProducts({
            limit: PAGE_SIZE,
            skip: 0
        }).then((data) => {
            setProducts(data.products)
        })
    }, [])

    // fetch product based on search value
    useEffect(() => {
        // ensure there's no leading space
        if (!debounceSearch.trim()) {
            getProducts({
                limit: PAGE_SIZE,
                skip: 0
            }).then((data) => {
                setProducts(data.products);
                setSkip(0);
            })
            
            return;
        }

        searchProducts({
            query: debounceSearch,
            limit: PAGE_SIZE,
            skip: 0
        }).then((data) => {
            setProducts(data.products);
            setSkip(0);
        })
        
    }, [debounceSearch])

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