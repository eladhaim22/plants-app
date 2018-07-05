const SET_AUTH_MESSAGE = 'set_auth_message';

const INITIAL_STATE = { auth: {message:null} };

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case SET_AUTH_MESSAGE:
          let newAuth = Object.assign({},state.auth);
          newAuth.message = action.payload
            return {...state, message: action.payload };
    }

    return state;
}
