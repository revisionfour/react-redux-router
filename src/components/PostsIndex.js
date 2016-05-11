import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPosts } from '../actions/index'
import { Link } from 'react-router';

class PostsIndex extends React.Component{

	componentWillMount(){
		// console.log('This would be a good time to call an action creator to fetch posts');
		this.props.fetchPosts();
	}

	renderPosts(){
		return this.props.posts.map((post) => {
			return (
				<li className="list-group-item" key={post.id}>
					<Link to={"posts/" + post.id} >
						<span className="pull-xs-right">{post.categories}</span>
						<strong>{post.title}</strong>
					</Link>
				</li>
			);
		})
	}

	render(){
		return (
			<div>
				<div id="posts-top" className="row">
					<div className="pull-xs-left">Posts</div>
					<div className="pull-xs-right text-xs-right">
						<Link to="/posts/new" className="btn btn-primary">
							Add a Post
						</Link>
					</div>
				</div>

				
				
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}

function mapStateToProps(state){
	return { posts: state.posts.all }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);