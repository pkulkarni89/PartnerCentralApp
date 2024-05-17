const initialState = {
    isLoggedIn: false,
    savedUser:[],
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return { ...state, isLoggedIn: true };
        case 'SAVE':
          return { ...state, savedUser: [...state.savedUser,action.payload] };
      case 'LOGOUT':
        return { ...state, isLoggedIn: false, savedUser: "" };
      // Other cases if needed
      default:
        return state;
    }
  };
  
  export default authReducer;