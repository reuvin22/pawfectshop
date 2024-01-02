import { StyleSheet, View } from 'react-native';
import Login from './component/Login';
import Registration from './component/Registration';

export default function App() {
  return (
    <View style={styles.bg}>
      <Registration />
    </View>
  );
}
const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: '#CBE4F9'
  }
})