import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from 'antd';
import { useParams } from "react-router-dom"
import CustomForm from '../components/Form';

const ArticleDetail = (props) => {

    const { id } = useParams();

    const [articles, setArticles] = useState([]);
    useEffect(

        async () => {
            const article = await axios(`http://127.0.0.1:8000/api/${id}/`,
            );
            setArticles(article.data)
            // console.log(article.data)



        }, []);



    return (
        <><div></div>
            <Card title={articles.title}><p>{articles.content}</p></Card>
            <h2>Update an Article </h2>
            <CustomForm
                requestType='put'
                id={id}
                btnText="Update"
            />
        </>
    )
}


export default ArticleDetail;