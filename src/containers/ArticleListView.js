import React, { useState, useEffect } from 'react'
import axios from 'axios'

import Articles from '../components/Article';

const ArticleList = () => {
    var filterArticles = []
    function toFilterArticles(article) {
        if (article.username === localStorage.getItem('username')) {
            return article
        }
    }

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


    filterArticles = articles.filter(toFilterArticles)

    return (
        <>
            <Articles data={filterArticles} />
        </>
    )
}

export default ArticleList;