import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TextFooter = ({text}) => {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

TextFooter.defaultProps = {
  text: 'Continue...',
};

const styles = StyleSheet.create({
  footer: {
    height: 60,
    padding: 15,
    backgroundColor: '#f0ebee',
  },
  text: {
    color: '#2b2a29',
    fontSize: 23,
    textAlign: 'center',
  },
});

export default TextFooter;