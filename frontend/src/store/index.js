// 统一处理所有模块，导出一个统一的方法useStore

import React from "react"
import LoginStore from './login.Store'

class RootStore {
    // 组合模块
    constructor() {
        this.loginStore = new LoginStore()
    }
}

// 实例化根
// 导出useStore context
const rootStore = new RootStore()
const context = React.createContext(rootStore)

const useStore = () => React.useContext(context)

export { useStore }