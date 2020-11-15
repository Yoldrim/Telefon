import {createStackNavigator} from 'react-navigation-stack';
import { AuthScreen } from "../screens/AuthScreen";

export const AppNavigator = createStackNavigator({
  AuthScreen: {screen: AuthScreen}
}, {
  initialRouteName: 'AuthScreen'
})
