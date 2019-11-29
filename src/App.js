import React from 'react';
import './App.css';
import {BrowserRouter,Link,Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Posts from './Posts'
import ShowPost from './ShowPost'
import ShowUserPost from './ShowUserPost'
import Comments from './comments'
import Home from './home'
import Users from './users'
import {Navbar,Nav} from 'react-bootstrap'
import image from './images/blogger.jpg'


function App() {
  return (
    <div>
      <BrowserRouter>
    <div>
    <Navbar bg="dark" variant="pills" defaultActiveKey="/home">
    <Navbar.Brand href="/hh"> <img
        src={image}
        width="300"
        height="100"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      /></Navbar.Brand> 
   <Nav.Item> <Nav.Link  href="/home"><Link to="/">Home</Link></Nav.Link></Nav.Item>
   <Nav.Item> <Nav.Link eventKey="link-1" ><Link to="/users">Users</Link></Nav.Link></Nav.Item>
   <Nav.Item> <Nav.Link eventKey="link-2" ><Link to="/posts">Posts</Link></Nav.Link></Nav.Item>
  </Navbar>
      <Route path="/" component={Home} exact={true}/>
      <Route path="/users" component={Users} exact={true}/>
      <Route path="/posts" component={Posts} exact={true}/>
      <Route path="/posts/:id" component={ShowPost} exact={true}/>
      <Route path="/posts/:id" component={Comments} exact={true}/>
      <Route path="/users/:id" component={ShowUserPost}/>
      
    </div>
    </BrowserRouter>

    </div>
    
  )
}
const mapStateToProps=(state)=>{
  return {
    users:state.users
  }
}

export default connect(mapStateToProps)(App)

