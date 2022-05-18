import React from 'react'
import '../../css/login.css';
import '../../css/home.css'
import { Alert } from 'antd'
// import { ANNOUNCEMENT } from '@/config'
// import { useMediaQuery } from 'react-responsive'
import IndexRouter from '../../router/IndexRouter'
import '../../css/home.css'
import ArticleList from "../ArticleList";

function AppMain(props) {
    // const iphoneScreen = useMediaQuery({
    //     query: '(max-width: 576px)'
    // })
    //
    // const ipadScreen = useMediaQuery({
    //     query: '(min-width: 576px) and (max-width: 992px)'
    // })

    return (
        <div className='app-main'>
            <div className='login-container'>
                <div className='login-box'>
                    <ArticleList />
                </div>
            </div>


            <div className='login-container'>
                <div className='login-box'>
                    <IndexRouter {...props}/>
                </div>
            </div>

            {/*<div className='.app-home'>*/}
            {/*    <div className='.app-home-list-item'>*/}
            {/*        <ArticleList />*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
        // <div>
        //

        //
        // <div className='login-container'>
        //     <div className='login-box'>
        //         <ArticleList />
        //     </div>
        // </div>
        //
        // <div className='login-container'>
        //     <div className='login-box'>
        //         <ArticleList />
        //     </div>
        // </div>
        //
        // <div className='login-container'>
        //     <div className='login-box'>
        //             <ArticleList />
        //         </div>
        //     </div>
        //
        //     <IndexRouter {...props}/>
        //
        // </div>
    )
}

export default AppMain
