import React, { Component } from "react"
import { StyleSheet, Text, View } from 'react-native';

import {
  fetchVideos,
  fetchTemplateKey
} from "./index"

import { apiKey, apiSecret } from "../secrets"

export default class VideosList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      apiKey,
      apiSecret,
      videos: [],
      limit: 10,
      offset: 0,
      view: "list",
      loading: true,
      preview: false,
      url: "",
      preview_id: "",
      key: ""
    }
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
    fetchTemplateKey(this.updateTemplateKey)
  }

  render() {
    let { videos } = this.state
    console.log(videos)
    return (
      <View>
        {videos.map((video) => (
            <Text>{video.title} : Media ID ({video.key})</Text>
        ))}
      </View>
    )
  }
}
