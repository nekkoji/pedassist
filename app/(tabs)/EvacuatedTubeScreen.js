import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function EvacuatedTubeScreen({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Congratulatory');
        }, 8500); // 8.5 seconds
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <ImageBackground 
                source={require('../../assets/images/BGWT.png')} 
                style={styles.background} 
                resizeMode="cover"
            >
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Safely Fill the Evacuated Tube</Text>
                </View>
                <View style={styles.contentContainer}>
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
});