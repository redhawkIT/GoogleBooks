import {FETCH_AUTO_SUGGEST_REQUEST, FETCH_AUTO_SUGGEST_FAILURE, FETCH_AUTO_SUGGEST_SUCCESS} from '../constants/actionTypes'

const initialState = {
	items: [],
	isSearching: false
}

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_AUTO_SUGGEST_SUCCESS:
			return Object.assign({}, state, {
				items: action.items[1].map(item => item[0]),
				isSearching: false
			})
		return state
		case FETCH_AUTO_SUGGEST_REQUEST:
			return Object.assign({}, state, {
				isSearching: true
			})
		case FETCH_AUTO_SUGGEST_FAILURE:
			return Object.assign({}, state, {
				isSearching: false
			})
		default:
			return state
	}
}
