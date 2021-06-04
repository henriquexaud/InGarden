import React, { useState } from 'react';
import {
    Alert,
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    Platform,
    TouchableOpacity
} from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { useNavigation, useRoute } from '@react-navigation/core';

import waterdrop from '../assets/waterdrop.png';
import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { format, isBefore } from 'date-fns';
import { loadPlant, PlantProps, savePlant } from '../libs/storage';

interface Params {
    plant: PlantProps;
}

export function PlantSave() {
    const [selectedDateTime, setSelectedDateTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

    const navigation = useNavigation();

    const route = useRoute();
    const { plant } = route.params as Params;

    function handleChangeTime(event: Event, dateTime: Date | undefined) {
        if (Platform.OS === 'android') {
            setShowDatePicker(oldState => !oldState);
        }

        if (dateTime && isBefore(dateTime, new Date())) {
            setSelectedDateTime(new Date());
            return Alert.alert('Escolha uma hora no futuro! ⏰')
        }

        if (dateTime)
            setSelectedDateTime(dateTime);
    }

    function handleOpenDateTimePickerForAndroid() {
        setShowDatePicker(oldState => !oldState);
    }


    async function handleSave() {
        try {
            await savePlant({
                ...plant,
                dateTimeNotification: selectedDateTime
            });

            navigation.navigate('Confirmation', {
                title: 'Tudo certo',
                subtitle: 'Fique tranquilo que sempre iremos lembrar você de cuidar das sua plantinhas com muito cuidado',
                icon: 'hug',
                nextScreen: 'MyPlants'
            });

        } catch {
            Alert.alert('Não foi possível salvar sua planta')
        }
    }

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}
        >
            <View style={styles.container}>
                <View style={styles.plantInfo}>
                    <SvgFromUri
                        uri={plant.photo}
                        height={150}
                        width={150}
                    />

                    <Text style={styles.plantName}>
                        {plant.name}
                    </Text>
                    <Text style={styles.plantAbout}>
                        {plant.about}
                    </Text>

                </View>

                <View style={styles.controller}>
                    <View style={styles.tipContainer}>
                        <Image
                            source={waterdrop}
                            style={styles.tipImage}
                        />
                        <Text style={styles.tipText}>
                            {plant.water_tips}
                        </Text>
                    </View>

                    <View style={styles.timeView} >

                        <Text style={styles.alertLabel}>
                            Escolha o melhor horário para ser lembrado:
                </Text>

                        {showDatePicker && (
                            <DateTimePicker
                                value={selectedDateTime}
                                mode='time'
                                display='spinner'
                                onChange={handleChangeTime}
                            />
                        )
                        }

                        {Platform.OS === 'android' && (

                            <TouchableOpacity
                                style={styles.dateTimePickerButton}
                                onPress={handleOpenDateTimePickerForAndroid}>
                                <Text style={styles.dateTimePickerText}>
                                    {`Lembrar ${format(selectedDateTime, 'HH:mm')}`}
                                </Text>
                            </TouchableOpacity>

                        )}

                    </View>

                    <Button
                        title="Cadastrar planta"
                        onPress={handleSave}
                    />
                </View>
            </View >
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: colors.shape
    },
    plantInfo: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.shape
    },
    plantName: {
        fontSize: 24,
        fontFamily: fonts.heading,
        color: colors.heading,
        marginTop: 15
    },
    plantAbout: {
        textAlign: 'center',
        fontFamily: fonts.text,
        color: colors.heading,
        fontSize: 17,
        marginTop: 10,
        marginBottom: 30
    },
    controller: {
        backgroundColor: colors.white,
        paddingVertical: 20,
        paddingHorizontal: 20,
        paddingBottom: getBottomSpace() || 20,
    },
    tipContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.blue_light,
        padding: 20,
        borderRadius: 20,
        position: 'relative',
        bottom: 60
    },
    tipImage: {
        width: 56,
        height: 56
    },
    tipText: {
        flex: 1,
        marginLeft: 20,
        fontFamily: fonts.text,
        color: colors.blue,
        fontSize: 17,
        textAlign: 'justify'
    },
    alertLabel: {
        textAlign: 'center',
        fontFamily: fonts.complement,
        color: colors.heading,
        fontSize: 12,
        marginBottom: 5,
        padding: 10
    },
    dateTimePickerText: {
        fontFamily: fonts.text,
        color: colors.heading,
        fontSize: 17,
        textAlign: 'center',
    },
    dateTimePickerButton: {
        width: '60%',
        alignItems: 'center',
        paddingVertical: 20,
        backgroundColor: colors.shape,
        borderRadius: 18,
        marginBottom: 20
    },
    timeView: {
        alignItems: 'center',
        position: 'relative',
        bottom: 25
    }
})