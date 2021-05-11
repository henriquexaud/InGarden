import React from 'react';
import { SafeAreaView, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import wateringImg from '../assets/watering.png';
import { Button } from '../components/Button';
import colors from '../styles/colors';

export function Welcome() {

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>
                Gerencie {'\n'}
                suas plantas {'\n'}
                de forma fácill
            </Text>

            <Image source={wateringImg} />

            <Button title="Começar" />

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 32,
        textAlign: 'center',
        color: colors.heading,
        marginBottom: 50
    },
    image: {
        width: 292,
        height: 284
    }
})