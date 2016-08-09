var PostList = React.createClass({
	render: function(){
		var postNodes = this.props.data.map(function(post){
			return (
				<Post key={post._id} author={post.author} date={post.timestamp} content={post.content} title={post.title} thumbnail={post.files[0]}/>
				);
		});
		return (
			<div className="postList">
				{postNodes}
			</div>
			);
	},
});

var Post = React.createClass({
	render: function(){
		return (
			<div className="post">
				{this.props.content}
				<img src={this.props.thumbnail}/>
			</div>
			);
	}
});
var PostContainer = React.createClass({	
	getInitialState: function() {
		return { data: []}
	},
	loadPostsFromServer: function(){
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			type: 'get',
			success: function(data) {
				if(data.posts){					
					this.setState({data : data.posts})
				}
			}.bind(this),
			error: function(xhr, status, err){
				console.log(this.props.url, status, err.toString())
			}.bind(this),
		})
	},
	componentDidMount: function(){
		this.loadPostsFromServer();
		setInterval(this.loadPostsFromServer, this.props.pollInterval);
	},
	render: function(){
		return(
			<div className="postContainer">
				<h1>Posts</h1>
				<PostList data={this.state.data}/>
			</div>
			);
	}
});

ReactDOM.render(
	<PostContainer url="/api/v1/posts" pollInterval={5000}/>,
	document.getElementById('posts')
	);