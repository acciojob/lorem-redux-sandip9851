import React from "react";
import {render} from "react-dom";
import Reducers from "./components/Reducer.js";
import PostValue from "./components/Connect.js";
import {createStore} from "redux";
import {Provider} from "react-redux";


const store = createStore(Reducers)
//store.dispatch(UpdatePost({title:'hold',body:'my beer'}))
console.log(store.getState())
render(<Provider store={store}>
        <PostValue />
        </Provider>,document.getElementById("root"))