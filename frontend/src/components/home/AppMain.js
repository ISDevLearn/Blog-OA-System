import React from 'react'
import IndexRouter from '../../router/IndexRouter'

function AppMain(props) {

    return (
        <div className='app-main'>
            <IndexRouter {...props}/>
        </div>
    )
}

export default AppMain
