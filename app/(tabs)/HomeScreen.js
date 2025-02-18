import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, ImageBackground, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation, route }) {
    const [selectedMode, setSelectedMode] = useState(null);

    // Extract firstName and lastName from navigation parameters
    const { firstName = 'Welcome!', lastName = '' } = route.params || {};

    const handleStart = () => {
        if (selectedMode === 'Walkthrough') {
            navigation.navigate('Walkthrough');
        } else if (selectedMode === 'RetDem') {
            navigation.navigate('RetDem');
        } else {
            Alert.alert('Please select a mode before proceeding.');
        }
    };

    return (
        <ImageBackground
            source={require('@/assets/images/BGG.png')}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.container}>
                {/* Back Button */}
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Start')}>
                    <Image source={require('@/assets/images/arrow.png')} style={styles.arrowIcon} />
                </TouchableOpacity>

                <Image
                    source={require('@/assets/images/blood.png')}
                    style={styles.logo}
                />

                {/* Display the user's first and last name */}
                <Text style={styles.greeting}>Hello, {firstName} {lastName}</Text>

                <View style={styles.dummyVideoContainer}>
                    <Image source={require('@/assets/images/dummyVideo.jpg')} style={styles.dummyVideoImage} />
                    <Image source={require('@/assets/images/play.png')} style={styles.playIcon} />
                </View>

                <Text style={styles.instruction}>Choose your pediatric venipuncture training mode</Text>

                <TouchableOpacity
                    style={[styles.modeButton, selectedMode === 'Walkthrough' && styles.selectedButton]}
                    onPress={() => setSelectedMode('Walkthrough')}
                >
                    <Image source={require('@/assets/images/WM.png')} style={styles.modeIcon} />
                    <View style={styles.modeTextContainer}>
                        <Text style={styles.modeTitle}>Walkthrough</Text>
                        <Text style={styles.modeDescription}>Step-by-step guide & immediate feedback</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.modeButton, selectedMode === 'RetDem' && styles.selectedButton]}
                    onPress={() => setSelectedMode('RetDem')}
                >
                    <Image source={require('@/assets/images/RTM.png')} style={styles.modeIcon} />
                    <View style={styles.modeTextContainer}>
                        <Text style={styles.modeTitle}>RetDem</Text>
                        <Text style={styles.modeDescription}>Unassisted Performance & Overall Assessment</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.startButton, !selectedMode && styles.disabledButton]}
                    onPress={handleStart}
                    disabled={!selectedMode}
                >
                    <Text style={styles.startButtonText}>START</Text>
                </TouchableOpacity>

                {/* User Profile Button */}
                <TouchableOpacity
                    style={styles.profileButton}
                    onPress={() => navigation.navigate('Profile', { firstName, lastName })}
                >
                    <Text style={styles.profileButtonText}>User Profile</Text>
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
    },
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    backButton: {
        backgroundColor: '#ed777b',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 20,
        left: 20,
    },
    arrowIcon: {
        width: 20,
        height: 20,
        tintColor: '#FFFFFF',
    },
    logo: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 15,
        right: 15,
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 60,
        marginBottom: 10,
        textAlign: 'center',
    },
    dummyVideoContainer: {
        width: '80%',
        height: '35%',
        borderRadius: 15,
        overflow: 'hidden',
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    dummyVideoImage: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
    },
    playIcon: {
        position: 'absolute',
        width: 50,
        height: 50,
        tintColor: '#FFFFFF',
    },
    instruction: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center',
        marginBottom: 20,
        paddingHorizontal: 20,
        borderWidth: 2,
        borderColor: '#333',
        borderRadius: 20,
        paddingVertical: 5,
        fontWeight: 'bold',
    },
    modeButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFCDD2',
        padding: 15,
        borderRadius: 15,
        width: '100%',
        marginBottom: 10,
    },
    selectedButton: {
        backgroundColor: '#a82234',
    },
    modeIcon: {
        width: 50,
        height: 50,
        marginRight: 15,
    },
    modeTextContainer: {
        flex: 1,
    },
    modeTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    modeDescription: {
        fontSize: 14,
        color: '#FFF5F5',
    },
    startButton: {
        backgroundColor: '#faefc5',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginTop: 20,
        width: '90%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    startButtonText: {
        color: '#800d2b',
        fontWeight: 'bold',
        fontSize: 16,
    },
    disabledButton: {
        backgroundColor: '#BDBDBD',
    },
    profileButton: {
        backgroundColor: '#8B0000',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginTop: 20,
        width: '90%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    profileButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
