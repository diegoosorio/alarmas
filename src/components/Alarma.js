import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Alarma extends Component {
  render() {
    return (
      <View style={styles.alarma}>
        <View style={styles.containerEncabezado}>
          <View style={styles.containerCodigo}>
            <Text style={styles.titulo}>Codigo de la falla: </Text>
            <Text style={[styles.titulo, styles.colorCodigo]}>
              {this.props.alarma.codigo_falla}
            </Text>
          </View>
          <View style={styles.containerCodigo}>
            <Text style={styles.titulo}>Nivel de alarma: </Text>
            <Text style={[styles.titulo, styles.colorCodigo]}>
              {this.props.alarma.nivel_falla}
            </Text>
          </View>
          <View style={styles.containerCodigo}>
            <Text style={styles.titulo}>Bypass asociado: </Text>
            <Text style={[styles.titulo, styles.colorCodigo]}>
              {this.props.alarma.bypass_asociado}
            </Text>
          </View>
          <View style={styles.containerCodigo}>
            <Text style={styles.titulo}>Emisor: </Text>
            <Text style={[styles.titulo, styles.colorCodigo]}>
              {this.props.alarma.emisor}
            </Text>
          </View>
        </View>
        <View style={styles.containerProcedimiento}>
          <View>
            <Text style={styles.tituloProcedimiento}>Texto Maquinista</Text>
            <Text style={styles.textoProcedimento}>
              {this.props.alarma.maquinista_comentario}
            </Text>
            <Text style={styles.tituloProcedimiento}>
              Comentario de la alarma
            </Text>
            <Text style={styles.textoProcedimento}>
              {this.props.alarma.maquinista_denominacion}
            </Text>
            <Text style={styles.tituloProcedimiento}>Texto Mantenimiento</Text>
            <Text style={styles.textoProcedimento}>
              {this.props.alarma.mantenimiento_comentario}
            </Text>
            <Text style={styles.tituloProcedimiento}>
              Comentario de mantenimiento
            </Text>
            <Text style={styles.textoProcedimento}>
              {this.props.alarma.mantenimiento_comentario__1}
            </Text>
            <Text style={styles.tituloProcedimiento}>
              Otro medio de detección
            </Text>
            <Text style={styles.textoProcedimento}>
              {this.props.alarma.otro_medio_deteccion}
            </Text>
            <Text style={styles.tituloProcedimiento}>Origen de la falla</Text>
            <Text style={styles.textoProcedimento}>
              {this.props.alarma.origen_falla_otro_medio}
            </Text>
            <Text style={styles.tituloProcedimiento}>
              Procedimiento a efectuar
            </Text>
            <Text style={styles.textoProcedimento}>
              {this.props.alarma.tratamiento_pcc}
            </Text>
            <Text style={styles.tituloProcedimiento}>Comentario</Text>
            <Text style={styles.textoProcedimento}>
              {this.props.alarma.modo_expl_comentario}
            </Text>
            <Text style={styles.tituloProcedimiento}>
              Modo de explotación 1
            </Text>
            <Text style={styles.textoProcedimento}>
              {this.props.alarma.modo_expl_1}
            </Text>
            <Text style={styles.tituloProcedimiento}>
              Modo de explotación 2
            </Text>
            <Text style={styles.textoProcedimento}>
              {this.props.alarma.modo_expl_2}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  alarma: {
    padding: 10,
  },
  containerEncabezado: {
    // backgroundColor: 'yellow',
    borderBottomWidth: 1,
    borderBottomColor: '#d9d9d9',
    paddingBottom: 10,
  },
  containerCodigo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 18,
    fontWeight: '500',
    flex: 1,
    // backgroundColor: 'blue',
  },
  colorCodigo: {
    color: '#032380',
  },
  containerProcedimiento: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  tituloProcedimiento: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 2,
    // flex: 1,
  },
  textoProcedimento: {
    color: '#595959',
  },
});

export default Alarma;
