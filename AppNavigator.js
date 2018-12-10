import { StackNavigator } from 'react-navigation';
import ScanScreen from './src/modules/QRSacnModule/ScanScreen';
import { LoginForm, FirstScreen, SignupForm } from './src/modules/LoginModule'
const AppNavigator = StackNavigator(
  {
    First: {
      screen: FirstScreen,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    Login: {
      screen: LoginForm,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    Signup: {
      screen: SignupForm,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    Scan: {
      screen: ScanScreen,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    }

  },
  {
    headerMode: "screen",
    initialRouteName: "First"
  }
);

export default AppNavigator;
