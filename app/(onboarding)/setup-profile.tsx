import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import { useRouter } from "expo-router";
import { StyleSheet } from 'react-native';
import { useState, useEffect } from "react";

//import { Match, Reject } from "../services/matching";
//Name
//Profile Picture
//Gender
//Age
//Location
//Bio

//What functions to have? 



export default function SetupProfile() {
    const router = useRouter();

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [location, setLocation] = useState('');
    const [bio, setBio] = useState('');


    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <Image 
                    source={require('../../assets/images/image.png')} 
                    style={styles.logo}
                />
                <Text style={styles.name}>Sandy</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={[styles.button, styles.rejectButton]} onPress={() => {
                        // Sometype of model pop up to confirm that they matched 
                        // With a picture of the other user 
                    }}>
                        <Text style={styles.buttonText}>Reject</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button, styles.matchButton]} onPress={() => {
                        // Animation to swipe the user left
                        router.navigate('/(tabs)/match');
                    }}>
                        <Text style={styles.buttonText}>Match</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
    


const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#CBC3E3',
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 14,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        marginBottom: 12,
    },
    name:{
        fontSize: 36,
        fontWeight: 'bold',
        marginBottom: 12,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 20,
        marginTop: 20,
    },
    button: {
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    matchButton: {
        backgroundColor: '#4CAF50',
    },
    rejectButton: {
        backgroundColor: '#ff6b6b',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    }
})


