import React, {Component} from 'react';
import {TextInput, StyleSheet} from 'react-native';

class Search extends Component {
  render() {
    return (
      <TextInput
        style={styles.inputText}
        placeholder={'Codigo de alarma'}
        keyboardType={'phone-pad'}
        onChangeText={this.props.handleText}
        onSubmitEditing={this.props.handleSubmit}
      />
    );
  }
}

const styles = StyleSheet.create({
  inputText: {
    flex: 1,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginBottom: 5,
    marginRight: 10,
    marginLeft: 10,
    fontSize: 18,
    padding: 0,
  },
});

export default Search;
