
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface Params {
    title: string;
    subtitle: string;
    icon: 'smile' | 'hug';
    nextScreen: string;
}

const emojis = {
    smile: '😃',
    hug: '🤗'
}

export function Confirmation() {
    const navigation = useNavigation()
    const routes = useRoute();

    const {
        title,
        subtitle,
        icon,
        nextScreen
    } = routes.params as Params;

    function handleMoveOn() {
        navigation.navigate(nextScreen);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    {emojis[icon]}
                </Text>

                <Text style={styles.title}>
                    {title}
                </Text>

                <Text style={styles.subtitle}>
                    {subtitle}
                </Text>

                <View style={styles.footer}>
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.7}
                        onPress={handleMoveOn}
                    >

                        <Feather
                            name='chevron-right'
                            style={styles.buttonIcon}
                        />

                    </TouchableOpacity>
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
        marginBottom: 10
    },
    title: {
        fontSize: 22,
        fontFamily: fonts.heading,
        textAlign: 'center',
        color: colors.heading,
        lineHeight: 38,
    },
    subtitle: {
        fontSize: 17,
        fontFamily: fonts.text,
        textAlign: 'center',
        paddingTop: 10,
        color: colors.heading
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginTop: 20
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        width: 60,
        height: 60,
        marginTop: 10
    },
    buttonIcon: {
        fontSize: 32,
        color: colors.white
    }
})