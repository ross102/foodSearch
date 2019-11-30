import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import  ResultDetail from './ResultDetail'

const ResultList = ({ title, result  }) => {

  return (
      <View>
          <Text style={styles.titleStyle} > {title} </Text>
          <FlatList
        //   horizontal
        //   showsHorizontalScrollIndicator={false}
          keyExtractor={(result) => result.id.toString() }
          data={result}
          renderItem={ ({ item }) => {
            return <ResultDetail result={item}  />
          }}
           /> 
      </View>
  )

}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default ResultList