import history from '../history';

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  console.log(userId);
  const response = await fetch(`http://localhost:3001/streams`,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({ ...formValues, userId })
    })
    .then(response => response.json())
  dispatch({ type: "CREATE_STREAM", payload: response })
  history.push('/');
}

export const fetchStreams = () => async (dispatch) => {
  const response = await fetch(`http://localhost:3001/streams`)
    .then(response => response.json())
  dispatch({ type: "FETCH_STREAMS", payload: response })
}

export const fetchStream = (id) => async (dispatch) => {
  const response = await fetch(`http://localhost:3001/streams/${id}`)
    .then(response => response.json())
  dispatch({ type: "FETCH_STREAM", payload: response })
}



export const deleteStream = (id) => async (dispatch) => {
  const response = await fetch(`http://localhost:3001/streams/${id}`,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "DELETE"
    })
  dispatch({ type: "DELETE_STREAM", payload: id })
  history.push('/');
}


export const updateStream = (id, formValues) => async (dispatch) => {
  const response = await fetch(`http://localhost:3001/streams/${id}`,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "PATCH",
      body: JSON.stringify(formValues)
    })
    .then(response => response.json())
  dispatch({ type: "UPDATE_STREAM", payload: response });
  history.push('/');
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