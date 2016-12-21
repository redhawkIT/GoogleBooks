import JSONP from 'jsonp'
import {FETCH_AUTO_SUGGEST_REQUEST, FETCH_AUTO_SUGGEST_FAILURE, FETCH_AUTO_SUGGEST_SUCCESS} from '../constants/actionTypes'

const googleAutoSuggestURL = 'http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&q='

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
