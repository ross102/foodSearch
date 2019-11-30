import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

   return (
       <View style={styles.background}>
           <Feather name="search" style={styles.iconStyle} />
           <TextInput style={styles.textInput} placeholder="Search"
           autoCapitalize="none"
           autoCorrect={false}
           onEndEditing={onTermSubmit}
           value={term}
           onChangeText={onTermChange}
            />
       </View>
   )

}

const styles = StyleSheet.create({
    background: {
     marginTop: 10,
     marginBottom: 5,
      backgroundColor: '#F0EEEE',
      height: 50,
      borderRadius: 5,
      marginHorizontal: 15,
      flexDirection: 'row'
    },
    textInput: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center'
    }
});

export default SearchBar;