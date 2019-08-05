const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("Login ERROR");
      return {
        ...state,
        authError: "Login failed"
      };
    case "LOGIN_SUCCESS":
      console.log("login SUCCESS");
      return {
        ...state,
        authError: null
      };
    case "SIGNOUT_SUCCESS":
      console.log("signOut_SUCCESS");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("signUP SUCCESS");
      return {
        ...state,
        authError: null
      };
    case "SIGNUP_ERROR":
      console.log("signUP ERROR");
      return {
        ...state,
        authError: action.err.message
      };
    default:
      return state;
  }
};

export default authReducer;
