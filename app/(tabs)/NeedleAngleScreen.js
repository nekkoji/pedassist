import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function NeedleAngleScreen({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Untie');
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
                    <Text style={styles.headerText}>Make sure the needle angle is within the standard range (15-30 degrees)</Text>
                </View>
                <View style={styles.contentContainer}>
                </View>
                <Text style={styles.warningText}>
                TRIVIA:{"\n"}
                Did you know that inserting a needle at the wrong angle during{"\n"}
                venipuncture can cause serious complications?
                </Text>
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
    warningText: {
        position: 'absolute',
        bottom: 40,
        width: '80%',
        textAlign: 'center',
        fontSize: 18,
        color: '#7A2C2C',
        fontWeight: 'bold',
    },
});