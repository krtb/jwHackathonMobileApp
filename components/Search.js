import React, { Component } from "react"
import { fetchVideos } from "./index"
import { Input } from 'react-native-elements';

export default class Search extends React.Component {
  state = {
    search: '',
  };

  handleSubmit = e => {
    let { searchResults } = this.props
    e.preventDefault()
    e.stopPropagation()
    fetchVideos(1000, 0, searchResults, this.state.search)
  }

  updateSearch = (search) => {
    this.setState({ search })
  };

  render() {
    const { search } = this.state;

    return (
      <Input
        placeholder='Search video library...'
        onChangeText={this.updateSearch}
        onSubmitEditing={this.handleSubmit}
      />
    );
  }
}