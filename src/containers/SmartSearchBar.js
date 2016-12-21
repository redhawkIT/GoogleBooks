import {connect} from 'react-redux'
import {setNavBarTitle} from '../actionCreators/UIActions'
import {requestSearch} from '../actionCreators/BookActions'
import {googleAutoSuggest} from '../actionCreators/googleAutoSuggestActions'
import SearchBar from '../components/SearchBar'

const mapStateToProps = (state) => {
  return {books: state.books, google: state.google}
}

export default connect(
  mapStateToProps, {
    requestSearch,
    googleAutoSuggest
  }
)(SearchBar)
