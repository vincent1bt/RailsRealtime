PostsList = React.createClass({
  getInitialState: function() {
    return {posts: this.props.initialPosts };
  },
  componentDidMount: function(){
    var self = this;
    var socket = io.connect("http://0.0.0.0:5001");
    socket.on('rt-change', function (data) {
      self.update(data);
    });
  },
  update: function(data) {
    //var update = this.state.posts.push(data);
    var updated = this.state.posts;
    updated.unshift(data);
    this.setState({posts: updated});
  },
  render: function() {
    //console.log(this.state.posts);
    var posts = this.state.posts.map(function (post) {
      return <Post key={post.id} post={post} />;
    });
    return (
      <div className='posts'>
        {posts}
      </div>
    );
  }
});
