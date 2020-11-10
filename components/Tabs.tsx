import React from 'react';
import {Pressable, View, Text, StyleSheet} from 'react-native';
// import SvgUri from 'react-native-svg-uri';
// import home from '../assets/icons/home.svg';

const Tabs = () => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignSelf: 'center',
      justifyContent: 'flex-end',
      position: 'absolute',
      bottom: 0,
      //width: 'fit-content',
    },
    options: {
      paddingLeft: '2%',
      fontFamily: 'Raleway-Medium',
      paddingBottom: '5%',
    },
    firstOption: {
      color: '#1777F2',
      fontFamily: 'Raleway-Medium',
    },
  });

  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.firstOption}>Home</Text>
        {/* <SvgUri width="200" height="200" svgXmlData={home} /> */}
      </Pressable>
      <Pressable>
        <Text style={styles.options}>Watch</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.options}>Market</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.options}>Profile</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.options}>Notifications</Text>
      </Pressable>
      <Pressable>
        <Text style={styles.options}>More</Text>
      </Pressable>
    </View>
  );
};

export default Tabs;
