import React, { Component } from 'react';
import axios from 'axios';
import Post from "./MoviPost";

 class Movies extends Component {
    constructor(props){
        super(props);
        this.state={
            posts:[],
            isError:false,
        };
    };

    componentDidMount(){
        this.getData();
    }

    getData=()=>{
        axios
            .get("http://localhost:3000/movies.json")
            .then((response)=> this.setState({posts:response.data }))
            .catch(()=>this.setState({isError:true}));
    };
    
    
  render() {
    const {posts,isError}=this.state;
    return (
      <div className='mainBox'>
			<div className='containerBox'>
				{this.state.posts.map((post)=>(
                    <Post id={post.Id} title={post.Title} director={post.Director} year={post.Year} genre={post.Genre} />
                    
                ))}
            </div>
            <div>
				{isError ? (
					<h3>Error…</h3>
				) : (
				posts.map((post)=>(
                    <Post id={post.Id} title={post.Title} director={post.Director} year={post.Year} genre={post.Genre} />
                ))
                )}
            </div>
            <div className='searchPart'>
                <input type="text" name="searchPart" value=""/>
            <div>
                list of genre
            </div>
          
        </div>

        



      </div>
    )
  }
}
export default Movies;