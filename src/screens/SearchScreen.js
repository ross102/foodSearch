import React, { useState } from 'react';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar'
import ResultList from '../components/ResultList'
import useResults from '../hooks/useResults'


const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
 
  return (
       <>
       <SearchBar 
       term={term} 
       onTermChange={setTerm}
       onTermSubmit={ () => searchApi(term) } />
         {errorMessage ? <Text> {errorMessage}</Text> : null}
           <ScrollView>
             <ResultList result={results}  />
           </ScrollView>
       </> 
   )
}

const styles = StyleSheet.create({});

export default SearchScreen;