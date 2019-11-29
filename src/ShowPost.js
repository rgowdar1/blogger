import React from 'react'
//import axios from 'axios'
import {connect} from 'react-redux'
import social3 from './images/social3.png'
import {Link} from 'react-router-dom'
import {startSetUser} from '../src/actions/singleUser'
import {Button} from 'react-bootstrapgit '


class ShowPost extends React.Component {

    componentDidMount() {
        this.props.dispatch(startSetUser(this.props.post.userId))
    }

    render() {
        return (
            <div style={{backgroundColor:"#A9A9A9"}}>
            <div  className="p-3 mb-2  text-dark">
                    <h1 className="text-center">TITLE: {this.props.post && this.props.post.title}</h1><br/>
                    <img src={social3}  alt="social"/>  
                    <div className="row">
                    <div className="col-md-5 offset-md-1">
                        <h5 className="text-primary"><strong>NAME:</strong>{ this.props.user && this.props.user.name}</h5>
                        <h5 className="text-secondary"><strong>EMAIL:</strong> { this.props.user &&this.props.user.email}</h5>
                    </div> 
                    </div> 

                    <h3 className="text-center">BODY:</h3> <br/>   {this.props.post && this.props.post.body}<hr/>
        <Link to={`/users/${this.props.user.id}`}><Button className="primary">More posts of author: {this.props.user && this.props.user.name}</Button></Link>
<br/><br/>
            </div>
            </div>
        )
    }
}
const mapStateToProps=(state,props)=>{
    return {
    post:state.posts.find(post=>post.id==props.match.params.id),
    user:state.singleUser
    }
}
export default connect(mapStateToProps)(ShowPost)