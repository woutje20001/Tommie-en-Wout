import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { Grid, Row, Col } from 'react-native-easy-grid';
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arraychar: [{
        id: 1,
        name: "Mario",
        requireurl: require("./img/Mario.png"),
        enabled: true
      },
      {
        id: 2,
        name: "DK",
        requireurl: require("./img/DK.png"),
        enabled: true
      },
      {
        id: 3,
        name: "Link",
        requireurl: require("./img/Link.png"),
        enabled: true
      },
      {
        id: 4,
        name: "Samus",
        requireurl: require("./img/Samus.png"),
        enabled: true
      },
      {
        id: 5,
        name: "Dark Samus",
        requireurl: require("./img/Dark_Samus.png"),
        enabled: true
      },
      {
        id: 6,
        name: "Yoshi",
        requireurl: require("./img/Yoshi.png"),
        enabled: true
      },
      {
        id: 7,
        name: "Kirby",
        requireurl: require("./img/Kirby.png"),
        enabled: true
      },
      {
        id: 8,
        name: "Fox",
        requireurl: require("./img/Fox.png"),
        enabled: true
      },
      {
        id: 9,
        name: "Pikachu",
        requireurl: require("./img/Pikachu.png"),
        enabled: true
      },
      {
        id: 10,
        name: "Luigi",
        requireurl: require("./img/Luigi.png"),
        enabled: true
      },
      {
        id: 11,
        name: "Ness",
        requireurl: require("./img/Ness.png"),
        enabled: true
      },
      {
        id: 12,
        name: "Captain Falcon",
        requireurl: require("./img/Captain_Falcon.png"),
        enabled: true
      },
      {
        id: 13,
        name: "Jigglypuff",
        requireurl: require("./img/Jigglypuff.png"),
        enabled: true
      },
      {
        id: 14,
        name: "Peach",
        requireurl: require("./img/Peach.png"),
        enabled: true
      },
      {
        id: 15,
        name: "Daisy",
        requireurl: require("./img/Daisy.png"),
        enabled: true
      },
      {
        id: 16,
        name: "Bowser",
        requireurl: require("./img/Bowser.png"),
        enabled: true
      },
      {
        id: 17,
        name: "Ice Climbers",
        requireurl: require("./img/Ice_Climbers.png"),
        enabled: true
      },
      {
        id: 18,
        name: "Sheik",
        requireurl: require("./img/Sheik.png"),
        enabled: true
      },
      {
        id: 19,
        name: "Zelda",
        requireurl: require("./img/Zelda.png"),
        enabled: true
      },
      {
        id: 20,
        name: "Dr. Mario",
        requireurl: require("./img/Dr_Mario.png"),
        enabled: true
      },
      {
        id: 21,
        name: "Pichu",
        requireurl: require("./img/Pichu.png"),
        enabled: true
      },
      {
        id: 22,
        name: "Falco",
        requireurl: require("./img/Falco.png"),
        enabled: true
      },
      {
        id: 23,
        name: "Marth",
        requireurl: require("./img/Marth.png"),
        enabled: true
      },
      {
        id: 24,
        name: "Lucina",
        requireurl: require("./img/Lucina.png"),
        enabled: true
      },
      {
        id: 25,
        name: "Young Link",
        requireurl: require("./img/Young_Link.png"),
        enabled: true
      },
      {
        id: 26,
        name: "Ganondorf",
        requireurl: require("./img/Ganondorf.png"),
        enabled: true
      },
      {
        id: 27,
        name: "Mewtwo",
        requireurl: require("./img/Mewtwo.png"),
        enabled: true
      },
      {
        id: 28,
        name: "Roy",
        requireurl: require("./img/Roy.png"),
        enabled: true
      },
      {
        id: 29,
        name: "Chrom",
        requireurl: require("./img/Chrom.png"),
        enabled: true
      },
      {
        id: 30,
        name: "Mr. Game and Watch",
        requireurl: require("./img/Mr_Game_and_Watch.png"),
        enabled: true
      },
      {
        id: 31,
        name: "Meta Knight",
        requireurl: require("./img/Meta_Knight.png"),
        enabled: true
      },
      {
        id: 32,
        name: "Pit",
        requireurl: require("./img/Pit.png"),
        enabled: true
      },
      {
        id: 33,
        name: "Dark Pit",
        requireurl: require("./img/Dark_Pit.png"),
        enabled: true
      },
      {
        id: 34,
        name: "Zero Suit Samus",
        requireurl: require("./img/Zero_Suit_Samus.png"),
        enabled: true
      },
      {
        id: 35,
        name: "Wario",
        requireurl: require("./img/Wario.png"),
        enabled: true
      },
      {
        id: 36,
        name: "Snake",
        requireurl: require("./img/Snake.png"),
        enabled: true
      },
      {
        id: 37,
        name: "Ike",
        requireurl: require("./img/Ike.png"),
        enabled: true
      },
      {
        id: 38,
        name: "Squirtle",
        requireurl: require("./img/Squirtle.png"),
        enabled: true
      },
      {
        id: 39,
        name: "Ivysaur",
        requireurl: require("./img/Ivysaur.png"),
        enabled: true
      },
      {
        id: 40,
        name: "Charizard",
        requireurl: require("./img/Charizard.png"),
        enabled: true
      },
      {
        id: 41,
        name: "Diddy Kong",
        requireurl: require("./img/Diddy_Kong.png"),
        enabled: true
      },
      {
        id: 42,
        name: "Lucas",
        requireurl: require("./img/Lucas.png"),
        enabled: true
      },
      {
        id: 43,
        name: "Sonic",
        requireurl: require("./img/Sonic.png"),
        enabled: true
      },
      {
        id: 44,
        name: "King Dedede",
        requireurl: require("./img/King_Dedede.png"),
        enabled: true
      },
      {
        id: 45,
        name: "Olimar",
        requireurl: require("./img/Olimar.png"),
        enabled: true
      },
      {
        id: 46,
        name: "Lucario",
        requireurl: require("./img/Lucario.png"),
        enabled: true
      },
      {
        id: 47,
        name: "R.O.B.",
        requireurl: require("./img/ROB.png"),
        enabled: true
      },
      {
        id: 48,
        name: "Toon Link",
        requireurl: require("./img/Toon_Link.png"),
        enabled: true
      },
      {
        id: 49,
        name: "Wolf",
        requireurl: require("./img/Wolf.png"),
        enabled: true
      },
      {
        id: 50,
        name: "Villager",
        requireurl: require("./img/Villager.png"),
        enabled: true
      },
      {
        id: 51,
        name: "Mega Man",
        requireurl: require("./img/Mega_Man.png"),
        enabled: true
      },
      {
        id: 52,
        name: "Wii Fit Trainer",
        requireurl: require("./img/Wii_Fit_Trainer.png"),
        enabled: true
      },
      {
        id: 53,
        name: "Rosalina & Luma",
        requireurl: require("./img/Rosalina.png"),
        enabled: true
      },
      {
        id: 54,
        name: "Little Mac",
        requireurl: require("./img/Little_Mac.png"),
        enabled: true
      },
      {
        id: 55,
        name: "Greninja",
        requireurl: require("./img/Greninja.png"),
        enabled: true
      },
      {
        id: 56,
        name: "Mii Brawler",
        requireurl: require("./img/Mii_Brawler.png"),
        enabled: true
      },
      {
        id: 57,
        name: "Mii Swordfighter",
        requireurl: require("./img/Mii_Swordfighter.png"),
        enabled: true
      },
      {
        id: 58,
        name: "Mii Gunner",
        requireurl: require("./img/Mii_Gunner.png"),
        enabled: true
      },
      {
        id: 59,
        name: "Palutena",
        requireurl: require("./img/Palutena.png"),
        enabled: true
      },
      {
        id: 60,
        name: "Pac-Man",
        requireurl: require("./img/Pac-man.png"),
        enabled: true
      },
      {
        id: 61,
        name: "Robin",
        requireurl: require("./img/Robin.png"),
        enabled: true
      },
      {
        id: 62,
        name: "Shulk",
        requireurl: require("./img/Shulk.png"),
        enabled: true
      },
      {
        id: 63,
        name: "Bowser Jr.",
        requireurl: require("./img/Bowser_Jr.png"),
        enabled: true
      },
      {
        id: 64,
        name: "Duck Hunt",
        requireurl: require("./img/Duck_Hunt.png"),
        enabled: true
      },
      {
        id: 65,
        name: "Ryu",
        requireurl: require("./img/Ryu.png"),
        enabled: true
      },
      {
        id: 66,
        name: "Ken",
        requireurl: require("./img/Ken.png"),
        enabled: true
      },
      {
        id: 67,
        name: "Cloud",
        requireurl: require("./img/Cloud.png"),
        enabled: true
      },
      {
        id: 68,
        name: "Corrin",
        requireurl: require("./img/Corrin.png"),
        enabled: true
      },
      {
        id: 69,
        name: "Bayonetta",
        requireurl: require("./img/Bayonetta.png"),
        enabled: true
      },
      {
        id: 70,
        name: "Inkling",
        requireurl: require("./img/Inkling.png"),
        enabled: true
      },
      {
        id: 71,
        name: "Ridley",
        requireurl: require("./img/Ridley.png"),
        enabled: true
      },
      {
        id: 72,
        name: "Simon",
        requireurl: require("./img/Simon.png"),
        enabled: true
      },
      {
        id: 73,
        name: "Richter",
        requireurl: require("./img/Olimar.png"),
        enabled: true
      },
      {
        id: 74,
        name: "King k Rool",
        requireurl: require("./img/King_K_Rool.png"),
        enabled: true
      },
      {
        id: 75,
        name: "Isabelle",
        requireurl: require("./img/Isabelle.png"),
        enabled: true
      },
      {
        id: 76,
        name: "Incineroar",
        requireurl: require("./img/Incineroar.png"),
        enabled: true
      },
      {
        id: 77,
        name: "Piranha Plant",
        requireurl: require("./img/Piranha_Plant.png"),
        enabled: true
      },
      ],
      random: 0,
      characterSource: require("./img/random.png"),
      characterName: "Press the button to randomize a character"
    }
  };

  _onPressButton = (e) => {
    // Random generator
    const max = this.state.arraychar.length;
    const rand = Math.floor(Math.random() * max);

    this.setState({ random: rand });
    let idx = this.state.random;

    // Looks through arraychar for the the requiredurl of the randomly chosen number
    let o = this.state.arraychar;
    var key = Object.keys(o)[idx];
    value = o[key]
    //console.log(value);

    this.state.characterSource = value.requireurl;
    this.state.characterName = value.name;
  }

  render() {

    return (
      <Grid>

        <Row style={{ backgroundColor: 'white', height: "4%" }}></Row>
        <Row style={{
          height: "66%", width: "100%", flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
         
        }}>
          <Image style={{ width: "90%", height: "90%", resizeMode: 'contain' }} source={this.state.characterSource}
          />

        </Row>
        <Row style={{
          height: "20%", flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Text>{this.state.characterName}</Text>
        </Row>
       
        <Row style={{
          height: "35%", flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Button onPress={this._onPressButton.bind(this)}
            title="Randomize"></Button>
        </Row>
      </Grid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
