import React, { useState } from 'react';
import axios from 'axios'
import '../index.css'

const CustomForm = (props) => {

    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const username = localStorage.getItem('username')


    const handleSubmit = (event, requestType, id) => {


        switch (requestType) {
            case 'post':
                return axios.post('http://127.0.0.1:8000/api/', {
                    title: title,
                    content: content,
                    username: username,
                })
                    .then(response => console.log(response))
                    .then(error => console.log(error))

            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/${id}/`, {
                    title: title,
                    content: content,
                    username: username,
                })
                    .then(response => console.log(response))
                    .then(error => console.log(error));
        }
    }

    return (
        <>
            <form onSubmit={(event) => handleSubmit(event,
                props.requestType,
                props.id
            )} action="#" >
                <div class="form">
                    <input placeholder="Enter the title" name="title" value=
                        {title} onChange={(event) => setTitle(event.target.value)} />

                    <input
                        placeholder="Enter Content of the Article" name="content" value={content}
                        onChange={(event) => setContent(event.target.value)} />

                    <button style={{ width: '60px' }} type="submit" class="primary" value="Submit">{props.btnText}</button>
                </div>
            </form>
        </>
    );


}
export default CustomForm;