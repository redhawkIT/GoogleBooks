import React, {Component} from 'react'

import NavBar from './NavBar'
import SlideDrawer from './SlideDrawer'
import ContactSnackbar from './ContactSnackbar'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSlideDrawer: false,
      title: 'Home',
      isSnackBar: false
    }
  }


  handleToggle = () => this.setState({isSlideDrawer: !this.state.isSlideDrawer})
  toggleSnackBar = () => this.setState({isSnackBar: !this.state.isSnackBar})
  setTitle = title => this.setState({title})

  render() {
    const {title, isSlideDrawer, isSnackBar} = this.state
    return (
      <div>
        <ContactSnackbar isOpen={isSnackBar} toggle={this.toggleSnackBar}/>
        <NavBar
          handleToggle={this.handleToggle}
          title={title}
          toggleSnackBar={this.toggleSnackBar}
        />

        <SlideDrawer
          handleToggle={this.handleToggle}
          open={isSlideDrawer}
          setTitle={this.setTitle}
        />

        { /* child component will be rendered here */ }
        {this.props.children}

      </div>
    )
  }
}

export default App
