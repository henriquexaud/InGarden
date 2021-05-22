import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';

import colors from '../styles/colors';
import userImage from '../assets/perfil.png';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import fonts from '../styles/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Header() {
    const [userName, setUserName] = useState<string>();

    useEffect(() => {
        async function loadStorageUserName() {
            const user = await AsyncStorage.getItem('@myplants:user');
            setUserName(user || '');
        }

        loadStorageUserName();

    }, [userName]);

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá,</Text>
                <Text style={styles.userName}>
                    {userName}
                </Text>
            </View>

            <Image style={styles.image} source={userImage} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: getStatusBarHeight(),
    },
    greeting: {
        fontFamily: fonts.text,
        fontSize: 28,
        color: colors.heading,
        marginTop: 15
    },
    userName: {
        fontFamily: fonts.heading,
        fontSize: 32,
        color: colors.heading,
        lineHeight: 38
    },
    image: {
        height: 80,
        width: 80,
        borderRadius: 40
    }
})
