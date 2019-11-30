import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';


const ResultDetail = ({ result }) => {
  
    return (
        <View style={styles.container}>
        <Image style={styles.image} source={{ uri: `https://spoonacular.com/recipeImages/${result.id}-312x231.jpg`,  }} />
            <Text style={styles.title}> {result.title} </Text>
            <Text>Servings {result.servings} Ready-in:{result.readyInMinutes}m</Text>
        </View>
    )

}


const styles = StyleSheet.create({
    container: {
      marginLeft: 15   
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16
    }
})

export default ResultDetail 