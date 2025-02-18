import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');  

export default function RetDemScreen({ navigation }) {
    const handleFinish = () => {
        navigation.navigate('Assessment');  
    };

    const backgroundImage = Platform.OS === 'web'
        ? require('@/assets/images/R1.png')  
        : require('@/assets/images/RM1.png');  

    return (
        <ImageBackground
            source={backgroundImage}
            style={styles.background}
            resizeMode="cover"
        >
            {/* Finish Button */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.finishButton} onPress={handleFinish}>
                    <Text style={styles.finishButtonText}>Finish</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: height,  
        justifyContent: 'flex-end', 
        alignItems: 'center',
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        paddingBottom: 30,  
    },
    finishButton: {
        backgroundColor: '#a1261d',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        alignItems: 'center',
        width: width * 0.8,  
    },
    finishButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
});