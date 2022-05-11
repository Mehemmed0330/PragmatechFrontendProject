import { combineReducers } from 'redux';
import postReducer from './reducer';
import theme from "../theme/themeSlice";
import userReducer from "../features/userSlice";
const rootReducer = combineReducers({
    post: postReducer,
    theme,
    user: userReducer,
})

export default rootReducer;