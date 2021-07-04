import React, { Component, useContext, useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { AuthContext } from '../navigation/AuthProvider';

const LoginScreen = ({ navigation }) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { login } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/rn-social-logo.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>RN Social App</Text>

            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />

            <FormButton
                buttonTitle="Sign In"
                onPress={() => login(email, password)}
            />

            <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
                <Text style={styles.navButtonText}>Forgot Password?</Text>
            </TouchableOpacity>

            {/* <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    By registering, you confirm that you accept our{' '}
                </Text>
                <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
                    <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>
                        Terms of service</Text>
                </TouchableOpacity>
                <Text style={styles.color_textPrivate}> and </Text>
                <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>
                    Privacy Policy</Text>
            </View> */}

            <View>
                <Text style={styles.color_textPrivate}>
                    Đang được phát triển
                </Text>
            </View>
            <View>
                <Text style={styles.color_textPrivate}>
                    Đăng nhập...
                </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ backgroundColor: '#e6eaf4' }}>
                    <Text style={{ color: '#4867aa' }}>
                        Facebook
                </Text>
                </View>
                <Text>{'\t\t'}</Text>
                <View style={{ backgroundColor: '#f5e7ea' }}>
                    <Text style={{ color: '#de4d41' }}>
                        Google
                </Text>
                </View>
            </View>

            <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.navButtonText}>
                    Don't have an acount? Create here</Text>
            </TouchableOpacity>

        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 35,
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        color: 'grey',
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
});

