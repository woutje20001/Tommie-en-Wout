import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert} from 'react-native';
import {Grid,Row,Col} from 'react-native-easy-grid';
export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      arraychar : [{
        id: 0,
        name: "Bowser"
        
      }, {
        id: 1,
        name: "Mario"
      }, {
        id: 2,
        name: "Ness"
        
      }, {
        id: 3,
        name: "Bayonetta"
       
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

    // Looks through arraychar for the the requiredurl of the randomly chosen number
      let name = String(this.state.arraychar[this.state.random].name);
      let imgname = String("./img/" + "Lucas" + ".png");
      this.setState({characterSource: require(imgname)})
      //console.log(value);
  }
 
  render() {
    
    return ( 
        <Grid >
          <Row style={{height: "4%"}}></Row>
        <Row style={{height: "50%",width: "100%", lex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',}}>
          <Image style={{width: 300, height: "100%"}} source={{uri: 'img:/Bowser.png'}}
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
