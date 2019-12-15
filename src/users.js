import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {Badge,Card,Button} from 'react-bootstrap'

class Users extends React.Component {
    render() {
        console.log(this.props.users)
        return (
            <div style={{backgroundColor:'#C4EDDE'}}>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <br/><br/>
                    {this.props.users.map((user,i)=>{
                        return <div key={user.id}>
                         <Card  className="text-center" border="primary" style={{width:'40rem',backgroundColor:'#F0E68C'}}>
                             <Card.Header><Card.Img className="text-right" variant="top" style={{height:'120px',width:'200px'}} src={user.profile} /></Card.Header>
                            <Card.Body>
                                <Card.Title><strong>{user.name}</strong></Card.Title>
                                <Card.Text>
                                    {user.email}<br/>
                                    <h5>Posts:<Badge pill variant="warning"><h6>10</h6></Badge></h5>
                                </Card.Text>
                            </Card.Body>
                         <Card.Footer><Button variant="warning"><Link to={`/users/${user.id}`}>View Posts</Link></Button></Card.Footer>
                    </Card>
                      <br/>  </div> })}
                
                </div>
              </div>  
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        users:state.users
    }
}
export default connect(mapStateToProps)(Users)