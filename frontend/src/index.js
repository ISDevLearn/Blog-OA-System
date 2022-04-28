
// react: 框架的核心包
// reactdom: 渲染的核心

import React from 'react';
import ReactDOM from 'react-dom/client';

// 全局样式文件css

import './index.css';
// 引入根组件
import App from './test';
//import reportWebVitals from './reportWebVitals';

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
