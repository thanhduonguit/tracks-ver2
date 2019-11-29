import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import {withNavigation} from 'react-navigation';
import ResultsDetail from '../components/ResultsDetail';

const ResultsList = ({title, results, navigation}) => {
    if (!results.length) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem = {({item}) => {
                    return (
                        <TouchableOpacity 
                            onPress={() => navigation.navigate('TrackDetail', {id: item.id})}
                        >
                            <ResultsDetail result={item}/>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        backgroundColor: '#3c8c52',
        paddingBottom: 5,
        paddingTop: 5,
        textAlign: 'center',
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 3
    }
});

export default withNavigation(ResultsList);
