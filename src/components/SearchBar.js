import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

    return (
        <View style={ styles.background }>
            <Feather style={ styles.iconStyle } name="search"/>
            <TextInput
                style={ styles.inputStyle }
                autoCapitalize="none"
                autoCorrect={false}
                placeholder="Search Restaurant"
                value={ term }
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        marginTop: 15,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 10,
        flexDirection: 'row',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#3c8c52'
    },
    inputStyle: {
        flex: 1,
        fontSize: 20
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;
