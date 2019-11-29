import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import configureStore from '../src/store/configureStore'
import {Provider} from 'react-redux'
import {startSetUsers} from '../src/actions/users'
import {startSetPosts} from '../src/actions/posts'


const store=configureStore()

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(startSetUsers())
store.dispatch(startSetPosts())

const ele=(
    <Provider store={store}>
        <App/>
    </Provider>
)


ReactDOM.render(ele, document.getElementById('root'));


