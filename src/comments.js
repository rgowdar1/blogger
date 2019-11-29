import React from 'react'
import {startSetComments} from '../src/actions/comments'
import {connect} from 'react-redux'
import {Card,Badge} from 'react-bootstrap'

class Comments extends React.Component {
    constructor() {
        super()
        this.state={
            isClicked:false
        }
    }
    handle=()=>{
        this.setState({isClicked:true})
    }
    componentDidMount() {
        this.props.dispatch(startSetComments(this.props.match.params.id))
    }
    render() {
        return (
            <div style={{backgroundColor:"#A9A9A9"}} className="p-3 mb-2  text-dark">
                <button className="btn btn-warning" onClick={
                    this.handle
                }>SHOW COMMENTS</button><br/><br/>
                {this.state.isClicked && (<div className="row">
                    <div className="col-md-8 offset-md-2">
                    {this.props.comments.length!==0 && (<div>
                  <h2 className="text-center"> COMMENTS:<Badge pill variant="primary">{this.props.comments.length}</Badge> </h2><br/><br/>
                      {this.props.comments.map((com)=>{
                          return <div><Card className="text-center" style={{ width: '45rem' }} bg={com.id%2===0?'light':'secondary'} border="primary">
                          <Card.Header></Card.Header>
                          <Card.Body>
                          <Card.Title><strong>Name:</strong>{com.name}<br/>
                                <strong>Email:</strong>{com.email}</Card.Title>
                           <Card.Text>
                                  <h4>COMMENT:</h4> 
                                  {com.body} 
                          </Card.Text>
                          </Card.Body>
                          <Card.Footer></Card.Footer>
                      </Card><br/></div>
                      })}
                </div>  )}
                    </div>
                </div>) }
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {
        comments:state.comments
    }
}

export default connect(mapStateToProps)(Comments)