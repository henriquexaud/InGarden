import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps {
    title: string;
}


export function Button({ title }: ButtonProps) {
    return (
        <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
        >
            <Text style={styles.buttonText}>
                {title}
            </Text>

        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        height: 56,
        padding: 20
    },
    buttonText: {
        color: colors.white,
        fontSize: 18,
        fontFamily: fonts.complement
    }
})