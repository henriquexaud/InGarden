import React from 'react';
import {
    SafeAreaView,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import { Feather } from '@expo/vector-icons';

import wateringImg from '../assets/watering.png';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Welcome() {

    return (
        <SafeAreaView style={styles.container}>

            <Text style={styles.title}>
                Cuide de {'\n'}
                suas plantas {'\n'}
                e animais
            </Text>

            <Image
                source={wateringImg}
                style={styles.image}
                resizeMode='contain'
            />



            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.7}
            >
                <Text style={styles.buttonText}>
                    <Feather name='chevron-right'
                        style={styles.buttonIcon} />
                </Text>

            </TouchableOpacity>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 50
    },
    title: {
        fontSize: 32,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading
    },
    image: {
        height: Dimensions.get('window').width * 0.7
    },
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        width: 60,
        height: 60
    },
    buttonText: {
        color: colors.white,
        fontSize: 30,
        fontFamily: fonts.complement
    },
    buttonIcon: {
        fontSize: 24
    }
})