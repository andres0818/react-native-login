import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

const ButtonGradient = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.container}
            onPress={onPress}
            
        >

            <LinearGradient
                colors={['blue', '#ff3cbd',]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={styles.button}
            >
                <Text style={styles.text}>SIGN IN</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 200,
        marginTop: 60,

    },
    text: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
    },
    button: {
        width: '80%',
        height: 50,
        borderRadius: 25,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',


    }
})

export default ButtonGradient