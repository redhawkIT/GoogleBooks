import {connect} from 'react-redux'
import {setNavBarTitle} from '../actionCreators/UIActions'
import {requestSearch} from '../actionCreators/BookActions'
import SearchBar from '../components/SearchBar'

const mapStateToProps = (state) => {
  return {...state.books}
}

export default connect(
  mapStateToProps, {
    requestSearch
  }
)(SearchBar)
