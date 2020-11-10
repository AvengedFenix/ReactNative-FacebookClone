/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TextInput, View, Text, Pressable} from 'react-native';

const SearchBar = () => {
  return (
    <View
      style={{
        width: '100%',
        // flex: 3,
        flexDirection: 'row',
      }}>
      <Pressable>
        <Text
          style={{
            color: '#6C6F75',
            paddingTop: '3%',
            paddingLeft: '2%',
          }}>
          Back
        </Text>
      </Pressable>
      <TextInput
        style={{
          borderRadius: 20,
          color: '#6C6F75',
          backgroundColor: '#EBECF0',
          height: 40,
          borderColor: 'gray',
          paddingLeft: '10%',
          marginLeft: '3%',
          marginRight: '90%',
          width: '85%',
          fontFamily: 'Raleway-Medium',
        }}>
        Gandalf the White
      </TextInput>
    </View>
  );
};

export default SearchBar;
