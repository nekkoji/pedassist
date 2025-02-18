import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Platform, Dimensions, Image } from 'react-native';

const { width, height } = Dimensions.get('window'); 

export default function AssessmentScreen({ navigation }) {
    const handleGoHome = () => {
        navigation.navigate('Home'); 
    };

    const backgroundImage = Platform.OS === 'web'
    ? require('@/assets/images/R2.png')  
    : require('@/assets/images/ROS.png');  

    return (
        <ImageBackground
            source={backgroundImage}
            style={styles.background}
            resizeMode="cover"
        >
            <TouchableOpacity style={styles.arrowButton} onPress={handleGoHome}>
                <Image source={require('@/assets/images/arrow.png')} style={styles.arrowIcon} />
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    arrowButton: {
        marginTop: 40,     
        marginLeft: 20,    
        backgroundColor: '#ed777b',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrowIcon: {
        width: 20,
        height: 20,
        tintColor: '#FFFFFF',  
    },
});
