import apiClient from './client';
import type {
    ProductResponse,
    Product
} from '../types/product';

// get product list
export async function getProducts({ limit, skip }: {
    limit: number,
    skip: number,
}): Promise<ProductResponse> {
    const response = await apiClient.get<ProductResponse>(
        '/products',
        {
            params: { 
                limit, 
                skip 
            },
        },
    );

    return response.data;
}

// get product detail
export async function getProduct({ productId }: {
    productId: number,
}): Promise<Product> {
    const response = await apiClient.get<Product>(
        `/products/${productId}`,
    );

    return response.data;
}