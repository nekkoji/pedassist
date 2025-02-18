import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function UntieScreen({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Withdraw');
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
                    <Text style={styles.headerText}>Quick!{"\n"}
                    Untie the Tourniquet</Text>
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
        top: height / 3,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 96,
        fontWeight: 'bold',
        color: '#7A2C2C',
        textAlign: 'center',
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
});
