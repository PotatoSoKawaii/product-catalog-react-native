import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';

import type { 
    StackParamList 
} from '../types/product';

const Stack = createNativeStackNavigator<StackParamList>();

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