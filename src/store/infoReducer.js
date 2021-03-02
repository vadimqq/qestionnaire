const SET_INFO = "SET_INFO"

const initialState = {
  firstName: '',
  lastName: '',
  city: ''
}

export default function infoReducer (state = initialState, action) {
  switch(action.type) {
    case SET_INFO:
      return {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        city: action.payload.city
      }
    default:
      return state
  }
}

export const setInfo = (state) => ({ type: SET_INFO, payload: state })