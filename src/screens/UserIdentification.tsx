import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform
} from 'react-native';

import { Button } from '../components/Button';

import colors from '../styles/colors';

export function UserIdentification() {

    const [isFocused, setIsFocused] = useState(false);

    function handleInputBlur() {
        setIsFocused(false)
    }

    function handleInputFocus() {
        setIsFocused(true)
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.content}>
                    <View style={styles.container}>
                        <Text style={styles.emoji}>
                            😃
                        </Text>
                        <Text style={styles.text}>
                            Como podemos {'\n'}
                            chamar você?
                        </Text>

                        <TextInput
                            style={[
                                styles.input,
                                isFocused && { borderColor: colors.green }
                            ]}
                            placeholder='Digite um nome'
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                        />

                        <View style={styles.button}>
                            <Button title='Confirmar' />
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView >
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
        paddingHorizontal: 54
    },
    header: {
        flex: 1,
        alignItems: 'center',
    },
    emoji: {
        fontSize: 24,
        marginBottom: 20
    },
    text: {
        fontSize: 24,
        textAlign: 'center'
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 30,
        padding: 10,
        textAlign: 'center',
    },
    button: {
        marginTop: 40,
    }
})