import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput
} from 'react-native';

export function UserIdentification() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text>
                    <TextInput />
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        width: '100%'
    }
})