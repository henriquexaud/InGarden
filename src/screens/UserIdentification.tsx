
import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard,
    Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button } from '../components/Button';

import colors from '../styles/colors';

export function UserIdentification() {
    const navigation = useNavigation();
  
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    function handleInputBlur() {
        setIsFocused(false);
        setIsFilled(!!name);
    }

    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputChange(value: string) {
        setIsFilled(!!value);
        setName(value);
    }

    async function handleSubmit() {
        if (!name)
            return Alert.alert('Eu preciso saber como você se chama pra continuarmos 😥');

        try {
            await AsyncStorage.setItem('@myplants:user', name);

            navigation.navigate('Confirmation', {
                title: 'Pronto',
                subtitle: 'Agora vamos começar a cuidar de suas plantas.',
                icon: 'smile',
                nextScreen: 'PlantSelect'
            });

        } catch {
            return Alert.alert('Não foi possível salvar seu nome 😥');
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.content}>
                        <View style={styles.form}>
                            <View style={styles.header}>
                                <Text style={styles.emoji}>
                                    {isFilled ? '🌱' : '🌰'}
                                </Text>

                                <Text style={styles.text}>
                                    Como podemos {'\n'}
                                    chamar você?
                            </Text>

                            </View>
                            <TextInput
                                style={[
                                    styles.input,
                                    (isFocused || isFilled) &&
                                    { borderColor: colors.green }
                                ]}
                                placeholder='Digite um nome'
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={handleInputChange}
                            />

                            <View style={styles.button}>
                                <Button
                                    title='Confirmar'
                                    onPress={handleSubmit}
                                />
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
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
    },
    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
    },
    header: {
        alignItems: 'center',
    },
    emoji: {
        fontSize: 32,
        marginTop: 20
    },
    text: {
        fontSize: 22,
        textAlign: 'center',
        lineHeight: 32,
        color: colors.heading,
        marginTop: 20
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '70%',
        fontSize: 18,
        marginTop: 30,
        padding: 10,
        textAlign: 'center',
    },
    button: {
        width: '100%',
        marginTop: 30,
        paddingHorizontal: 20
    }
})