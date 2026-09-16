// navigation
export type HomeStackParamList = {
    ProductList: undefined;
    ProductDetail: {
        productId: number;
    };
};

// product
export interface Product {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    thumbnail: string;
    images: string[];
}

export interface ProductResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

export type ProductCardProps = {
    product: Product
}