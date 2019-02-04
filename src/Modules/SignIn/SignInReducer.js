import ActionTypes from '../../Constants';


const initialState = {
    email: '',
    password: '',
    user: {},
    error: '',
    loading: false,
    refreshing: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SIGNIN_EMAIL_CHANGED:
            return ({
                ...state,
                email: action.payload,
            });
        case ActionTypes.SIGNIN_PASSWORD_CHANGED:
            return ({
                ...state,
                password: action.payload,
            });
        case ActionTypes.SIGNIN:
            return ({
                ...state,
                loading: true
            });
        case ActionTypes.SIGNIN_SUCCESS:
            return ({
                ...state,
                ...initialState,
                user: action.payload
            });
        case ActionTypes.SIGNIN_FAIL:
            return ({
                ...state,
                loading: false,
                error: action.payload
            });
        case ActionTypes.SIGNIN_RESET:
            return ({
                ...state,
                error: '',
                password: '',
                loading: false
            });
        case ActionTypes.SIGNIN_LOGOUT:
            return ({ 
                ...state,
                ...INITIAL_STATE
            });
        default:
            return state;
    }
}