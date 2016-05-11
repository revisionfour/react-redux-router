import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index'
import { Link } from 'react-router';

class PostsShow extends React.Component{

	static contextTypes = {
		router: PropTypes.object
	};

	componentWillMount(){
		this.props.fetchPost(this.props.params.id);
	}

	onDeleteClick(){
		this.props.deletePost(this.props.params.id).then(() => {this.context.router.push('/'); });
	}

	render(){
		const { post } = this.props;

		if(!this.props.post){
			return <div>Loading...</div>
		}

		return (
			<div>
				<div id="post-top" className="row">
					<Link to="/">Back to Index</Link>
					<button className="btn btn-danger pull-xs-right" onClick={this.onDeleteClick.bind(this)}>Delete Post</button>
				</div>
				<div className="post">
					<h3>{post.title}</h3>
					<h6>Categories: {post.categories}</h6>
					<p>{post.content}</p>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state){
	return { post: state.posts.post }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);