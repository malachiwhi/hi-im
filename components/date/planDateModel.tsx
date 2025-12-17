import { Modal, View, StyleSheet, Platform, TouchableOpacity, Text } from "react-native";
import { AppleMaps } from 'expo-maps';
import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface PlanDateModelProps {
    visible: boolean;
    onClose: () => void;
}

export default function PlanDateModel({ visible, onClose }: PlanDateModelProps) {
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const insets = useSafeAreaInsets();

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission to access location was denied');
                return;
            }

            const currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation);
        })();
    }, []);

    const renderMap = () => {
        if (Platform.OS === 'ios') {
            const latitude = location?.coords.latitude ?? 37.7749;
            const longitude = location?.coords.longitude ?? -122.4194;
            
            return (
                <AppleMaps.View 
                    style={styles.map} 
                    cameraPosition={{
                        coordinates: {
                            latitude,
                            longitude
                        },
                        zoom: 14
                    }}
                />
            );
        }
        return null;
    };

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.container}>
                {renderMap()}
                <TouchableOpacity 
                    style={[styles.closeButton, { top: insets.top + 10 }]} 
                    onPress={onClose}
                >
                    <Text style={styles.closeButtonText}>✕</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    closeButton: {
        position: 'absolute',
        right: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    closeButtonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
});