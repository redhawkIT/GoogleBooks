import React, {PropTypes, Component} from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import MenuItem from 'material-ui/MenuItem'
import {browserHistory} from 'react-router'


class SearchBar extends Component {
  state = {
    text: ''
  }

  componentWillReceiveProps({books, google}) {
    console.log(books, google)
  }

  handleSuccessReq(login, name) {
    const url = `${login}/${name}`
    this.props.setNavBarTitle(url)
    this.props.setRepoURL(url)
    this.props.resetSearch()
    browserHistory.push(`/${url}`)
  }

  handleUpdateInput = (value) => value && this.props.googleAutoSuggest(value.slice(0, 50))

  handleRequest = (query) => {
    this.props.requestSearch(query)
    this.setState({text: ''})
  }


  render() {
    const {items} = this.props.google

    return (
      <AutoComplete
        hintText='Search'
        filter={AutoComplete.fuzzyFilter}
        dataSource={items}
        searchText={this.state.text}
        maxSearchResults={10}
        onNewRequest={this.handleRequest}
        onUpdateInput={this.handleUpdateInput}
      />
    )
  }
}

SearchBar.propTypes = {}

export default SearchBar
