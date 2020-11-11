/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TextInput, Button, View} from 'react-native';

const SearchBar = () => {
  return (
    <View
      style={{
        width: '100%',
        // flex: 3,
        flexDirection: 'row',
      }}>
      <Button color="white" title="<" onPress={() => {}} />
      <TextInput
        style={{
          borderRadius: 20,
          color: 'black',
          backgroundColor: '#EBECF0',
          height: 40,
          borderColor: 'gray',
          paddingLeft: '10%',
          marginLeft: '5%',
          marginRight: '90%',
          width: '85%',
        }}>
        Search
      </TextInput>
    </View>
  );
};

export default SearchBar;
