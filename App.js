import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartScreen from './app/(tabs)/StartScreen';
import WalkthroughScreen from './app/(tabs)/WalkthroughScreen';
import PrepareScreen from './app/(tabs)/PrepareScreen';
import ArmOrientationScreen from './app/(tabs)/ArmOrientationScreen';
import TieTourniquetScreen from './app/(tabs)/TieTourniquetScreen';
import SanitizeScreen from './app/(tabs)/SanitizeScreen';
import VeniScreen from './app/(tabs)/VeniScreen';
import VideoScreen from './app/(tabs)/VideoScreen';
import NeedleAngleScreen from './app/(tabs)/NeedleAngleScreen';
import UntieScreen from './app/(tabs)/UntieScreen';
import WithdrawScreen from './app/(tabs)/WithdrawScreen';
import EvacuatedTubeScreen from './app/(tabs)/EvacuatedTubeScreen';
import CongratulatoryScreen from './app/(tabs)/CongratulatoryScreen';
import TrainingResultsScreen from './app/(tabs)/TrainingResultsScreen';


const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Start">
                <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Walkthrough" component={WalkthroughScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Prepare" component={PrepareScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Arm Orientation" component={ArmOrientationScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Tie Tourniquet" component={TieTourniquetScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Sanitize" component={SanitizeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Venipuncture" component={VeniScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Video Feed" component={VideoScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Needle Angle" component={NeedleAngleScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Untie" component={UntieScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Withdraw" component={WithdrawScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Evacuated Tube" component={EvacuatedTubeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Congratulatory" component={CongratulatoryScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Training Results" component={TrainingResultsScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
