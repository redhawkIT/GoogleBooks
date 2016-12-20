import {connect} from 'react-redux'
import App from '../components/App'
import {toggleSlideDrawer} from '../actionCreators/UIActions'
// import {toggle} from '../actionCreators/contactSnackbarActions'

const mapStateToProps = (state) => ({...state})

export default connect(
  mapStateToProps, {
    toggleSlideDrawer,
    // toggleSnackBar: toggle
  }
)(App)
