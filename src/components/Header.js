import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.titulo}>Alarmas tranvia</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#032380',
    // paddingTop: 10,
    // paddingBottom: 10,
    // height: 30,
    flex: 1,
  },
  titulo: {
    fontSize: 20,
    color: 'white',
  },
});

export default Header;
