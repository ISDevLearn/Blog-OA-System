import React, {useEffect, useMemo, useState} from 'react'
import '../css/home.css'

import ArticleList from "../components/ArticleList";

import BlogService from "../service/BlogService";
import StarService from "../service/StarService";

const HOME_PAGESIZE = 10

function Home(props) {
    //TODO
    const username = props.match.params.loginUsername
    const [blogList, setBlogList] = useState([])

    useEffect(() => {BlogService.getBlogByUsername(username).then(
        res => {
            for (let dataKey in res.data) {
                StarService.getStarsOfaBlog(res.data[dataKey].id).then(
                    resres => {
                        res.data[dataKey]['star'] = resres.data
                    }
                )
            }
            setBlogList(res.data)
        })
        .catch(
            err => {
        console.log(err);
        })
    }, [])

    return (
            <div className='app-home'>
                {/* list  */}
                <ArticleList list={blogList} username={username}/>

            </div>
    )
}

export default Home
