import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  ActivityIndicator} from 'react-native';
import Home from './src/containers/Home';
import Header from './src/components/Header';
// import Menu from './src/components/Menu';
import Search from './src/components/Search';
import Description from './src/components/Description';
import Alarma from './src/components/Alarma';

// import data from './util/data/data.json';
import alarmas from './util/data/alarmas.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alarma: {},
      lista_alarmas: alarmas,
      busqueda: false,
      loading: true,
    };
  }

  componentDidMount() {
    this.timeOut = setTimeout(() => {
      this.setLoading();
    }, 1500);
  }

  setLoading() {
    this.setState({loading: false});
  }

  componentWillUnmount() {
    clearInterval(this.timeOut);
  }

  handleChange = text => {
    this.setState({
      text: text,
    });
  };

  handleSubmit = codigo_submit => {
    var lista_alarmas = this.state.lista_alarmas;
    var result = lista_alarmas.filter(
      alarma =>
        alarma.codigo_falla.toString() === codigo_submit.nativeEvent.text,
    );
    console.log('estado', this.state.codigo_falla === '');
    if (result[0] === undefined) {
      // eslint-disable-next-line no-alert
      alert(`El código ${codigo_submit.nativeEvent.text} no existe`);
    } else {
      this.setState({
        codigo_submit: codigo_submit.nativeEvent.text,
        alarma: result[0],
        busqueda: true,
      });
    }
  };

  render() {
    return (
      <View>
        {this.state.loading ? (
          <View style={styles.loading}>
            <ActivityIndicator size="large" color="white" />
            <Text style={{color: 'white'}}>Cargando</Text>
          </View>
        ) : (
          <Home>
            <View style={styles.menu}>
              <Header />
              <Search
                handleText={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            </View>
            <ScrollView style={styles.alarmas}>
              <Description>
                {this.state.busqueda ? (
                  <Alarma alarma={this.state.alarma} />
                ) : (
                  <Text
                    style={{
                      textAlign: 'center',
                    }}>
                    Procedimiento para tratamiento de la falla
                  </Text>
                )}
              </Description>
            </ScrollView>
          </Home>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    width: '100%',
    height: '100%',
    backgroundColor: '#293F80',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    height: '30%',
  },
  alarmas: {
    paddingLeft: 10,
    paddingRight: 10,
    height: '65%',
  },
  titulo: {
    fontSize: 18,
    backgroundColor: '#d9d9d9',
  },
});

export default App;

/* Color Theme Swatches in Hex */
// .royal-blue-mon-1-hex { color: #537EFF; }
// .royal-blue-mon-2-hex { color: #032380; }
// .royal-blue-mon-3-hex { color: #0645FF; }
// .royal-blue-mon-4-hex { color: #293F80; }
// .royal-blue-mon-5-hex { color: #0537CC; }

// /* Color Theme Swatches in RGBA */
// .royal-blue-mon-1-rgba { color: rgba(82, 126, 255, 1); }
// .royal-blue-mon-2-rgba { color: rgba(3, 34, 127, 1); }
// .royal-blue-mon-3-rgba { color: rgba(6, 69, 255, 1); }
// .royal-blue-mon-4-rgba { color: rgba(41, 63, 127, 1); }
// .royal-blue-mon-5-rgba { color: rgba(4, 55, 204, 1); }

// /* Color Theme Swatches in HSLA */
// .royal-blue-mon-1-hsla { color: hsla(224, 100, 66, 1); }
// .royal-blue-mon-2-hsla { color: hsla(224, 95, 25, 1); }
// .royal-blue-mon-3-hsla { color: hsla(224, 100, 51, 1); }
// .royal-blue-mon-4-hsla { color: hsla(224, 51, 33, 1); }
// .royal-blue-mon-5-hsla { color: hsla(224, 95, 40, 1); }