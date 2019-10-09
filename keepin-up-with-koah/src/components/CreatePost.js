import React, {useState} from 'react'
import axios from 'axios'
import '../stylesheets/createPost.scss'

function CreatePost(props){
    const [createPost, setPostContent] = useState({
        content:{
            title:  '',
            body: '',
            category: '',
            previewImg: '',
            postImage1: '',
            postImage2: '',
            postImage3: '',
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

        console.log(createPost)
        if(localStorage.getItem('loggedIn') === 'true'){    
        axios
        .post(`http://localhost:4500/api/posts`, content, {
            headers: {
            'Authorization': localStorage.getItem('token'),
          }
        })
        .then(res => {
                console.log(res)
                props.history.push('/')
            })
            .catch(err => {
                console.log(err)
            })
        }
    }
    
    const { title, body , category, previewImg, postImage1, postImage2, postImage3} = createPost.content

    return(
        <div className='create-post-container'>
        {console.log(localStorage.getItem('loggedIn'))}

        <div className='create-post-bg'>
            <h1> Create Post</h1>
            <form className='create-post' method='POST' onSubmit={e => submitPost(e, createPost.content)}>
                <input
                    className='post-form'
                    type='text'
                    value={title}
                    onChange={handleInputChange}
                    name='title'
                    placeholder='title'
                />
                <input
                    className='post-form'
                    type='text'
                    value={previewImg}
                    onChange={handleInputChange}
                    name='previewImg'
                    placeholder='Preview Image'
            />
            <input
                className='post-form'
                type='text'
                value={postImage1}
                onChange={handleInputChange}
                name='postImage1'
                placeholder='Post Image 1'
             />
            <input
                className='post-form'
                type='text'
                value={postImage2}
                onChange={handleInputChange}
                name='postImage2'
                placeholder='Post Image 2'
             />
            <input
                className='post-form'
                type='text'
                value={postImage3}
                onChange={handleInputChange}
                name='postImage3'
                placeholder='Post Image 3'
             />

            <input
                className='post-form'
                type='text'
                value={category}
                onChange={handleInputChange}
                name='category'
                placeholder='category'
             />
            <textarea
                className='post-form'
                type='text'
                value={body}
                onChange={handleInputChange}
                placeholder='Insert Description'
                name='body'
             />
             <button type="submit">Submit</button>
        </form>
            </div>
        </div>
    )
}

export default CreatePost