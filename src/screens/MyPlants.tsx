import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
} from 'react-native'
import { EnviromentButton } from '../components/EnviromentButton';

import { Header } from '../components/Header';

export function MyPlants() {
    return (
        <View style={styles.container}>
            <Header />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingTop: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
})