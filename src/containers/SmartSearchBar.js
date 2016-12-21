import {connect} from 'react-redux'
import {setNavBarTitle} from '../actionCreators/UIActions'
import SearchBar from '../components/SearchBar'

const mapStateToProps = (state) => {
  return {...state}
}

export default connect(
  mapStateToProps, {}
)(SearchBar)
