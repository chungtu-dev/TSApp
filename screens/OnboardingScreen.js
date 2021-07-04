import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({ navigation }) => {

    const Dots = ({ selected }) => {
        let backgroundColor;
        backgroundColor = selected ? "rgba(0,0,0,0.8)" : "rgba(0,0,0,0.3)";

        return (
            <View
                style={{
                    width: 6,
                    height: 6,
                    marginHorizontal: 3,
                    backgroundColor,
                }}
            />
        );
    }

    const Skip = ({ ...props }) => {
        <Button
            title="Skip"
            color="white"
        />
    };

    const Next = ({ ...props }) => {
        <Button
            title="Next"
            color="white"
            {...props}
        />
    };

    const Done = ({ ...props }) => {
        <TouchableOpacity
            style={{ marginHorizontal: 8 }}
            {...props}
        >
            <Text style={{ fontSize: 16 }}>Done</Text>
        </TouchableOpacity>
    };

    return (
        <Onboarding
            // SkipButtonComponent={Skip}
            // NextButtonComponent={Next}
            // DoneButtonComponent={Done}
            // DotComponent={Dots}
            onSkip={() => navigation.replace("Login")}
            onDone={() => navigation.navigate("Login")}
            pages={[
                {
                    backgroundColor: '#00FF99',
                    image: <Image source={require('../assets/onboarding-img1.png')} />,
                    title: 'Onboarding1',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#FFFF99',
                    image: <Image source={require('../assets/onboarding-img2.png')} />,
                    title: 'Onboarding2',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#FF99CC',
                    image: <Image source={require('../assets/onboarding-img2.png')} />,
                    title: 'Onboarding3',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
            ]}
        />
    );
}

export default OnboardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
