import React from 'react';
import { 
    createStackNavigator, 
    createAppContainer,
    createBottomTabNavigator,
    createSwitchNavigator
} from 'react-navigation';
import AccountScreen from './src/screens/AccountScreen';
import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import {setNavigator} from './src/navigationRef';
import {Provider as LocationProvider} from './src/context/LocationContext';
import {FontAwesome} from '@expo/vector-icons';

const Home = createStackNavigator({
    TrackList: TrackListScreen,
    TrackDetail: TrackDetailScreen
});

const switchNavigator = createSwitchNavigator({
    ResolveAuth: ResolveAuthScreen,
    loginFlow: createStackNavigator({
        Signup: SignupScreen,
        Signin: SigninScreen,

    }),
    mainFlow: createBottomTabNavigator({
        Home,
        TrackCreate: TrackCreateScreen,
        Account: AccountScreen
    })
});

Home.navigationOptions = {
    title: 'Home',
    tabBarIcon: <FontAwesome name="th-list" size={30}/>
}

const App =  createAppContainer(switchNavigator);

export default () => {
    return (
        <LocationProvider>
            <AuthProvider>
                <App ref={(navigator) => {setNavigator(navigator)}}/>
            </AuthProvider>
        </LocationProvider>
    );
};