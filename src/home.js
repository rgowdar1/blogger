import React from 'react'
import {Carousel,Card,Button,Spinner} from 'react-bootstrap'
import image from './images/b1.png'
import image1 from './images/new1.jpg'
import image3 from './images/new2.jpg'
import image4 from './images/social2.jpg'
import image5 from './images/mael.jpg'
import {connect} from 'react-redux'
//import axios from 'axios'
import {Link} from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'


class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            posts:props.posts,
            items:[],
            start:5,
            end:10
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
            items=this.state.posts.slice(0,5)
            this.setState({items})
            }, 500);
            
     }

    render() {
        return (
          <div style={{backgroundColor:'#FFFACD'}}>
            <br/>
            
              <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image} width="80%" height="400px"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image1}  width="80%" height="400px"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={image3} width="80%" height="400px"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3> 
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

<br/><br/>
<div className="row">
<div className="col-md-7 offset-md-0.5">
<h2 className="text-center">RECENT POSTS</h2>

<InfiniteScroll
  dataLength={this.state.items.length}
  next={this.fetchMoreData}
  hasMore={true}
  loader={<div className="text-center"> <Spinner animation="grow" variant="primary" />
  <Spinner animation="grow" variant="secondary" />
  <Spinner animation="grow" variant="success" />
  <Spinner animation="grow" variant="danger" />
  </div>}
  >
    <ul>
    {this.state.items.map((post,i)=>{ 
  return  <div key={post.id} className="col-md-6"><Card bg={post.id%2===0 ? 'light':'info'} className="text-center" border="primary" style={{width:'40rem'}}>
  <Card.Header><Card.Img className="text-right" variant="top" style={{height:'200px',width:'500px'}} src={post.id%2===0?image4:image5}/></Card.Header>
  <Card.Body>
    <Card.Title>{post.title}-</Card.Title>
    <Card.Text>
    {post.body}
  </Card.Text>
    
  </Card.Body>
  <Card.Footer><Button variant="warning"><Link to={`/posts/${post.id}`}>View Post</Link></Button></Card.Footer>
</Card><br/></div> })}
</ul>
</InfiniteScroll>
</div>  

<div className="col-md-4 offset-md-0.5">
        <h2 className="text-center">AUTHORS</h2>
        <ul className="listing-group p-3 mb-2 bg-warning text-dark">
        {this.props.users.map(user=>{
            return <div style={{backgroundColor:'#FFC0CB'}} className="list-group-item" key={user.id}><Link to={`/users/${user.id}`}>{user.name}</Link></div>
        })}

        </ul>
        </div>
        </div>
          </div>
        )
}
}

const mapStateToProps=(state)=>{
  return {
    users:state.users,
    posts:state.posts
  }
}
export default connect(mapStateToProps)(Home)