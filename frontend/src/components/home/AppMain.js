import React from 'react'
import { Alert } from 'antd'
// import { ANNOUNCEMENT } from '@/config'
// import { useMediaQuery } from 'react-responsive'
import IndexRouter from '../../router/IndexRouter'

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
            {/*{(ipadScreen || iphoneScreen) && ANNOUNCEMENT.enable && (*/}
            {/*    <Alert message={ANNOUNCEMENT.content} type='info' style={{ marginTop: iphoneScreen ? 20 : 0, marginBottom: ipadScreen ? 20 : 0 }} />*/}
            {/*)}*/}
            {/*{props.children}*/}
            <IndexRouter {...props}/>
        </div>
    )
}

export default AppMain
