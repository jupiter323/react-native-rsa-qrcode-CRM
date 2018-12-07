import { StackNavigator } from 'react-navigation';
import ScanScreen from './src/screens/ScanScreen';

const AppNavigator = StackNavigator({
  Scan: { screen: ScanScreen }
});

export default AppNavigator;
