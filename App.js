import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './pages/Login';
import Registration from './pages/Registration';
import ForgotPassword from './pages/ForgotPassword';
import HomePage from './pages/Homepage';
import LandingPage from './pages/LandingPage';


export default function App() {

  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LandingPage'>
        <Stack.Screen name='LandingPage' component={LandingPage} />
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Registration' component={Registration} />
        <Stack.Screen name='HomePage' component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
