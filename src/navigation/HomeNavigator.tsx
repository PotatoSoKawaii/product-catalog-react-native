import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';

import type { 
    HomeStackParamList 
} from '../types/product';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeNavigator() {
  return (
    <Stack.Navigator>
        <Stack.Screen
            name="ProductList"
            component={ProductListScreen}
            options={{
                title: 'Product List',
            }}
        />
        <Stack.Screen
            name="ProductDetail"
            component={ProductDetailScreen}
            options={{
                title: 'Product Detail',
            }}
        />
    </Stack.Navigator>
  )
}