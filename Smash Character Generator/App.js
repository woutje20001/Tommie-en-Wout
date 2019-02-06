import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert} from 'react-native';
import {Grid,Row,Col} from 'react-native-easy-grid';
export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      arraychar : [{
        id: 0,
        name: "Bowser",
        requireurl: require("./img/Bowser.png")
        
      }, {
        id: 1,
        name: "Mario",
        requireurl: require("./img/Mario.png")
      }, {
        id: 2,
        name: "Ness",
        requireurl: require("./img/Ness.png")
        
      }, {
        id: 3,
        name: "Bayonetta",
        requireurl: require("./img/Bayonetta.png")
       
      }],
    random: 0,
    characterSource: require("./img/Bayonetta.png")
    }
  };
 
  _onPressButton = (e) => {
    // Random generator
      const max = this.state.arraychar.length;
      const rand = Math.floor(Math.random()* max);

      this.setState({ random: rand});
      let idx = this.state.random;

    // Looks through arraychar for the the requiredurl of the randomly chosen number
      let o = this.state.arraychar;
      var key = Object.keys(o)[idx];
      value = o[key]
      //console.log(value);

      this.state.characterSource = value.requireurl;
  }
 
  render() {
    
    return ( 
        <Grid >
          <Row style={{height: "4%"}}></Row>
        <Row style={{height: "50%",width: "100%", lex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',}}>
          <Image style={{width: 300, height: "100%"}} source={this.state.characterSource}
          />
            
        </Row>
        <Row style={{height: "25%", flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',}}>
        <Text></Text>
        </Row>
        <Row style={{height: "50%", flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',}}>
          <Button onPress={this._onPressButton.bind(this)}
  title="Press Me"></Button>
        </Row>
        </Grid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
