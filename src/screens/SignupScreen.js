import React, {useContext} from 'react';
import { StyleSheet, View } from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {Context as AuthContext} from './../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = ({navigation}) => {
    const {state, signup, clearErrorMessage} = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <NavigationEvents
                onWillBlur={clearErrorMessage}
            />
            <AuthForm
                headerText="Sign Up For Your Account"
                errorMessage={state.errorMessage}
                submitButtonText="Sign Up" 
                onSubmit={signup}
            />
            <NavLink
                routeName="Signin"
                text="Already have an account? Sign in here." 
            />
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        header: null
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#3c8c52',
    }
});

export default SignupScreen;
