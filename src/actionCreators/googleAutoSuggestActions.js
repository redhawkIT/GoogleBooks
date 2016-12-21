import JSONP from 'jsonp'
import {FETCH_AUTO_SUGGEST_REQUEST, FETCH_AUTO_SUGGEST_FAILURE, FETCH_AUTO_SUGGEST_SUCCESS} from '../constants/actionTypes'

// client determines the type of result that you receive (XML [toolbar], JSON [firefox], JSONP [chrome])
// ds limits the search to a specific site (books [bo], youtube [yt] etc.).
// q is, of course, the query text
const googleAutoSuggestURL = 'http://suggestqueries.google.com/complete/search?client=books&ds=bo&q='

const request = () => {
  return {
    type: FETCH_AUTO_SUGGEST_REQUEST
  }
}

export const failure = () => {
  return {
    type: FETCH_AUTO_SUGGEST_FAILURE
  }
}

export const success = items => {
  return {
    type: FETCH_AUTO_SUGGEST_SUCCESS,
    items
  }
}

export const googleAutoSuggest = keyword => {
  const url = googleAutoSuggestURL + keyword
  return dispatch => {
    dispatch(request())
    JSONP(url, (error, data) => {
      if (error) {
        dispatch(failure())
      } else {
        dispatch(success(data))
      }
    })
  }
}
