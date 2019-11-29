import React from 'react'
//import axios from 'axios'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Card,Badge} from 'react-bootstrap'

class ShowUserPost extends React.Component {
    render() {
        return (
            <div style={{backgroundColor:'#FFE4B5'}}><br/><br/>
                <div className="row">
                        <div className="col-md-2 offset-md-3">
                        <img src={this.props.user.profile} alt=""/>
                        </div>
                        <div className="col-md-4 offset-md-1"><br/><br/>
                        <h5 className="text-primary"><strong>NAME:</strong> {this.props.user.name}</h5>
                        <h5 className="text-secondary"><strong>EMAIL:</strong>{this.props.user.email}</h5>
                        <h5 className="text-info"><strong>CONTACT:</strong>{this.props.user.phone}</h5>
                        <h5 className="text-info"><strong>WEBSITE:</strong>{this.props.user.website}</h5>
                        </div>
                </div><br/>
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                    <h1 className="text-center">POSTS WRITTEN BY AUTHOR:<Badge pill variant="warning">{this.props.posts.length}</Badge></h1>
                           
            {this.props.posts.map(post=>{
                return<div key={post.id}><Card className="text-center" bg={post.id%2===0?'secondary':'light'} border="primary">
            <Card.Header><strong>{post.title}</strong></Card.Header>
            <Card.Body>
              <Card.Title>About:-</Card.Title>
              <Card.Text>
              {post.body}
              </Card.Text>
            </Card.Body>
            <Card.Footer><button type="button" className="btn btn-outline-primary"><Link to={`/posts/${post.id}`}><h4>View Post</h4></Link></button></Card.Footer>
          </Card><br/></div> })}
                    </div>
                </div>
                
            </div>
        )
    }
}
const mapStateToProps=(state,props)=>{
    return {
        user:state.users.find(user=>user.id==props.match.params.id),
        posts:state.posts.filter(post=>post.userId==props.match.params.id)
    }
}
export default connect(mapStateToProps)(ShowUserPost)