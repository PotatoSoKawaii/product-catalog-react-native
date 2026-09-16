import { useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import { getProducts, searchProducts } from "../api/productsApi";

import { useDebounce } from "./useDebounce";

const PAGE_SIZE = 20;
const DEBOUNCE_DELAY = 200;

export function useProducts() {
    const [search, setSearch] = useState('');

    const debounceSearch = useDebounce({
        value: search,
        delay: DEBOUNCE_DELAY
    })
    
    const productsQuery = useInfiniteQuery({
        queryKey: ['products'],
        queryFn: ({ pageParam }) => {
            return getProducts({
                limit: PAGE_SIZE,
                skip: pageParam
            })
        },
        initialPageParam: 0,
        getNextPageParam: (lastPage) => {
            const nextSkip = lastPage.skip + lastPage.limit;

            if (nextSkip >= lastPage.total) {
                return undefined;
            }

            return nextSkip;
        }
    })

    const products = productsQuery.data?.pages.flatMap(
        (page) => page.products
    ) ?? [];
    
    function loadMoreProducts() {
        if (productsQuery.hasNextPage) productsQuery.fetchNextPage();
    }

    return {
        // state
        products,
        search,

        // methods
        setSearch,
        loadMoreProducts
    };
}