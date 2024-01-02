import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './component/Login';
import Registration from './component/Registration';
import { View } from 'react-native';
import ForgotPassword from './component/ForgotPassword';
import HomePage from './component/Homepage';

export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Registration' component={Registration} />
        <Stack.Screen name='HomePage' component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
