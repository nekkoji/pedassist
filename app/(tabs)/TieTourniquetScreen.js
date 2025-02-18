import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function TieTourniquet({ navigation }) {
    
    const handleNextStep = () => {
        navigation.navigate('Sanitize');
    };

    return (
        <View style={styles.container}>
            <ImageBackground 
                source={require('../../assets/images/BGWT.png')} 
                style={styles.background} 
                resizeMode="cover"
            >
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Properly tie tourniquet around the arm</Text>
                </View>
                <View style={styles.contentContainer}>
                </View>
                <Text style={styles.warningText}>
                    Once the tourniquet is tied, the 1-minute countdown begins!{"\n"}
                    Keeping it on for too long can cause discomfort, hemoconcentration, and inaccurate test results.
                </Text>
                <TouchableOpacity style={styles.nextButton} onPress={handleNextStep}>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
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
        flex: 1,
        width: width,
        height: height,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContainer: {
        position: 'absolute',
        top: 50,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#7A2C2C',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    warningText: {
        position: 'absolute',
        bottom: 120,
        width: '80%',
        textAlign: 'center',
        fontSize: 18,
        color: '#7A2C2C',
        fontWeight: 'bold',
    },
    nextButton: {
        position: 'absolute',
        bottom: 40,
        backgroundColor: '#7A2C2C',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 10,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});