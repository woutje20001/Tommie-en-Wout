import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { Grid, Row, Col } from 'react-native-easy-grid';

export default class App extends React.Component {
  state = {
    imgSource: require("./img/Bowser.png")
  }
  onPressButton = () => {
    let Test = "Lucas"
    let Succ = "./img/" + Test + ".png";
    Alert.alert(Succ);
    this.setState({imgSource: require(Succ)})
  }
  render() {
    return (
      <Grid style={styles.container}>
        <Row style={{ height: "5%" }}>

        </Row>

        <Row style={{ width: "100%" }}>
          <Image style={{ width: "100%", height: "100%" }} source={this.state.imgSource} />
        </Row>
        <Row style={{ height: "10%" }}>
          <Button style={{alignItems: 'center', justifyContent: 'center'}} onPress={this.onPressButton} title="Generate Random Character" />
        </Row>
        <Row style={{ height: "5%" }}>

        </Row>

      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
