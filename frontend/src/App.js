import React from 'react';

import { Button } from 'antd';
// import './App.css';
import LoginView from "./view/LoginView";
import LoginForm from "./components/LoginForm";
import BasicRoute from "./router/Router";

class App extends React.Component {

    render() {
        return (
            <BasicRoute/>
        );
    }
}

export default App;