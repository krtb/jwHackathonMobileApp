import React, { Component } from "react"
import { StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import { ListItem, Button, Header } from 'react-native-elements'
import { Search, fetchVideos } from './index'

export default class VideosList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      videos: [],
      limit: 10,
      offset: 0,
      key: ""
    }
  }

  resetVideos = () => {
    fetchVideos(this.state.limit, 0, this.updateVideos)
  }

  searchResults = videos => {
    this.setState({ videos })
  }
  
  //helper function to update video array for VideoRow
  updateVideos = videos => {
    this.setState({ videos: this.state.videos.concat(videos), loading: false })
  }

  //helper function to update template key for preview player
  updateTemplateKey = key => {
    this.setState({ key })
  }

  //grab videos and template key when component is mounted
  componentDidMount() {
    fetchVideos(this.state.limit, 0, this.updateVideos)
  }

  handlePress = e => {
    this.setState({ offset: this.state.offset + 10 }, () => {
      fetchVideos(this.state.limit, this.state.offset, this.updateVideos)
    })
  }

  render() {
    let { videos } = this.state
    return (
      <SafeAreaView style={styles.container}>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'Video Library', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />  
        <ScrollView>
          <Search searchResults={this.searchResults}/>
          {videos.map((video, index) => (
              <ListItem 
              key={index}
              leftAvatar={{ source: { uri: `https://cdn.jwplayer.com/v2/media/${video.key}/poster.jpg` } }}
              title={video.title}
              subtitle={video.key}
              ></ListItem>
          ))}
          <Button
            title="Fetch More"
            type="clear"
            onPress={this.handlePress}
          />
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
