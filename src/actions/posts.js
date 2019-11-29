import axios from 'axios'

export const setPosts=(posts)=>{
    return {type:'SET_POSTS',payload:posts}
}

export  const startSetPosts=()=>{
    return (dispatch)=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts`)
        .then(response=>{
            const posts=response.data
            dispatch(setPosts(posts))
        })
    }
}