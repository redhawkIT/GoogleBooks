import React, {Component} from 'react'

import NavBar from './NavBar'
import SlideDrawer from './SlideDrawer'
import ContactSnackbar from './ContactSnackbar'
import BookList from './BookList'


class App extends Component {
    state = {
      title: 'Home'
    }

  setTitle = title => this.setState({title})

  render() {
    console.log(this.props)
    const {isSlideDrawerOpen, isSnackBarOpen} = this.props.ui
    const {title} = this.state
    return (
      <div>
        <ContactSnackbar isOpen={isSnackBarOpen} toggle={this.props.toggleSnackBar}/>
        <NavBar
          handleToggle={this.props.toggleSlideDrawer}
          title={title}
          toggleSnackBar={this.props.toggleSnackBar}
        />

        <SlideDrawer
          handleToggle={this.props.toggleSlideDrawer}
          open={isSlideDrawerOpen}
          setTitle={this.setTitle}
        />

        <BookList/>

        { /* child component will be rendered here */ }
        {this.props.children}

      </div>
    )
  }
}

export default App
