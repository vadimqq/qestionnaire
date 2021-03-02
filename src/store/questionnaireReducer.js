const SET_AGE = "SET_AGE"
const SET_LANGUAGES = "SET_LANGUAGES"

const initialState = {
  age: '',
  languages: []
}

export default function questionnaireReducer (state = initialState, action) {
  switch(action.type) {
    case SET_AGE:
      return {
        ...state,
        age: action.payload
      }
    case SET_LANGUAGES:
      return {
        ...state,
        languages: action.payload
      }
    default:
      return state
  }
}

export const setAge = (age) => ({ type: SET_AGE, payload: age })

export const setLenguages = (languages) => ({ type: SET_LANGUAGES, payload: languages })