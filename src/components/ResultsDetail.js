import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

const ResultsDetail = ({result}) => {

    return (
        <View style={styles.container}>
            <Image 
                source={{uri: result.image_url}}
                style={styles.image}
            />
            <Text style={styles.info}>{result.name}</Text>
            <Text style={styles.info}>{result.rating} star, {result.review_count} reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginLeft: 11
    },
    image: {
        width: 200,
        height: 112,
        borderRadius: 3,
        marginBottom: 5
    },
    info: {
        fontWeight: 'bold',
        marginLeft: 7
    }
});

export default ResultsDetail;