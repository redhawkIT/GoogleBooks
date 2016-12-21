import {BOOK_SELECT} from '../constants/actionTypes'

export const selectBook = (bookItem) => {
	return {
		type: BOOK_SELECT,
		payload: bookItem
	}
}
