import {connect} from 'react-redux'
import App from '../components/App'
import {toggleSlideDrawer, toggleSnackBar} from '../actionCreators/UIActions'

const mapStateToProps = (state) => ({...state})

export default connect(
  mapStateToProps, {
    toggleSlideDrawer,
    toggleSnackBar
  }
)(App)
