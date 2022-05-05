import config from 'config';
import {postRequest, postRequest_v2} from "../utils/ajax";
import {history} from '../utils/history';
import {message} from 'antd';

const saveUserInfo = (data)=>{
    localStorage.setItem('userToken', data.token)
    localStorage.setItem('userRoles', JSON.stringify(data.userRoles))
    localStorage.setItem('userName', data.userName)
}

export const getUserRoles = ()=>{
    return JSON.parse(localStorage.getItem('userRoles'))
}

export const getUserName = ()=>{
    return localStorage.getItem('userName')
}

export const getToken =()=>{
    return localStorage.getItem('userToken')
}

export const removeUserInfo = ()=>{
    localStorage.removeItem('userToken')
    localStorage.removeItem('userRoles')
    localStorage.removeItem('userName')
}

export const userRolesConvert = (userRoles)=>{
    let rolesList = []
    const dict = {'ROLE_USER':'User','ROLE_ADMIN':'Admin'}
    for(let role of userRoles){
        let userType = role['authority']
        if (userType in dict){
            rolesList.push(dict[userType])
        }else message.error("User Type Unknown");
    }
    return rolesList
}

export const login = (data) => {
    const url = `${config.apiUrl}/login`;
    const callback = (data) => {
        if(data.code === 20000) {
            saveUserInfo(data.data)
            history.push("/home");
            message.success(data.msg);
        }
        else{
            message.error(data.msg);
        }
    };
    postRequest_v2(url, data, callback);
};

export const logout = () => {
    const url = `${config.apiUrl}/logout`;

    const callback = (data) => {
        if(data.code ===20000) {
            removeUserInfo();
            history.push("/login");
            message.success(data.msg);
        }
        else{
            message.error(data.msg);
        }
    };
    postRequest(url, {}, callback);
};

export const checkSession = (callback) => {
    const url = `${config.apiUrl}/checkSession`;
    postRequest(url, {}, callback);
};

