import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useState } from "react";
import PlanDateModel from "@/components/date/planDateModel";

// This should be a calendar to plan the date

export default function PlanDate() {
    const [showMap, setShowMap] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Plan Your Date</Text>
            <TouchableOpacity 
                style={styles.openMapButton} 
                onPress={() => setShowMap(true)}
            >
                <Text style={styles.buttonText}>Open Map</Text>
            </TouchableOpacity>
            
            <PlanDateModel 
                visible={showMap} 
                onClose={() => setShowMap(false)} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    openMapButton: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 8,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

