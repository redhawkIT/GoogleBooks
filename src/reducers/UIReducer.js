import {TOGGLE_SLIDE_DRAWER, TOGGLE_SNACK_BAR} from '../constants/actionTypes'

/*
  Things you should never do inside a reducer
  - Mutate its arguments
  - Perform side effects like API calls and routing transitions
  - Call non-pure functions, e.g. Date.now() or Math.random()
*/

const initialState = {
  isSlideDrawerOpen: false,
  isSnackBarOpen: false,
  navTitle: ''
}

function ui(state = initialState, action) {

  switch (action.type) {
    case TOGGLE_SLIDE_DRAWER:
      return {
        ...state,
        isSlideDrawerOpen: !state.isSlideDrawerOpen
      }
    case TOGGLE_SNACK_BAR:
      return {
        ...state,
        isSnackBarOpen: !state.isSnackBarOpen
      }
    default:
      return state
  }
}

export default ui
