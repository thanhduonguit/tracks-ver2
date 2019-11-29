import '../_mockLocation';
import React, {useEffect, useState, useContext, useCallback} from 'react';
import { StyleSheet, Text } from 'react-native';
import Map from '../components/Map';
import {SafeAreaView} from 'react-navigation';
import {requestPermissionsAsync, watchPositionAsync, Accuracy} from 'expo-location';
import { Context as LocationContext} from '../context/LocationContext';
import {FontAwesome} from '@expo/vector-icons';

const TrackCreateScreen = () => {
    const {addLocation} = useContext(LocationContext);
    const [err, setErr] = useState(null);
    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10
            }, (location) => {
                addLocation(location);
            });
        } catch (e) {
            setErr(e);
        }
    }

    useEffect(() => {
        startWatching();
    }, []);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text style={styles.mapview}>Map Views</Text>
            <Map />
            {err ? <Text>Please enable location services.</Text> : null}
        </SafeAreaView>
    );
};

TrackCreateScreen.navigationOptions = {
    title: 'Add Location',
    tabBarIcon: <FontAwesome name="plus" size={30}/>
}

const styles = StyleSheet.create({
    mapview: {
        textAlign: 'center',
        fontSize: 26,
        color: 'blue',
        marginVertical: 15
    }
});

export default TrackCreateScreen;
