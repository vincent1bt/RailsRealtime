var Post = React.createClass({
  render: function() {
    return (
      <div>
        <p>{this.props.post.title}</p>
        <p>{this.props.post.body}</p>
      </div>
    );
  }
});
