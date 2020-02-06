import React from 'react';
import {View, StyleSheet} from 'react-native';

function Description(props) {
  return <View style={styles.container}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: {
    borderColor: '#D9D9D9',
    borderRadius: 5,
    borderWidth: 1,
    // width: 100,
    // height: 100,
    backgroundColor: 'white',
  },
});

export default Description;
