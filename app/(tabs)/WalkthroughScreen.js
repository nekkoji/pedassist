import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

export default function WalkthroughScreen({ navigation, route }) {
    const { name } = route.params;

    const handleEnter = () => {
        navigation.navigate('Prepare');
    };

    return (
        <ImageBackground 
            source={require('../../assets/images/BGWT.png')} 
            style={styles.background} 
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <Text style={styles.welcomeText}>Welcome {name}!</Text>
                <Text style={styles.instructionText}>Let's start training...</Text>
                <TouchableOpacity style={styles.enterButton} onPress={handleEnter}>
                    <Text style={styles.buttonText}>Start</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    welcomeText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center',
    },
    instructionText: {
        fontSize: 24,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20,
    },
    enterButton: {
        backgroundColor: '#7A2C2C',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
