import React from 'react';
import RegForm from '../components/RegForm';
import { withRouter } from "react-router-dom";


class RegView extends React.Component{


    render(){
        return(
            <div className="login-page">
                <div className="login-container">
                    <div className="login-box">
                        <h1 className="page-title">注册</h1>
                        <div className="login-content">
                            <RegForm />
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default RegView;