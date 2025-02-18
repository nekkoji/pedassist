import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { ImageBackground } from 'react-native-web';

export default function CongratulatoryScreen({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Training Results');
        }, 5000); // 5-second timer
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <ImageBackground
            source={require('@/assets/images/CW.png')}
            style={styles.background}
        />
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100vh', 
    },
});
