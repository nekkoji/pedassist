import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function PrepareScreen({ navigation }) {
    
    const handleNextStep = () => {
        navigation.navigate('Arm Orientation');
    };

    return (
        <View style={styles.container}>
            <ImageBackground 
                source={require('../../assets/images/BGWT.png')} 
                style={styles.background} 
                resizeMode="cover"
            >
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Prepare the materials needed</Text>
                </View>
                <View style={styles.contentContainer}>
                </View>
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
    illustration: {
        width: width * 0.9,
        height: height * 0.5,
        resizeMode: 'contain',
        backgroundColor: '#EAEAEA',
        borderRadius: 10,
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