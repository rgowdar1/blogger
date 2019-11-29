const postsInitialState=[]
export default (state=postsInitialState,action)=>{
    switch(action.type) {
        case 'SET_POSTS': {
            return [...action.payload]
        }
        default:{
            return [...state]
        }
    }
}