import {FETCH_BOOKS_REQUEST,FETCH_BOOKS_FAILURE, FETCH_BOOKS_SUCCESS} from '../constants/actionTypes'

const initialState = {
	items: [],
	isSearching: false
}

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCH_BOOKS_SUCCESS:
			return Object.assign({}, state, {
				items: action.items,
				isSearching: false
			})
		return state
		case FETCH_BOOKS_REQUEST:
			return Object.assign({}, state, {
				isSearching: true
			})
		case FETCH_BOOKS_FAILURE:
			return Object.assign({}, state, {
				isSearching: false
			})
		default:
			return state
	}
}
