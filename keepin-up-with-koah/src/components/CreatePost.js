import React, {useState} from 'react'
import axios from 'axios'

function CreatePost(props){
    const [createPost, setPostContent] = useState({
        content:{
            title:  '',
            body: '',
            category: ''
        }
    })

    const handleInputChange = e => {
        e.preventDefault();
        setPostContent({
            content:{
                ...createPost.content, 
            [e.target.name]: e.target.value
            }
       });
    };

    const submitPost = (e, content) => {
        e.preventDefault();
        e.persist();

        console.log(createPost)
       
        axios
        .post(`http://localhost:4500/api/posts`, content)
        .then(res => {
            console.log(res)
            localStorage.getItem('token');
        })
        .catch(err => {
        console.log(err)
        })
    }
    
    const { title, body , category} = createPost.content

    return(
        <div>
        <form method='POST' onSubmit={e => submitPost(e, createPost.content)}>
          <input
                type='text'
                value={title}
                onChange={handleInputChange}
                name='title'
                placeholder='title'
            />
            <input
                type='text'
                value={category}
                onChange={handleInputChange}
                name='category'
                placeholder='category'
             />
            <textarea
                type='text'
                value={body}
                onChange={handleInputChange}
                placeholder='body'
                name='body'
             />
             <button type="submit">Submit</button>
        </form>
        </div>
    )
}

export default CreatePost