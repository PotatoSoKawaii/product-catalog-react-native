import apiClient from './client';
import type {
  ProductResponse,
} from '../types/product';

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