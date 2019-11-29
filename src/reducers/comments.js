const commentsInitialState=[]

export default(state=commentsInitialState,action)=>{
    switch(action.type) {
        case 'SET_COMMENTS' : {
            return [...action.payload]
        }
        default : {
            return [...state]
        }
    }
}