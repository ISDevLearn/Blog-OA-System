// 登录模块
import { makeAutoObservable } from "mobx"
import { http } from "../utils";

class LoginStore {
    token = ''
    constructor() {
        // 响应式
        makeAutoObservable(this)
    }
    // 登录
    login = async ({ username, password }) => {
        // 调用登录接口
        const res = await http.post('http://127.0.0.1:8080/login/', {
            username,
            password
        })
        console.log(res.data)
        // 存入token
        this.token = res.data.token
    }
}

export default LoginStore