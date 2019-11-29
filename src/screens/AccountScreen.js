import React, {useContext} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {SafeAreaView} from 'react-navigation';
import {Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import {Context as AuthContext} from './../context/AuthContext';
import {FontAwesome} from '@expo/vector-icons';

const AccountScreen = () => {
    const {signout} = useContext(AuthContext);

    return (
        <View style={styles.view}>
            <Text style={styles.logout}>Log out for your account!</Text>
            <Spacer>
                <TouchableOpacity>
                    <Button
                        title="Sign Out"
                        onPress={signout}
                    />
                </TouchableOpacity>
            </Spacer>
        </View>
    );
};

AccountScreen.navigationOptions = {
    title: 'Setting',
    tabBarIcon: <FontAwesome name="gear" size={30}/>
}

const styles = StyleSheet.create({
    logout: {
       marginHorizontal: 15,
       fontSize: 22,
       color: 'blue',
       textAlign: 'center'
    },
    view: {
        marginTop: 50
    }
});

export default AccountScreen;
