import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

import colors from '../styles/colors';

export function Welcome() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Gerencie {'\n'}
                sua horta de {'\n'}
                forma fácil
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 32,
        textAlign: 'center',
        color: colors.heading,
    }
})