
// react: 框架的核心包
// reactdom: 渲染的核心
// 其他包
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

// 全局样式文件css

import './index.css';
// 引入根组件
import App from './App';
//import reportWebVitals from './reportWebVitals';
import registerServiceWorker from "./registerServiceWorker";
import AuthReducer from "./store/reducers/auth";
import PostReducer from "./store/reducers/post";
import UserReducer from "./store/reducers/user";
import AdminReducer from "./store/reducers/admin";
import CommentReducer from "./store/reducers/comment";

// 渲染根组件到id为root的dom节点上

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

// 去除严格模式节点
//  <React.StrictMode>
    <App />
//  </React.StrictMode>
)




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// reportWebVitals();
