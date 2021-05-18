
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
} from 'react-native';

import { useNavigation } from '@react-navigation/core';

import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation() {
    const navigation = useNavigation()

    function handleMoveOn() {
        navigation.navigate('PlantSelect');
    }

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
                    Agora vamos começar a cuidar de suas plantinhas.
                </Text>

                <View style={styles.footer}>
                    <Button
                        title='Começar'
                        onPress={handleMoveOn}
                    />
                </View>
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
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 60
    },
    emoji: {
        fontSize: 60,
    },
    title: {
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading,
        lineHeight: 38,
        marginTop: 15
    },
    subtitle: {
        fontSize: 17,
        fontFamily: fonts.text,
        textAlign: 'center',
        paddingVertical: 10,
        color: colors.heading
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 50,
        marginTop: 20
    }
})