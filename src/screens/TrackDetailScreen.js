import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';
import yelp from './../api/yelp';
import { Feather } from '@expo/vector-icons';

const ResultsShowScreen = ({navigation}) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    const getResult = async (id) => {
        const respone = await yelp.get(`/${id}`);
        setResult(respone.data);
    };
    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <>
            <Text style={styles.title}>{result.name}</Text>
            <Text style={styles.item}>
                Address: {result.location.address1}
            </Text>
            <Text style={styles.item}>
                Phone Number: {result.phone}
            </Text>
            <View style={styles.rating}>
                <View style={styles.numberRating}>
                    <Text style={styles.item}>{result.rating}</Text>
                    <View style={styles.star}>
                        <Feather style={ styles.iconStyle } name="star"/>
                        <Feather style={ styles.iconStyle } name="star"/>
                        <Feather style={ styles.iconStyle } name="star"/>
                        <Feather style={ styles.iconStyle } name="star"/>
                        <Feather style={ styles.iconStyle } name="star"/>
                    </View>
                </View>
                <Text style={styles.reviews}>- {result.review_count} reviews</Text>
            </View>
            <Text style={styles.lastItem}>Some pictures about us:</Text>
            <FlatList
                style={styles.flatlist} 
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={ ({item}) => {
                    return <Image
                        style={styles.image}
                        source={{uri: item}}
                    />
                }}
            />
        </>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginTop: 13,
        fontWeight: 'bold',
        backgroundColor: '#3c8c52',
        paddingBottom: 5,
        paddingTop: 5,
        textAlign: 'center',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 3
    },
    image: {
        width: '100%',
        height: 250,
        marginTop: 15
    },
    flatlist: {
        marginHorizontal: 15
    },
    item: {
        fontSize: 20,
        marginHorizontal: 16,
        marginTop: 15
    },
    reviews: {
        fontSize: 20,
        marginHorizontal: 16,
        marginTop: 15,
        marginLeft: 6
    },
    lastItem: {
        fontSize: 20,
        marginHorizontal: 16,
        marginTop: 15,
        marginBottom: 15
    },
    iconStyle: {
        fontSize: 21,
    },
    star: {
        flexDirection: 'row',
        marginVertical: 18,
        marginLeft: -10
    },
    numberRating: {
        flexDirection: 'row'
    },
    rating: {
        flexDirection: 'row'
    }
});

export default ResultsShowScreen;