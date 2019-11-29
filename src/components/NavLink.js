import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Spacer from './Spacer';
import {withNavigation} from 'react-navigation';
import { Text} from 'react-native-elements';

const NavLink = ({navigation, text, routeName}) => {

    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Spacer>
                <Text style={styles.link}>
                    { text }
                </Text>
            </Spacer>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    link: {
        color: 'blue',
        fontSize: 18,
        textAlign: 'center'
    }
});

export default withNavigation(NavLink);
