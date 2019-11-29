import React from 'react'
//import axios from 'axios'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {Card,Badge} from 'react-bootstrap'
import InfiniteScroll from 'react-infinite-scroll-component'
import image4 from './images/social2.jpg'
import image5 from './images/mael.jpg'
import {Button,Spinner} from 'react-bootstrap'

class Posts extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            posts:props.posts,
            items:[],
            start:4,
            end:8
        }
    }
    fetchMoreData = () => {
        let start = this.state.start, end = this.state.end
      let item = this.state.posts.slice(start, end)
      start = end 
      end = end + 5
      this.setState({start, end})
      setTimeout(() => {
        this.setState({
          items: this.state.items.concat(item)
        })
      }, 1000);
    } 
    componentDidMount() {
        let items=[]
        setTimeout(() => {
            items=this.state.posts.slice(0,4)
            this.setState({items})
        }, 500);
    }
    render() {
    console.log(this.state.items)
        return (
            <div style={{backgroundColor:'#F0E68C'}}>
                <br/>
                <h1 className="text-center">TOTAL POSTS:&nbsp;<Badge pill variant="danger">{this.state.posts.length}</Badge></h1>
                <br/>
                <div className="row">
                    <div className="col-md-7 offset-md-3">
                        <InfiniteScroll
                            dataLength={this.state.items.length}
                             next={this.fetchMoreData}
                             hasMore={true}
                             loadMore={true}
                            loader={<div className="text-center"> <Spinner animation="grow" variant="primary" />
                            <Spinner animation="grow" variant="secondary" />
                            <Spinner animation="grow" variant="success" />
                            <Spinner animation="grow" variant="danger" />
                            </div>}
                        >
                {this.state.items.map((post,i)=>{ 
                return  <div key={post.id} className="col-md-7"><Card bg={post.id%2===0 ? 'light':'info'} className="text-center" border="primary" style={{width:'40rem'}}>
                    <Card.Header><Card.Img className="text-right" variant="top" style={{height:'200px',width:'500px'}} src={post.id%2===0?image4:image5}/></Card.Header>
                        <Card.Body>
                            <Card.Title>{post.title}-</Card.Title>
                            <Card.Text>
                                {post.body}
                            </Card.Text>
                        </Card.Body>
                    <Card.Footer><Button variant="warning"><Link to={`/posts/${post.id}`}>View Post</Link></Button></Card.Footer>
                </Card><br/></div> })}
        </InfiniteScroll>
            
    </div>
        </div>     
            </div>
        )
    }
}

const mapStateToPosts=(state)=>{
    return {
        posts:state.posts
    }
}
export default connect(mapStateToPosts)(Posts)