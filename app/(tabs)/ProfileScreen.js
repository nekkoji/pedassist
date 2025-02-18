import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';

export default function ProfileScreen({ navigation }) {
    return (
        <ImageBackground
            source={require('@/assets/images/BG2.png')}
            style={styles.background}
            resizeMode="cover"
        >
            {/* Back Arrow Button */}
            <TouchableOpacity style={styles.arrowButton} onPress={() => navigation.navigate('Home')}>
                <Image source={require('@/assets/images/arrow.png')} style={styles.arrowIcon} />
            </TouchableOpacity>

            {/* Profile Info Section */}
            <View style={styles.profileContainer}>
                <Image source={require('@/assets/images/profile.png')} style={styles.profileImage} />
                <Text style={styles.profileName}>TEAM47</Text>
            </View>

            {/* User Details */}
            <View style={styles.detailsContainer}>
                <Text style={styles.detailLabel}>First Name <Text style={styles.detailText}>TEAM47</Text></Text>
                <Text style={styles.detailLabel}>Last Name <Text style={styles.detailText}>PD</Text></Text>
                <Text style={styles.detailLabel}>Email <Text style={styles.detailText}>pd.team.47@gmail.com</Text></Text>
                <Text style={styles.detailLabel}>Password <Text style={styles.detailText}>********</Text></Text>

                {/* Edit Button */}
                <TouchableOpacity style={styles.editButton}>
                    <Text style={styles.buttonText}>Edit</Text>
                </TouchableOpacity>
            </View>
            {/* Logout Button */}
            <TouchableOpacity style={styles.logoutButton} onPress={() => navigation.navigate('Start')}>
                <Text style={styles.buttonText}>Logout</Text>
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
        alignItems: 'center',
    },
    arrowButton: {
        marginTop: 20,
        marginLeft: 20,
        position: 'absolute',
        top: 20,
        left: 20,
        backgroundColor: 'ed777b',
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
    profileContainer: {
        alignItems: 'center',
        marginTop: 80,
        marginBottom: 20,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 15,
        width: '80%',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 10,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    profileUsername: {
        fontSize: 14,
        color: '#666',
    },
    detailsContainer: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 15,
        width: '80%',
        marginBottom: 20,
        alignItems: 'flex-start'
    },
    detailLabel: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'left',
    },
    detailText: {
        fontWeight: 'normal',
        textAlign: 'left',
    },
    editButton: {
        backgroundColor: '#8B0000',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center', 
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    logoutButton: {
        backgroundColor: '#8B0000',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 25,
        alignItems: 'center',
        width: '30%',
        marginBottom: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
});