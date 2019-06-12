import { combineReducers } from 'redux'
const InitialState = {
  Data: [
    { id: 1, fullName: 'admin', email: 'admin@gmail.com', phone: '0823213' },
    { id: 2, fullName: 'user', email: 'user@gmail.com', phone: '082322233' }
  ],
  message: null,
  isLoading: false,
  error: false
}

const InputDataReducer = (state = InitialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  getData: InputDataReducer
})
