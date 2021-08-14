export const createStream = (formValues) => async (dispatch) => {
  const response = await fetch(`http://localhost:3001/streams`,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(formValues)
    })
  dispatch({ type: "CREATE_STREAM", payload: response.data })
}



export const signIn = (userId) => {
  return {
    type: 'SIGN_IN',
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  };
};