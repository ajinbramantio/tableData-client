export const insertDataTable = data => {
  return async dispatch => {
    // console.log(data)

    dispatch(insertDataSuccess(data))
  }
}

const insertDataSuccess = response => ({
  type: 'INPUT_SUCCESS',
  payload: {
    dataContacts: response
  }
})
