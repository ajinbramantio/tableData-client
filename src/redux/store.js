import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import rootReducer from './reducers/formInput'
const ReduxStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default ReduxStore
