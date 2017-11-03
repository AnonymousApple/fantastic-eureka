$('#arrow').attr('style', 'position: relative;left: 640px;')
$('#user').attr('style', 'position: relative;left: 630px;')
$('.message').attr('style', 'position: relative;left: 510px;')
var clicked = false;
$('#user').click(function() {
  if (clicked === false) {
    clicked = true;
    $.get('http://jsonplaceholder.typicode.com/posts', function(data){
      console.log(data);
    });
    $.get('http://jsonplaceholder.typicode.com/posts/10', function(data){
      console.log(data);
    });
    $.get('http://jsonplaceholder.typicode.com/posts', function(data){
      console.log(data);
    });
    $.get('http://jsonplaceholder.typicode.com/posts/10', function(data){
      console.log(data);
    });
    $.get('http://jsonplaceholder.typicode.com/post/12/comments', function(data){
      console.log(data);
    });
    $.get('http://jsonplaceholder.typicode.com/user/2/posts', function(data){
      console.log(data);
    });
    $.ajax({
      method: 'PUT',
      url: 'http://jsonplaceholder.typicode.com/posts/12',
      data: {
        userId: 1,
        title: "New Post",
        body: "New post added"
      },
      complete: function(response){
        console.log(response.responseJSON);
      }
    })
    $.ajax({
      method: 'PUT',
      url: 'http://jsonplaceholder.typicode.com/posts/12',
      data: {
    title: "put it"
    },
      complete: function(response){
        console.log(response.responseJSON);
      }
    })
    $.ajax({
      method: 'DELETE',
      url: 'http://jsonplaceholder.typicode.com/posts/12',
      complete: function(response){
        console.log(response.statusText);
      }
    })
  } else {
    $('#user').attr('disabled', 'disabled');
  }
})
