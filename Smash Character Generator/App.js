import React from 'react';
import { AppRegistry, TouchableHighlight, StyleSheet, Text, ScrollView, View, Image, Button, Alert, Icon, Linking, AsyncStorage } from 'react-native';
import { Grid, Row, Col } from 'react-native-easy-grid';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { FontAwesome } from '@expo/vector-icons';
import { Audio, AppLoading } from 'expo';
/*TODO: ADD APPLOADING TO BOTH HOME AND SETTINGS TO SET RANDOM TO -1,
ADD GOOD LAYOUT TO SETTINGS
ADD FUNCTIONALITY TO SETTINGS*/

class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arraychar: [{
        id: 1,
        name: "Mario",
        requireurl: require("./img/Mario.png"),
        audio: require("./sound/Mario.wav"),
        enabled: true
      },
      {
        id: 2,
        name: "DK",
        requireurl: require("./img/DK.png"),
        audio: require("./sound/DK.wav"),
        enabled: true
      },
      {
        id: 3,
        name: "Link",
        requireurl: require("./img/Link.png"),
        audio: require("./sound/Link.wav"),
        enabled: true
      },
      {
        id: 4,
        name: "Samus",
        requireurl: require("./img/Samus.png"),
        audio: require("./sound/Samus.wav"),
        enabled: true
      },
      {
        id: 5,
        name: "Dark Samus",
        requireurl: require("./img/Dark_Samus.png"),
        audio: require("./sound/Dark_Samus.wav"),
        enabled: true
      },
      {
        id: 6,
        name: "Yoshi",
        requireurl: require("./img/Yoshi.png"),
        audio: require("./sound/Yoshi.wav"),
        enabled: true
      },
      {
        id: 7,
        name: "Kirby",
        requireurl: require("./img/Kirby.png"),
        audio: require("./sound/Kirby.wav"),
        enabled: true
      },
      {
        id: 8,
        name: "Fox",
        requireurl: require("./img/Fox.png"),
        audio: require("./sound/Fox.wav"),
        enabled: true
      },
      {
        id: 9,
        name: "Pikachu",
        requireurl: require("./img/Pikachu.png"),
        audio: require("./sound/Pikachu.wav"),
        enabled: true
      },
      {
        id: 10,
        name: "Luigi",
        requireurl: require("./img/Luigi.png"),
        audio: require("./sound/Luigi.wav"),
        enabled: true
      },
      {
        id: 11,
        name: "Ness",
        requireurl: require("./img/Ness.png"),
        audio: require("./sound/Ness.wav"),
        enabled: true
      },
      {
        id: 12,
        name: "Captain Falcon",
        requireurl: require("./img/Captain_Falcon.png"),
        audio: require("./sound/Captain_Falcon.wav"),
        enabled: true
      },
      {
        id: 13,
        name: "Jigglypuff",
        requireurl: require("./img/Jigglypuff.png"),
        audio: require("./sound/Jigglypuff.wav"),
        enabled: true
      },
      {
        id: 14,
        name: "Peach",
        requireurl: require("./img/Peach.png"),
        audio: require("./sound/Peach.wav"),
        enabled: true
      },
      {
        id: 15,
        name: "Daisy",
        requireurl: require("./img/Daisy.png"),
        audio: require("./sound/Daisy.wav"),
        enabled: true
      },
      {
        id: 16,
        name: "Bowser",
        requireurl: require("./img/Bowser.png"),
        audio: require("./sound/Bowser.wav"),
        enabled: true
      },
      {
        id: 17,
        name: "Ice Climbers",
        requireurl: require("./img/Ice_Climbers.png"),
        audio: require("./sound/Ice_Climbers.wav"),
        enabled: true
      },
      {
        id: 18,
        name: "Sheik",
        requireurl: require("./img/Sheik.png"),
        audio: require("./sound/Sheik.wav"),
        enabled: true
      },
      {
        id: 19,
        name: "Zelda",
        requireurl: require("./img/Zelda.png"),
        audio: require("./sound/Zelda.wav"),
        enabled: true
      },
      {
        id: 20,
        name: "Dr. Mario",
        requireurl: require("./img/Dr_Mario.png"),
        audio: require("./sound/Dr_Mario.wav"),
        enabled: true
      },
      {
        id: 21,
        name: "Pichu",
        requireurl: require("./img/Pichu.png"),
        audio: require("./sound/Pichu.wav"),
        enabled: true
      },
      {
        id: 22,
        name: "Falco",
        requireurl: require("./img/Falco.png"),
        audio: require("./sound/Falco.wav"),
        enabled: true
      },
      {
        id: 23,
        name: "Marth",
        requireurl: require("./img/Marth.png"),
        audio: require("./sound/Marth.wav"),
        enabled: true
      },
      {
        id: 24,
        name: "Lucina",
        requireurl: require("./img/Lucina.png"),
        audio: require("./sound/Lucina.wav"),
        enabled: true
      },
      {
        id: 25,
        name: "Young Link",
        requireurl: require("./img/Young_Link.png"),
        audio: require("./sound/Young_Link.wav"),
        enabled: true
      },
      {
        id: 26,
        name: "Ganondorf",
        requireurl: require("./img/Ganondorf.png"),
        audio: require("./sound/Ganondorf.wav"),
        enabled: true
      },
      {
        id: 27,
        name: "Mewtwo",
        requireurl: require("./img/Mewtwo.png"),
        audio: require("./sound/Mewtwo.wav"),
        enabled: true
      },
      {
        id: 28,
        name: "Roy",
        requireurl: require("./img/Roy.png"),
        audio: require("./sound/Roy.wav"),
        enabled: true
      },
      {
        id: 29,
        name: "Chrom",
        requireurl: require("./img/Chrom.png"),
        audio: require("./sound/Chrom.wav"),
        enabled: true
      },
      {
        id: 30,
        name: "Mr. Game and Watch",
        requireurl: require("./img/Mr_Game_and_Watch.png"),
        audio: require("./sound/Mr_Game_and_Watch.wav"),
        enabled: true
      },
      {
        id: 31,
        name: "Meta Knight",
        requireurl: require("./img/Meta_Knight.png"),
        audio: require("./sound/Meta_Knight.wav"),
        enabled: true
      },
      {
        id: 32,
        name: "Pit",
        requireurl: require("./img/Pit.png"),
        audio: require("./sound/Pit.wav"),
        enabled: true
      },
      {
        id: 33,
        name: "Dark Pit",
        requireurl: require("./img/Dark_Pit.png"),
        audio: require("./sound/Dark_Pit.wav"),
        enabled: true
      },
      {
        id: 34,
        name: "Zero Suit Samus",
        requireurl: require("./img/Zero_Suit_Samus.png"),
        audio: require("./sound/Zero_Suit_Samus.wav"),
        enabled: true
      },
      {
        id: 35,
        name: "Wario",
        requireurl: require("./img/Wario.png"),
        audio: require("./sound/Wario.wav"),
        enabled: true
      },
      {
        id: 36,
        name: "Snake",
        requireurl: require("./img/Snake.png"),
        audio: require("./sound/Snake.wav"),
        enabled: true
      },
      {
        id: 37,
        name: "Ike",
        requireurl: require("./img/Ike.png"),
        audio: require("./sound/Ike.wav"),
        enabled: true
      },
      {
        id: 38,
        name: "Squirtle",
        requireurl: require("./img/Squirtle.png"),
        audio: require("./sound/Pokemon_Trainer.wav"),
        enabled: true
      },
      {
        id: 39,
        name: "Ivysaur",
        requireurl: require("./img/Ivysaur.png"),
        audio: require("./sound/Pokemon_Trainer.wav"),
        enabled: true
      },
      {
        id: 40,
        name: "Charizard",
        requireurl: require("./img/Charizard.png"),
        audio: require("./sound/Pokemon_Trainer.wav"),
        enabled: true
      },
      {
        id: 41,
        name: "Diddy Kong",
        requireurl: require("./img/Diddy_Kong.png"),
        audio: require("./sound/Diddy_Kong.wav"),
        enabled: true
      },
      {
        id: 42,
        name: "Lucas",
        requireurl: require("./img/Lucas.png"),
        audio: require("./sound/Lucas.wav"),
        enabled: true
      },
      {
        id: 43,
        name: "Sonic",
        requireurl: require("./img/Sonic.png"),
        audio: require("./sound/Sonic.wav"),
        enabled: true
      },
      {
        id: 44,
        name: "King Dedede",
        requireurl: require("./img/King_Dedede.png"),
        audio: require("./sound/King_Dedede.wav"),
        enabled: true
      },
      {
        id: 45,
        name: "Olimar",
        requireurl: require("./img/Olimar.png"),
        audio: require("./sound/Olimar.wav"),
        enabled: true
      },
      {
        id: 46,
        name: "Lucario",
        requireurl: require("./img/Lucario.png"),
        audio: require("./sound/Lucario.wav"),
        enabled: true
      },
      {
        id: 47,
        name: "R.O.B.",
        requireurl: require("./img/ROB.png"),
        audio: require("./sound/ROB.wav"),
        enabled: true
      },
      {
        id: 48,
        name: "Toon Link",
        requireurl: require("./img/Toon_Link.png"),
        audio: require("./sound/Toon_Link.wav"),
        enabled: true
      },
      {
        id: 49,
        name: "Wolf",
        requireurl: require("./img/Wolf.png"),
        audio: require("./sound/Wolf.wav"),
        enabled: true
      },
      {
        id: 50,
        name: "Villager",
        requireurl: require("./img/Villager.png"),
        audio: require("./sound/Villager.wav"),
        enabled: true
      },
      {
        id: 51,
        name: "Mega Man",
        requireurl: require("./img/Mega_Man.png"),
        audio: require("./sound/Mega_Man.wav"),
        enabled: true
      },
      {
        id: 52,
        name: "Wii Fit Trainer",
        requireurl: require("./img/Wii_Fit_Trainer.png"),
        audio: require("./sound/Wii_Fit_Trainer.wav"),
        enabled: true
      },
      {
        id: 53,
        name: "Rosalina & Luma",
        requireurl: require("./img/Rosalina.png"),
        audio: require("./sound/Rosalina.wav"),
        enabled: true
      },
      {
        id: 54,
        name: "Little Mac",
        requireurl: require("./img/Little_Mac.png"),
        audio: require("./sound/Little_Mac.wav"),
        enabled: true
      },
      {
        id: 55,
        name: "Greninja",
        requireurl: require("./img/Greninja.png"),
        audio: require("./sound/Greninja.wav"),
        enabled: true
      },
      {
        id: 56,
        name: "Mii Brawler",
        requireurl: require("./img/Mii_Brawler.png"),
        audio: require("./sound/Mii_Brawler.wav"),
        enabled: true
      },
      {
        id: 57,
        name: "Mii Swordfighter",
        requireurl: require("./img/Mii_Swordfighter.png"),
        audio: require("./sound/Mii_Swordfighter.wav"),
        enabled: true
      },
      {
        id: 58,
        name: "Mii Gunner",
        requireurl: require("./img/Mii_Gunner.png"),
        audio: require("./sound/Mii_Gunner.wav"),
        enabled: true
      },
      {
        id: 59,
        name: "Palutena",
        requireurl: require("./img/Palutena.png"),
        audio: require("./sound/Palutena.wav"),
        enabled: true
      },
      {
        id: 60,
        name: "Pac-Man",
        requireurl: require("./img/Pac-man.png"),
        audio: require("./sound/Pac-Man.wav"),
        enabled: true
      },
      {
        id: 61,
        name: "Robin",
        requireurl: require("./img/Robin.png"),
        audio: require("./sound/Robin.wav"),
        enabled: true
      },
      {
        id: 62,
        name: "Shulk",
        requireurl: require("./img/Shulk.png"),
        audio: require("./sound/Shulk.wav"),
        enabled: true
      },
      {
        id: 63,
        name: "Bowser Jr.",
        requireurl: require("./img/Bowser_Jr.png"),
        audio: require("./sound/Bowser_Jr.wav"),
        enabled: true
      },
      {
        id: 64,
        name: "Duck Hunt",
        requireurl: require("./img/Duck_Hunt.png"),
        audio: require("./sound/Duck_Hunt.wav"),
        enabled: true
      },
      {
        id: 65,
        name: "Ryu",
        requireurl: require("./img/Ryu.png"),
        audio: require("./sound/Ryu.wav"),
        enabled: true
      },
      {
        id: 66,
        name: "Ken",
        requireurl: require("./img/Ken.png"),
        audio: require("./sound/Ken.wav"),
        enabled: true
      },
      {
        id: 67,
        name: "Cloud",
        requireurl: require("./img/Cloud.png"),
        audio: require("./sound/Cloud.wav"),
        enabled: true
      },
      {
        id: 68,
        name: "Corrin",
        requireurl: require("./img/Corrin.png"),
        audio: require("./sound/Corrin.wav"),
        enabled: true
      },
      {
        id: 69,
        name: "Bayonetta",
        requireurl: require("./img/Bayonetta.png"),
        audio: require("./sound/Bayonetta.wav"),
        enabled: true
      },
      {
        id: 70,
        name: "Inkling",
        requireurl: require("./img/Inkling.png"),
        audio: require("./sound/Inkling.wav"),
        enabled: true
      },
      {
        id: 71,
        name: "Ridley",
        requireurl: require("./img/Ridley.png"),
        audio: require("./sound/Ridley.wav"),
        enabled: true
      },
      {
        id: 72,
        name: "Simon",
        requireurl: require("./img/Simon.png"),
        audio: require("./sound/Simon.wav"),
        enabled: true
      },
      {
        id: 73,
        name: "Richter",
        requireurl: require("./img/Richter.png"),
        audio: require("./sound/Richter.wav"),
        enabled: true
      },
      {
        id: 74,
        name: "King k Rool",
        requireurl: require("./img/King_K_Rool.png"),
        audio: require("./sound/King_K_Rool.wav"),
        enabled: true
      },
      {
        id: 75,
        name: "Isabelle",
        requireurl: require("./img/Isabelle.png"),
        audio: require("./sound/Isabelle.wav"),
        enabled: true
      },
      {
        id: 76,
        name: "Incineroar",
        requireurl: require("./img/Incineroar.png"),
        audio: require("./sound/Incineroar.wav"),
        enabled: true
      },
      {
        id: 77,
        name: "Piranha Plant",
        requireurl: require("./img/Piranha_Plant.png"),
        audio: require("./sound/Piranha_Plant.wav"),
        enabled: true
      },
      ],
      random: -1,
      characterSource: require("./img/random.png"),
      characterName: "Press the button to randomize a character",
      isReady: false,
    }
  };

  _onPressButton = async (e) => {
    await this._retrieveData();
    let newarray = new Array();
    for (let i = 0; i < this.state.arraychar.length; i++) {
      if (this.state.arraychar[i].enabled == true) {
        newarray.push(this.state.arraychar[i])
      }
    }
    console.log(newarray)
    // Random generator
    const max = newarray.length;
    const rand = Math.floor(Math.random() * max);
    this.setState({ random: rand });
    let idx = this.state.random;

    // Looks through arraychar for the the requiredurl of the randomly chosen number
    var key = Object.keys(newarray)[idx];
    value = newarray[key];
    //console.log(value);
    //console.log(value);
    if (value.enabled == true) {
      this.setState({
          characterName: value.name,
          characterSource: value.requireurl
      });
    console.log(`${this.state.characterSource} ${value.requireurl}`);
    console.log(`${this.state.characterSource} ${value.requireurl}`);
    Audio.setIsEnabledAsync(true)
    const soundObject = new Audio.Sound();
    bool = false;
    try {
      await soundObject.loadAsync(value.audio);
      await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      // An error occurred!
    }
  }
}



  _retrieveData = async () => {
    try {
      let o = await AsyncStorage.getItem('somekey') ||JSON.stringify(this.state.arraychar);
      if (o != null) {
      let c = JSON.parse(o);
      //console.log(c);
      if (c[0].name != null || c[0].name != undefined || c[0].name != "") {
        this.setState({arraychar: c});
      }
      else {
        await _storeData();
      }
    }
    else {
      await _storeData();
    }
    } catch (error) {
      // Error retrieving data
      Alert.alert(error)
    }
  }

  setRandom = async () => {
    if (this.state.random == -1) {
      await this._retrieveData();
      const max = this.state.arraychar.length;
      const rand = Math.floor(Math.random() * max);
      this.setState({ random: rand });
    }
  }

  _storeData = async () => {
    try {
      let o = this.state.arraychar;
      await AsyncStorage.setItem('somekey', JSON.stringify(o));
      // this._retrieveData();
    } catch (error) {
      // Error saving data
      Alert.alert(error)
    }
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._retrieveData}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return (
      <Grid onTouchStart={this.setRandom}>

        <Row style={{ backgroundColor: 'white', height: "4%" }}></Row>
        <Row style={{
          height: "65%",
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Image style={{ width: "90%", height: "90%", resizeMode: 'contain' }} source={this.state.characterSource}
          />
        </Row>
        <Row style={{
          height: "5%",
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white'
        }}>
          <Text>{this.state.characterName}</Text>
        </Row>

        <Row style={{
          height: "30%", flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Button color='tomato' onPress={this._onPressButton.bind(this)}
            title="Randomize"></Button>
        </Row>
      </Grid>
    );
  }
}

class SettingsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arraychar: [{
        id: 1,
        name: "Mario",
        requireurl: require("./img/Mario.png"),
        audio: require("./sound/Mario.wav"),
        enabled: true
      },
      {
        id: 2,
        name: "DK",
        requireurl: require("./img/DK.png"),
        audio: require("./sound/DK.wav"),
        enabled: true
      },
      {
        id: 3,
        name: "Link",
        requireurl: require("./img/Link.png"),
        audio: require("./sound/Link.wav"),
        enabled: true
      },
      {
        id: 4,
        name: "Samus",
        requireurl: require("./img/Samus.png"),
        audio: require("./sound/Samus.wav"),
        enabled: true
      },
      {
        id: 5,
        name: "Dark Samus",
        requireurl: require("./img/Dark_Samus.png"),
        audio: require("./sound/Dark_Samus.wav"),
        enabled: true
      },
      {
        id: 6,
        name: "Yoshi",
        requireurl: require("./img/Yoshi.png"),
        audio: require("./sound/Yoshi.wav"),
        enabled: true
      },
      {
        id: 7,
        name: "Kirby",
        requireurl: require("./img/Kirby.png"),
        audio: require("./sound/Kirby.wav"),
        enabled: true
      },
      {
        id: 8,
        name: "Fox",
        requireurl: require("./img/Fox.png"),
        audio: require("./sound/Fox.wav"),
        enabled: true
      },
      {
        id: 9,
        name: "Pikachu",
        requireurl: require("./img/Pikachu.png"),
        audio: require("./sound/Pikachu.wav"),
        enabled: true
      },
      {
        id: 10,
        name: "Luigi",
        requireurl: require("./img/Luigi.png"),
        audio: require("./sound/Luigi.wav"),
        enabled: true
      },
      {
        id: 11,
        name: "Ness",
        requireurl: require("./img/Ness.png"),
        audio: require("./sound/Ness.wav"),
        enabled: true
      },
      {
        id: 12,
        name: "Captain Falcon",
        requireurl: require("./img/Captain_Falcon.png"),
        audio: require("./sound/Captain_Falcon.wav"),
        enabled: true
      },
      {
        id: 13,
        name: "Jigglypuff",
        requireurl: require("./img/Jigglypuff.png"),
        audio: require("./sound/Jigglypuff.wav"),
        enabled: true
      },
      {
        id: 14,
        name: "Peach",
        requireurl: require("./img/Peach.png"),
        audio: require("./sound/Peach.wav"),
        enabled: true
      },
      {
        id: 15,
        name: "Daisy",
        requireurl: require("./img/Daisy.png"),
        audio: require("./sound/Daisy.wav"),
        enabled: true
      },
      {
        id: 16,
        name: "Bowser",
        requireurl: require("./img/Bowser.png"),
        audio: require("./sound/Bowser.wav"),
        enabled: true
      },
      {
        id: 17,
        name: "Ice Climbers",
        requireurl: require("./img/Ice_Climbers.png"),
        audio: require("./sound/Ice_Climbers.wav"),
        enabled: true
      },
      {
        id: 18,
        name: "Sheik",
        requireurl: require("./img/Sheik.png"),
        audio: require("./sound/Sheik.wav"),
        enabled: true
      },
      {
        id: 19,
        name: "Zelda",
        requireurl: require("./img/Zelda.png"),
        audio: require("./sound/Zelda.wav"),
        enabled: true
      },
      {
        id: 20,
        name: "Dr. Mario",
        requireurl: require("./img/Dr_Mario.png"),
        audio: require("./sound/Dr_Mario.wav"),
        enabled: true
      },
      {
        id: 21,
        name: "Pichu",
        requireurl: require("./img/Pichu.png"),
        audio: require("./sound/Pichu.wav"),
        enabled: true
      },
      {
        id: 22,
        name: "Falco",
        requireurl: require("./img/Falco.png"),
        audio: require("./sound/Falco.wav"),
        enabled: true
      },
      {
        id: 23,
        name: "Marth",
        requireurl: require("./img/Marth.png"),
        audio: require("./sound/Marth.wav"),
        enabled: true
      },
      {
        id: 24,
        name: "Lucina",
        requireurl: require("./img/Lucina.png"),
        audio: require("./sound/Lucina.wav"),
        enabled: true
      },
      {
        id: 25,
        name: "Young Link",
        requireurl: require("./img/Young_Link.png"),
        audio: require("./sound/Young_Link.wav"),
        enabled: true
      },
      {
        id: 26,
        name: "Ganondorf",
        requireurl: require("./img/Ganondorf.png"),
        audio: require("./sound/Ganondorf.wav"),
        enabled: true
      },
      {
        id: 27,
        name: "Mewtwo",
        requireurl: require("./img/Mewtwo.png"),
        audio: require("./sound/Mewtwo.wav"),
        enabled: true
      },
      {
        id: 28,
        name: "Roy",
        requireurl: require("./img/Roy.png"),
        audio: require("./sound/Roy.wav"),
        enabled: true
      },
      {
        id: 29,
        name: "Chrom",
        requireurl: require("./img/Chrom.png"),
        audio: require("./sound/Chrom.wav"),
        enabled: true
      },
      {
        id: 30,
        name: "Mr. Game and Watch",
        requireurl: require("./img/Mr_Game_and_Watch.png"),
        audio: require("./sound/Mr_Game_and_Watch.wav"),
        enabled: true
      },
      {
        id: 31,
        name: "Meta Knight",
        requireurl: require("./img/Meta_Knight.png"),
        audio: require("./sound/Meta_Knight.wav"),
        enabled: true
      },
      {
        id: 32,
        name: "Pit",
        requireurl: require("./img/Pit.png"),
        audio: require("./sound/Pit.wav"),
        enabled: true
      },
      {
        id: 33,
        name: "Dark Pit",
        requireurl: require("./img/Dark_Pit.png"),
        audio: require("./sound/Dark_Pit.wav"),
        enabled: true
      },
      {
        id: 34,
        name: "Zero Suit Samus",
        requireurl: require("./img/Zero_Suit_Samus.png"),
        audio: require("./sound/Zero_Suit_Samus.wav"),
        enabled: true
      },
      {
        id: 35,
        name: "Wario",
        requireurl: require("./img/Wario.png"),
        audio: require("./sound/Wario.wav"),
        enabled: true
      },
      {
        id: 36,
        name: "Snake",
        requireurl: require("./img/Snake.png"),
        audio: require("./sound/Snake.wav"),
        enabled: true
      },
      {
        id: 37,
        name: "Ike",
        requireurl: require("./img/Ike.png"),
        audio: require("./sound/Ike.wav"),
        enabled: true
      },
      {
        id: 38,
        name: "Squirtle",
        requireurl: require("./img/Squirtle.png"),
        audio: require("./sound/Pokemon_Trainer.wav"),
        enabled: true
      },
      {
        id: 39,
        name: "Ivysaur",
        requireurl: require("./img/Ivysaur.png"),
        audio: require("./sound/Pokemon_Trainer.wav"),
        enabled: true
      },
      {
        id: 40,
        name: "Charizard",
        requireurl: require("./img/Charizard.png"),
        audio: require("./sound/Pokemon_Trainer.wav"),
        enabled: true
      },
      {
        id: 41,
        name: "Diddy Kong",
        requireurl: require("./img/Diddy_Kong.png"),
        audio: require("./sound/Diddy_Kong.wav"),
        enabled: true
      },
      {
        id: 42,
        name: "Lucas",
        requireurl: require("./img/Lucas.png"),
        audio: require("./sound/Lucas.wav"),
        enabled: true
      },
      {
        id: 43,
        name: "Sonic",
        requireurl: require("./img/Sonic.png"),
        audio: require("./sound/Sonic.wav"),
        enabled: true
      },
      {
        id: 44,
        name: "King Dedede",
        requireurl: require("./img/King_Dedede.png"),
        audio: require("./sound/King_Dedede.wav"),
        enabled: true
      },
      {
        id: 45,
        name: "Olimar",
        requireurl: require("./img/Olimar.png"),
        audio: require("./sound/Olimar.wav"),
        enabled: true
      },
      {
        id: 46,
        name: "Lucario",
        requireurl: require("./img/Lucario.png"),
        audio: require("./sound/Lucario.wav"),
        enabled: true
      },
      {
        id: 47,
        name: "R.O.B.",
        requireurl: require("./img/ROB.png"),
        audio: require("./sound/ROB.wav"),
        enabled: true
      },
      {
        id: 48,
        name: "Toon Link",
        requireurl: require("./img/Toon_Link.png"),
        audio: require("./sound/Toon_Link.wav"),
        enabled: true
      },
      {
        id: 49,
        name: "Wolf",
        requireurl: require("./img/Wolf.png"),
        audio: require("./sound/Wolf.wav"),
        enabled: true
      },
      {
        id: 50,
        name: "Villager",
        requireurl: require("./img/Villager.png"),
        audio: require("./sound/Villager.wav"),
        enabled: true
      },
      {
        id: 51,
        name: "Mega Man",
        requireurl: require("./img/Mega_Man.png"),
        audio: require("./sound/Mega_Man.wav"),
        enabled: true
      },
      {
        id: 52,
        name: "Wii Fit Trainer",
        requireurl: require("./img/Wii_Fit_Trainer.png"),
        audio: require("./sound/Wii_Fit_Trainer.wav"),
        enabled: true
      },
      {
        id: 53,
        name: "Rosalina & Luma",
        requireurl: require("./img/Rosalina.png"),
        audio: require("./sound/Rosalina.wav"),
        enabled: true
      },
      {
        id: 54,
        name: "Little Mac",
        requireurl: require("./img/Little_Mac.png"),
        audio: require("./sound/Little_Mac.wav"),
        enabled: true
      },
      {
        id: 55,
        name: "Greninja",
        requireurl: require("./img/Greninja.png"),
        audio: require("./sound/Greninja.wav"),
        enabled: true
      },
      {
        id: 56,
        name: "Mii Brawler",
        requireurl: require("./img/Mii_Brawler.png"),
        audio: require("./sound/Mii_Brawler.wav"),
        enabled: true
      },
      {
        id: 57,
        name: "Mii Swordfighter",
        requireurl: require("./img/Mii_Swordfighter.png"),
        audio: require("./sound/Mii_Swordfighter.wav"),
        enabled: true
      },
      {
        id: 58,
        name: "Mii Gunner",
        requireurl: require("./img/Mii_Gunner.png"),
        audio: require("./sound/Mii_Gunner.wav"),
        enabled: true
      },
      {
        id: 59,
        name: "Palutena",
        requireurl: require("./img/Palutena.png"),
        audio: require("./sound/Palutena.wav"),
        enabled: true
      },
      {
        id: 60,
        name: "Pac-Man",
        requireurl: require("./img/Pac-man.png"),
        audio: require("./sound/Pac-Man.wav"),
        enabled: true
      },
      {
        id: 61,
        name: "Robin",
        requireurl: require("./img/Robin.png"),
        audio: require("./sound/Robin.wav"),
        enabled: true
      },
      {
        id: 62,
        name: "Shulk",
        requireurl: require("./img/Shulk.png"),
        audio: require("./sound/Shulk.wav"),
        enabled: true
      },
      {
        id: 63,
        name: "Bowser Jr.",
        requireurl: require("./img/Bowser_Jr.png"),
        audio: require("./sound/Bowser_Jr.wav"),
        enabled: true
      },
      {
        id: 64,
        name: "Duck Hunt",
        requireurl: require("./img/Duck_Hunt.png"),
        audio: require("./sound/Duck_Hunt.wav"),
        enabled: true
      },
      {
        id: 65,
        name: "Ryu",
        requireurl: require("./img/Ryu.png"),
        audio: require("./sound/Ryu.wav"),
        enabled: true
      },
      {
        id: 66,
        name: "Ken",
        requireurl: require("./img/Ken.png"),
        audio: require("./sound/Ken.wav"),
        enabled: true
      },
      {
        id: 67,
        name: "Cloud",
        requireurl: require("./img/Cloud.png"),
        audio: require("./sound/Cloud.wav"),
        enabled: true
      },
      {
        id: 68,
        name: "Corrin",
        requireurl: require("./img/Corrin.png"),
        audio: require("./sound/Corrin.wav"),
        enabled: true
      },
      {
        id: 69,
        name: "Bayonetta",
        requireurl: require("./img/Bayonetta.png"),
        audio: require("./sound/Bayonetta.wav"),
        enabled: true
      },
      {
        id: 70,
        name: "Inkling",
        requireurl: require("./img/Inkling.png"),
        audio: require("./sound/Inkling.wav"),
        enabled: true
      },
      {
        id: 71,
        name: "Ridley",
        requireurl: require("./img/Ridley.png"),
        audio: require("./sound/Ridley.wav"),
        enabled: true
      },
      {
        id: 72,
        name: "Simon",
        requireurl: require("./img/Simon.png"),
        audio: require("./sound/Simon.wav"),
        enabled: true
      },
      {
        id: 73,
        name: "Richter",
        requireurl: require("./img/Richter.png"),
        audio: require("./sound/Richter.wav"),
        enabled: true
      },
      {
        id: 74,
        name: "King k Rool",
        requireurl: require("./img/King_K_Rool.png"),
        audio: require("./sound/King_K_Rool.wav"),
        enabled: true
      },
      {
        id: 75,
        name: "Isabelle",
        requireurl: require("./img/Isabelle.png"),
        audio: require("./sound/Isabelle.wav"),
        enabled: true
      },
      {
        id: 76,
        name: "Incineroar",
        requireurl: require("./img/Incineroar.png"),
        audio: require("./sound/Incineroar.wav"),
        enabled: true
      },
      {
        id: 77,
        name: "Piranha Plant",
        requireurl: require("./img/Piranha_Plant.png"),
        audio: require("./sound/Piranha_Plant.wav"),
        enabled: true
      },
      ],
      random: -1,
      characterSource: require("./img/random.png"),
      characterName: "Press the button to randomize a character",
      isReady: false,
    }
  }

  _getData = async () => {
    _retrieveData();
    this._getData = null;
  }

  _retrieveData = async () => {
    try {
      let o = await AsyncStorage.getItem('somekey') ||JSON.stringify(this.state.arraychar);
      if (o != null) {
      let c = JSON.parse(o);
      //console.log(c);
      if (c[0].name != null || c[0].name != undefined || c[0].name != "") {
        this.setState({arraychar: c});
      }
      else {
        await _storeData();
      }
    }
    else {
      await _storeData();
    }
    } catch (error) {
      // Error retrieving data
      Alert.alert(error)
    }
  }

  _storeData = async () => {
    try {
      let o = this.state.arraychar;
      AsyncStorage.setItem('somekey', JSON.stringify(o));
      //console.log(o)
    } catch (error) {
      // Error saving data
      Alert.alert(error)
    }
  }

  _disableCharacter = (name) => {
    for (let i = 0; i < this.state.arraychar.length; i++) {
      let character = this.state.arraychar[i];

      if(character.name == name) {
        this.setState({
          arraychar: [
            ...this.state.arraychar.slice(0, i),
            {
              ...character,
              enabled: !character.enabled
            },
            ...this.state.arraychar.slice(i+1)
          ]
        },
        () => {
          this._storeData();
        });
        break;
      }
    }
  }

  createImg = () => {
    this._retrieveData();
    let table = [];
    let style;
    this.state.arraychar.forEach(element => {
      if (element.enabled == true) {
        style = {height: 100, width: 100, resizeMode: 'contain'};
      }
      else {
        style = {height: 100, width: 100, resizeMode: 'contain', tintColor: 'gray'}
      }
      table.push(<TouchableHighlight underlayColor='transparent' onPress={() => this._disableCharacter(element.name)}><Image style={style} source={element.requireurl}/></TouchableHighlight>);
    });
    return table
  }

  render() {


    return (
      <Grid style={{
        backgroundColor: 'white',
        alignContent: 'center',
        marginTop: 35
      }}>
        <ScrollView>
          <View style={{flex: 1, flexDirection: 'row', flexWrap: "wrap", alignItems: 'flex-start', justifyContent: 'center'
      }}>
          {this.createImg()}
          </View>
        </ScrollView>
      </Grid>
    )
  }
};

class AboutScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  mailUs = () => {
    Linking.openURL("mailto:tommieenwout@gmail.com?subject=Feedback");
  }
  privacyPolicy = () => {
    Linking.openURL("https://www.freeprivacypolicy.com/privacy/view/e74026701dfae5c94f1f51c3f4f0e1f7");
  }
  render() {

    return (
      <Grid style={{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
      }}><Text>Coming Soon!</Text>
      </Grid>
    )
  }
};



const TabNavigator = createBottomTabNavigator({
  Settings: {
    screen: SettingsPage,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="cog" size={25} style={{ color: tintColor }} />
      )
    })
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="home" size={25} style={{ color: tintColor }} />
      )
    })
  },
  About: {
    screen: AboutScreen,
    navigationOptions: () => ({
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="question-circle" size={25} style={{ color: tintColor }} />
      )
    })
  },
},
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
      showIcon: true,
    }
  });

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
