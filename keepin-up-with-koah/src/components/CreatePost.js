import React from 'react'

function CreatePost(){
    return(
        <div>
        <form method='POST'>
          <input
            type='text'
            value={title}
            onChange={handleInputChange}
            name='title'
            placeholder='title'
             />
            <textarea
                type='text'
                value={description}
                onChange={handleInputChange}
                placeholder='description'
                name='description'
             />
             <button type="submit">Login</button>
        </form>
        </div>
    )
}

export default CreatePost