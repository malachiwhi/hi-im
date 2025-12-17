import { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import PlanDateModel from '@/components/date/planDateModel';

export default function Match() {
    const [showPlanDateModal, setShowPlanDateModal] = useState(false);

    return (
        <View style={styles.background}>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={[styles.button, styles.ghostButton]} onPress={() => {

                }}>
                    <Text>Ghost</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.rescheduleButton]} onPress={() => {
                    
                }}>
                    <Text>Reschedule</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.planDateButton]} onPress={() => {
                    setShowPlanDateModal(true);
                }}>
                    <Text>Plan Date</Text>
                </TouchableOpacity>
            </View>
            
            <PlanDateModel 
                visible={showPlanDateModal} 
                onClose={() => setShowPlanDateModal(false)} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#CBC3E3',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4CAF50',
    },
    ghostButton: {
        backgroundColor: '#4CAF50',
    },
    rescheduleButton: {
        backgroundColor: '#ff6b6b',
    },
    planDateButton: {
        backgroundColor: '#ff6b6b',
    },
})
