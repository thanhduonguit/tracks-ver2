import React, {useState} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    TouchableOpacity
} from 'react-native';

const AuthForm = ({headerText, errorMessage, onSubmit, submitButtonText}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>{headerText}</Text>
                <View style={styles.inputContainer}>
                    <Image 
                        style={styles.inputIcon} 
                        source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}
                    />
                    <TextInput 
                        style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Image 
                        style={styles.inputIcon} 
                        source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}
                    />
                    <TextInput 
                        style={styles.inputs}
                        placeholder="Password"
                        secureTextEntry={true}
                        underlineColorAndroid='transparent'
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
                
                {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}

                <TouchableOpacity 
                    style={[styles.buttonContainer, styles.loginButton]} 
                    onPress={() => onSubmit({email, password})}
                >
                    <Text style={styles.loginText}>
                        {submitButtonText}
                    </Text>
                </TouchableOpacity>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 26, 
        fontWeight: 'bold',
        marginBottom: 50
    },
    errorMessage: {
        fontSize: 20,
        color: '#b00b29',
        marginBottom: 20
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:350,
        height:45,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
        fontSize: 18
    },
    inputIcon:{
        width:30,
        height:30,
        marginLeft:15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:350,
        borderRadius:30,
    },
    loginButton: {
        backgroundColor: "#1e658f",
    },
    loginText: {
        color: 'white',
        fontSize: 18
    }
});

export default AuthForm;
