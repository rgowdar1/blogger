import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import usersReducer from '../reducers/users'
import postsReducer from '../reducers/posts'
import commentsReducer from '../reducers/comments'
import singleUserReducer from '../reducers/singleUser'
const configureStore=()=>{
    const store=createStore(combineReducers({
        users:usersReducer,
        posts:postsReducer,
        comments:commentsReducer,
        singleUser:singleUserReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore