$(document).ready(function() {
  var post = {
    title: 'I love blood!',
    body: 'It is so delicious.'
  };

  $('h1').text(post.title);
  $('#view p').text(post.body);
  $('input#title').val(post.title);
  $('textarea#body').val(post.body);
  $('#start-editing').click(function() {
    $('#view').hide();
    $('#edit').show();
  });

  $('#edit form').submit(function(event) {
    event.preventDefault();
    post.title = $('input#title').val();
    post.body = $('textarea#body').val();
    $('h1').text(post.title);
    $('#view p').text(post.body);
    $('input#title').val(post.title);
    $('textarea#body').val(post.body);
    $('#edit').hide();
    $('#view').show();
  });
});
