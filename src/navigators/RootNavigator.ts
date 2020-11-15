import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { AppNavigator } from './AppNavigator';
import {AuthScreen} from "../screens/AuthScreen";

const RootNavigator = createSwitchNavigator({
  AppNavigator: { screen: AuthScreen },
});

export default createAppContainer(RootNavigator);
