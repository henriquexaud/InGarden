import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
} from 'react-native';

import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    😁
                </Text>
                <Text style={styles.title}>
                    Pronto!
                </Text>

                <Text style={styles.subtitle}>
                    Agora vamos cuidar de suas plantas!
                </Text>
            </View>

            <View>
                <Button title='Começar' />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingVertical: 50
    },
    content: {
        flex: 1,
        width: '100%',
        alignItems: 'center',

    },
    emoji: {
        fontSize: 32,
    },
    title: {
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign: 'center',
        colors: colors.heading,

    },
    subtitle: {

    },

})