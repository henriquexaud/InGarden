import React from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
    View
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Feather } from '@expo/vector-icons';

import wateringImg from '../assets/welcome.png';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Welcome() {
    const navigation = useNavigation();

    function handleStart() {
        navigation.navigate('UserIdentification')
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Cuide de {'\n'}
                    suas plantas {'\n'}
                    de forma fácil {'\n'}
                </Text>

                <Image
                    source={wateringImg}
                    style={styles.image}
                    resizeMode='contain'
                />

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                    onPress={handleStart}
                >
                    <Feather
                        name='chevron-right'
                        style={styles.buttonIcon}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 100
    },
    title: {
        fontSize: 28,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading
    },
    image: {
        height: Dimensions.get('window').width * 0.6
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        width: 60,
        height: 60,
        marginTop: 35
    },
    buttonIcon: {
        fontSize: 32,
        color: colors.white
    }
})