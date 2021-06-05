import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ActivityIndicator,
    FlatList,
    Alert
} from 'react-native'

import { Header } from '../components/Header';

import waterdrop from '../assets/waterdrop.png';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { PlantCardSecondary } from '../components/PlantCardSecondary';
import { PlantProps, loadPlant } from '../libs/storage';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';
import { Load } from '../components/Load';
import AsyncStorage from '@react-native-async-storage/async-storage';


export function MyPlants() {
    const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextWatered, setNextWatered] = useState<string>()

    function handleRemove(plant: PlantProps) {
        Alert.alert('Remover', `Deseja remover a ${plant.name}?`, [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: async () => {
                    try {
                        const data = await AsyncStorage.getItem('')
                    } catch (error) {

                    }
                }
            }
        ])
    }

    useEffect(() => {
        async function loadStorageData() {
            const plantsStorage = await loadPlant();

            const nextTime = formatDistance(
                new Date(plantsStorage[0].dateTimeNotification).getTime(),
                new Date().getTime(),
                { locale: pt }
            );

            setNextWatered(
                `Não esqueça de regar a ${plantsStorage[0].name} à ${nextTime} horas.`
            )

            setMyPlants(plantsStorage);
            setLoading(false);
        }

        loadStorageData();
    }, [])

    if (loading)
        return <Load />

    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.tipContainer}>
                <Image
                    source={waterdrop}
                    style={styles.tipImage}
                />
                <Text style={styles.tipText}>
                    {nextWatered}
                </Text>
            </View>

            <View style={styles.plantsContainer}>
                <Text style={styles.title}>
                    Próximas regadas
                </Text>

                <FlatList
                    data={myPlants}
                    keyExtractor={(item) => String(item.id)}
                    renderItem={({ item }) => (
                        <PlantCardSecondary
                            data={item}
                            handleRemove={() => { handleRemove(item) }}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                //contentContainerStyle={{ flex: 1 }}
                />

            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    tipContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.blue_light,
        paddingHorizontal: 20,
        borderRadius: 20,
        height: 100,
        marginTop: 20
    },
    tipImage: {
        width: 50,
        height: 50
    },
    tipText: {
        flex: 1,
        color: colors.blue,
        paddingHorizontal: 20,
        fontFamily: fonts.text,
        fontSize: 15
    },
    plantsContainer: {
        flex: 1,
        width: '100%'
    },
    title: {
        color: colors.heading,
        fontFamily: fonts.heading,
        fontSize: 24,
        marginVertical: 20,
    },
    loadingMore: {
        paddingBottom: 20
    }

})