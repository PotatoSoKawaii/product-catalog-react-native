import { NavigationContainer } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';

import HomeNavigator from './src/navigation/HomeNavigator';

import { queryClient } from './src/api/queryClient';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <HomeNavigator/>
      </NavigationContainer>
    </QueryClientProvider>
  );
}