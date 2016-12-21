import React, {PropTypes, Component} from 'react'
import AutoComplete from 'material-ui/AutoComplete'
import MenuItem from 'material-ui/MenuItem'
import {browserHistory} from 'react-router'


class SearchBar extends Component {
  state = {
    text: ''
  }

  componentWillReceiveProps({items}) {
    console.log(items)
  }

  handleSuccessReq(login, name) {
    const url = `${login}/${name}`
    this.props.setNavBarTitle(url)
    this.props.setRepoURL(url)
    this.props.resetSearch()
    browserHistory.push(`/${url}`)
  }

  handleUpdateInput = (value) => this.setState({text: value.slice(0, 50)})

  handleRequest = (query) => {
    this.props.requestSearch(query)
    this.setState({text: ''})
  }


  render() {

    return (
      <AutoComplete
        hintText='Search'
        filter={AutoComplete.fuzzyFilter}
        dataSource={[1,2,3]}
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
