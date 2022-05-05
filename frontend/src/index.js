import React from 'react';
import ReactDOM from 'react-dom';

// 全局样式文件css
// import './index.css';
// 引入根组件
import App from './App';

// 渲染根组件到id为root的dom节点上

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

// 去除严格模式节点
//  <React.StrictMode>
    <App />
//  </React.StrictMode>
)

