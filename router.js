Blogger.Router.map(function() {
  this.resource('posts', {path: '/'});
  this.resource('post', {path: 'posts/:post_id'});
  this.resource('recent-comments');
  this.resource('about');
  this.resource('contact', function() {
    this.resource('phone');
    this.resource('email');
  });
});
