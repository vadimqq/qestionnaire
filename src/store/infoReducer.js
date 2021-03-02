const SET_INFO = "SET_INFO"

const initialState = {
  firstName: '',
  lastName: ''
}

export default function infoReducer (state = initialState, action) {
  switch(action.type) {
    case SET_INFO:
      return {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName
      }
    default:
      return state
  }
}

export const setInfo = (state) => ({ type: SET_INFO, payload: state })