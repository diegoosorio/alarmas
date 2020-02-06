import React, {Component} from 'react';
import {View} from 'react-native';

class Home extends Component {
  render() {
    return <View>{this.props.children}</View>;
  }
}

export default Home;
