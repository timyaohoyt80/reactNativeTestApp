import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const DynamicList = ({props}) => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>{title}</Text>
      {
        I
      }
    </View>
  );
};

TextHeader.defaultProps = {
  title: 'Shopping List',
};

const styles = StyleSheet.create({
  body: {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',
  },
  text: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default DynamicList;