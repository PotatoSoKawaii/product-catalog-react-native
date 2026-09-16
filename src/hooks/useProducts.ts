import { useEffect, useState } from "react";

import { getProducts, searchProducts } from "../api/productsApi";

import type { Product } from "../types/product";

import { useDebounce } from "./useDebounce";

const PAGE_SIZE = 20;
const DEBOUNCE_DELAY = 200;

export function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [skip, setSkip] = useState(0);
    const [search, setSearch] = useState('');

    const debounceSearch = useDebounce({
        value: search,
        delay: DEBOUNCE_DELAY
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

    // fetch product based on search value
    useEffect(() => {
        async function fetchProducts() {
            // ensure there's no leading space
            if (!debounceSearch.trim()) {
                const data = await getProducts({
                    limit: PAGE_SIZE,
                    skip: 0
                })

                setProducts(data.products);
                setSkip(0);

                return;
            }

            const data = await searchProducts({
                query: debounceSearch,
                limit: PAGE_SIZE,
                skip: 0
            })
            
            setProducts(data.products);
            setSkip(0);
        }

        fetchProducts()
    }, [debounceSearch])

    return {
        // state
        products,
        search,

        // methods
        setSearch,
        loadMoreProducts
    };
}