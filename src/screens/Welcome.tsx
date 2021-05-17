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
import { Feather } from '@expo/vector-icons';

import wateringImg from '../assets/watering.png';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Welcome() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>

                <Text style={styles.title}>
                    Cuide de {'\n'}
                suas plantas de {'\n'}
                forma divertida {'\n'}

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

                    <Feather name='chevron-right'
                        style={styles.buttonIcon} />

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
        paddingVertical: 80
    },
    title: {
        fontSize: 28,
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
        height: 60,
        marginTop: 35
    },
    buttonIcon: {
        fontSize: 32,
        color: colors.white
    }
})