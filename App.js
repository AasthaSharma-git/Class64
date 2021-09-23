import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from 'react-native';

import { Header } from 'react-native-elements';
import db from './localdb';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      chunks: [],
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'blue'}
          centerComponent={{
            text: 'Monkey Chunky',
            style: { color: 'white', fontSize: 20 },
          }}
        />
        <Image style={styles.image}
        source={{uri: 'https://www.shareicon.net/data/128x128/2015/08/06/80805_face_512x512.png'}}/>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.setState({ chunks: db[this.state.text].chunks });
          }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        <View>
          {this.state.chunks.map((item) => {
            return(
            <TouchableOpacity style={styles.chunkButton}>
              <Text style={styles.output}>{item}</Text>;
            </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  input: {
    marginTop:100 ,
    borderWidth: 3,
    width: '80%',
    textAlign: 'center',
    height: 40,
    alignSelf: 'center',
  },
  button: {
    marginTop: 50,
    alignSelf: 'center',
    borderWidth: 3,
    width: 70,
    height: 50,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  buttonText: {
    textAlign: 'center',
  },
  output: {

    alignSelf: 'center',
    fontSize: 38,
    textAlign:'center'
  },
  chunkButton:{
    marginTop:20,
    borderWidth:2,
    width:80,
    height:50,
    alignSelf:'center',
    justifyContent:'center'

  },
  image:{
    width:150,
    height:150,
    marginLeft:95
  }
});
