import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ActivityIndicator,
} from 'react-native'

import { Header } from '../components/Header';

import waterdrop from '../assets/waterdrop.png';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import { FlatList } from 'react-native-gesture-handler';
import { PlantCardPrimary } from '../components/PlantCardPrimary';
import { PlantProps, loadPlant } from '../libs/storage';
import { formatDistance } from 'date-fns';
import { pt } from 'date-fns/locale';


export function MyPlants() {
    const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [nextWatered, setNextWatered] = useState<string>()

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
                        <Text>Elemento</Text>
                    )}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flex: 1 }}
                />

            </View>



        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tipContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.blue_light,
        padding: 20,
        borderRadius: 20,
        marginVertical: 30
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

})