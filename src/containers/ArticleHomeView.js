import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Articles from '../components/HomeArticle';
import CustomForm from '../components/Form';

const ArticleHome = () => {


    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const article = await axios('http://127.0.0.1:8000/api/',
            );
            setArticles(article.data)
            // console.log(article.data)
        };

        fetchData();
    }, []);
    return (
        <>

            <Articles data={articles} />
            <h2>Create an Article</h2>
            <CustomForm
                requestType="post"
                id={null}
                btnText="Create"
            />
        </>
    )
}

export default ArticleHome;