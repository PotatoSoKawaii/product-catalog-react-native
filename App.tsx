import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductListScreen from './src/screens/ProductListScreen';

type StackParamList = {
  ProductList: undefined;
  ProductDetail: {
    productId: number;
  };
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ProductList"
          component={ProductListScreen}
          options={{
            title: 'Product List',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}