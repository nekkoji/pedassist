import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function StartScreen({ navigation }) {
    const [name, setName] = useState('');

    const handleGetStarted = () => {
        if (name.trim() === '') {
            alert("Please enter your name to proceed.");
            return;
        }
        navigation.navigate('Walkthrough', { name });
    };

    return (
        <View style={styles.container}>
            <ImageBackground 
                source={require('../../assets/images/BGSS.png')} 
                style={styles.background} 
                resizeMode="cover"
            >
                <View style={styles.overlay}>
                    <Text style={styles.promptText}>What's your name?</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Your Name"
                        value={name}
                        onChangeText={setName}
                        placeholderTextColor="#A87B7B"
                    />
                    <TouchableOpacity style={styles.enterButton} onPress={handleGetStarted}>
                        <Text style={styles.buttonText}>Enter</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    background: {
        width: width,
        height: height,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 15, // Move content lower
    },
    overlay: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    promptText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#7A2C2C',
        marginBottom: 20,
    },
    input: {
        width: '90%',
        padding: 14,
        borderColor: '#D3A4A4',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#FFF',
        fontSize: 18,
        marginBottom: 25,
        textAlign: 'center',
    },
    enterButton: {
        backgroundColor: '#7A2C2C',
        paddingVertical: 14,
        paddingHorizontal: 35,
        borderRadius: 10,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
});