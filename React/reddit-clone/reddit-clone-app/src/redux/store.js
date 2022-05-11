// import { configureStore } from "@reduxjs/toolkit";
// import { createStore, applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk'

// import { configureStore } from '@reduxjs/toolkit'
// import { composeWithDevTools } from "redux-devtools-extension";
// import thunk from "redux-thunk";
// import theme from "./theme/themeSlice";
// import userReducer from "./features/userSlice";
// import logger from "redux-logger";

// const middlewares = [thunk];
// const middlewareEnhancer = applyMiddleware(...middlewares)
// const enhancers = [middlewareEnhancer]
// const composedEnhancers = composeWithDevTools(...enhancers)


// export default configureStore({
//     reducer: {
//         // theme,
//         // user: userReducer,
//         composeWithDevTools()

//     },
// });

// const store = configureStore({
//     reducer: {
//         theme,
//         user: userReducer,

//     },
//     composeWithDevTools(applyMiddleware(...middlewares))

//     // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

// }
// )
// const store = configureStore({
//     reducer,
//     composedEnhancers,
// })

// export default store

import { applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import theme from "./theme/themeSlice";
import userReducer from "./features/userSlice";

import thunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from "../redux/post/rootReducer";
// const reducer = {
//     theme,
//     user: userReducer,
// }
const middleware = [thunk];
if (process.env.NODE_ENV === 'development') {
    middleware.push(logger);
}

const store = configureStore({
        reducer: rootReducer,
        theme,
        userReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

    }

)

export default store;