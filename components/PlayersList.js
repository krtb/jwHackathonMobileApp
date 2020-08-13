import React, { Component } from "react"
import { StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import { ListItem, Button, Header } from 'react-native-elements'
import { Search, fetchPlayers } from './index'

export default class PlayersList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      players: []
    }
  }

  updatePlayers = players => {
      console.log(players)
    this.setState({ players, loading: false })
  }

  componentDidMount() {
    fetchPlayers(this.updatePlayers)
  }

  render() {
    let { players } = this.state
    return (
      <SafeAreaView style={styles.container}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Player Library', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />  
        <ScrollView>
          {players.map((player, index) => (
              <ListItem 
              key={index}
              title={player.name}
              subtitle={player.key}
              ></ListItem>
          ))}
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignSelf: 'stretch'
  },
});
