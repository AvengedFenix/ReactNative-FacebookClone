/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, StyleSheet, Text, Button, Pressable} from 'react-native';
// import gandalfBG from '../assets/images/gandalf_background.jpg';

const Profile = () => {
  const styles = StyleSheet.create({
    coverImage: {
      width: '94%',
      height: 200,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      marginLeft: '3%',
      marginTop: '4%',
    },
    profileImage: {
      width: 200,
      height: 200,
      borderRadius: 100,
      borderWidth: 5,
      borderColor: '#ffffff',
      alignSelf: 'center',
      //top: '-50%',
    },
    profileName: {
      alignSelf: 'center',
      fontFamily: 'Poppins-Bold',
      fontSize: 24,
    },
    profileDesc: {
      fontSize: 14,
      fontFamily: 'Poppins-Medium',
      color: '#9398A0',
      paddingRight: '10%',
      paddingLeft: '10%',
      marginTop: '-1%',
    },
    addFriend: {
      borderRadius: 4,
      backgroundColor: '#1777F2',
      marginLeft: '3%',
      width: '70%',
    },
    optionsButtons: {
      backgroundColor: '#EBECF0',
      borderRadius: 4,
      marginLeft: '3%',
      width: 40,
    },
  });

  return (
    <View>
      <Image
        style={styles.coverImage}
        source={{uri: 'https://i.ytimg.com/vi/sSlE6awtdjk/maxresdefault.jpg'}}
      />
      <View style={{top: '-18%'}}>
        <Image
          style={styles.profileImage}
          source={{
            uri:
              'https://img.cinemablend.com/filter:scale/quill/6/6/d/b/d/b/66dbdbd94dea70fcf8b7e103b6eb25749f65cfdf.jpg?mw=600',
          }}
        />
        <Text style={styles.profileName}>Gandalf the White</Text>
        <Text style={styles.profileDesc}>
          Elf-friend, Istar, Ring-bearer, Servant of the Secret Fire, Wielder of
          the Flame of Anor
        </Text>
        {/* <Button onPress={() => {}} color="#1777F2" title="Add Friend" /> */}
        <View
          style={{
            flexDirection: 'row',
            width: '96%',
            marginTop: '3%',
            justifyContent: 'space-evenly',
          }}>
          <Pressable style={styles.addFriend}>
            <Text
              style={{
                color: 'white',
                padding: '2%',
                paddingTop: '3%',
                fontFamily: 'Poppins-Medium',
                alignSelf: 'center',
                textAlign: 'center',
              }}>
              Add friend
            </Text>
          </Pressable>
          <Pressable style={styles.optionsButtons}>
            <Text
              style={{
                color: '#2B2C30',
                paddingTop: '3%',
                fontFamily: 'Poppins-Medium',
                alignSelf: 'center',
              }}>
              x
            </Text>
          </Pressable>
          <Pressable style={styles.optionsButtons}>
            <Text
              style={{
                color: '#2B2C30',
                paddingTop: '3%',
                fontFamily: 'Poppins-Medium',
                alignSelf: 'center',
              }}>
              ...
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Profile;
