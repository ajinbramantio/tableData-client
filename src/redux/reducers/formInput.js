import { combineReducers } from 'redux'
const InitialState = {
  dataContacts: [
    { id: 1, fullName: 'admin', email: 'admin@gmail.com', phone: '0823213' },
    { id: 2, fullName: 'user', email: 'user@gmail.com', phone: '082322233' }
  ]
}

const InputDataReducer = (state = InitialState, action) => {
  console.log(state)
  switch (action.type) {
    case 'INPUT_SUCCESS':
      console.log(action.payload)

      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  getData: InputDataReducer
})
