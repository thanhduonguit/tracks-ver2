import React, {useState} from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import SearchBar from './../components/SearchBar';
import useResults from './../hooks/useResults';
import ResultsList from './../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    
    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };

    return (
        <View style={{marginTop: 40}}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView style={{marginTop: 20}}>
                <ResultsList
                    title='Cost Effective'
                    results={filterResultsByPrice('$')}
                />
                <ResultsList 
                    title='Bit Pricier'
                    results={filterResultsByPrice('$$')}
                />
                <ResultsList 
                    title='Bit Spender'
                    results={filterResultsByPrice('$$$')}
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    
});

SearchScreen.navigationOptions = () => {
    return {
        header: null
    }
}

export default SearchScreen;
