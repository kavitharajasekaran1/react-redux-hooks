const initialState = {
  loading: false,
  data: [],
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return {
        ...state,
        loading: true
      };
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        data: action.payload
      };
    case "FETCH_FAILURE":
      return {
        loading: false,
        data: [],
        error: action.payload
      };
    default:
      return state;
  }
};
